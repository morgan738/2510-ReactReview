import Games from "./Games/Games";
import SingleGame from "./Games/SingleGame";
import AddGameForm from "./Games/AddGameForm";
import Layout from "./Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";

function App() {
  const [games, setGames] = useState([]);
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
      <h1>Welcome to the super secret game shop</h1>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Games games={games} />} />
          <Route path="/allGames" element={<Games games={games} />} />
          <Route path="/allGames/:id" element={<SingleGame games={games} />} />
          <Route
            path="/addGame"
            element={<AddGameForm setGames={setGames} games={games} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
