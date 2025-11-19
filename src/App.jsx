import Games from "./Games/Games";
import SingleGame from "./Games/SingleGame";
import AddGameForm from "./Games/AddGameForm";
import Login from "./Auth/Login";
import Layout from "./Layout";
import Register from "./Auth/Register";
import AboutMe from "./Auth/AboutMe";
import SearchGame from "./Games/SearchGame";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";

function App() {
  const [games, setGames] = useState([]);
  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState([]);

  const authenticate = async () => {
    try {
      const { data } = await axios.get(
        "https://auth-api-8ysj.onrender.com/api/me",
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        }
      );
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteGame = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://auth-api-8ysj.onrender.com/api/games/${id}`
      );
      const newGames = games.filter((game) => {
        return game.id !== id;
      });
      setGames(newGames);
    } catch (error) {
      console.error(error);
    }
  };

  const addToFav = async (id) => {
    try {
      const { data } = await axios.post(
        "https://auth-api-8ysj.onrender.com/api/favorites",
        { games_id: id },
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        }
      );
      setFavorites([...favorites, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromFav = async (id) => {
    try {
      await axios.delete(
        `https://auth-api-8ysj.onrender.com/api/favorites/${id}`,
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        }
      );
      const newFavs = favorites.filter((fav) => {
        return fav.fav_id !== id;
      });
      setFavorites(newFavs);
    } catch (error) {
      console.error(error);
    }
  };

  const checkFav = (gameId) => {
    return favorites.find((fav) => {
      return fav.id === gameId;
    });
  };

  useEffect(() => {
    const fetchFavs = async () => {
      const { data } = await axios.get(
        "https://auth-api-8ysj.onrender.com/api/favorites",
        {
          headers: {
            Authorization: `${window.localStorage.getItem("token")}`,
          },
        }
      );
      setFavorites(data);
    };
    if (window.localStorage.getItem("token")) {
      fetchFavs();
    }
  }, [user.id]);

  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      authenticate();
    }
  }, [user.id]);

  useEffect(() => {
    const fetchAllGames = async () => {
      const { data } = await axios.get(
        "https://auth-api-8ysj.onrender.com/api/games"
      );
      setGames(data);
    };
    fetchAllGames();
  }, []);
  return (
    <div>
      <h1>Super Secret Game Shop</h1>
      {user.id ? <h3>Welcome back {user.username}</h3> : null}
      <Routes>
        <Route element={<Layout user={user} setUser={setUser} />}>
          <Route
            index
            element={
              <Games
                games={games}
                deleteGame={deleteGame}
                user={user}
                addToFav={addToFav}
                checkFav={checkFav}
              />
            }
          />
          <Route
            path="/allGames"
            element={
              <Games
                games={games}
                deleteGame={deleteGame}
                user={user}
                addToFav={addToFav}
                checkFav={checkFav}
              />
            }
          />
          <Route
            path="/allGames/:id"
            element={
              <SingleGame games={games} deleteGame={deleteGame} user={user} />
            }
          />
          <Route
            path="/addGame"
            element={<AddGameForm setGames={setGames} games={games} />}
          />
          <Route
            path="/login"
            element={<Login authenticate={authenticate} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/aboutMe"
            element={
              <AboutMe
                user={user}
                favorites={favorites}
                removeFromFav={removeFromFav}
              />
            }
          />
          <Route
            path="/allGames/search/?"
            element={<SearchGame games={games} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
