import "./games.css";
import { Link, useNavigate } from "react-router";

const Games = ({ games, deleteGame, user, addToFav, checkFav }) => {
  const navigate = useNavigate();
  const searchGames = (formData) => {
    const target = formData.get("search");
    navigate(`/allGames/search?game=${target}`);
  };
  return (
    <div>
      <h3>Search for a game</h3>
      <form action={searchGames}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>

      <div className="gamesContainer">
        {games.map((game) => {
          return (
            <div className="game" key={game.id}>
              <Link to={`/allGames/${game.id}`}>
                <h1>{game.name}</h1>
              </Link>
              <p>{game.description}</p>
              <p>Price: {game.price}</p>
              <p>Rating: {game.rating}/5</p>
              <img src={game.image} />
              <br />
              {/* {user.id ? (
                <button
                    onClick={() => {
                    deleteGame(game.id);
                    }}
                >
                    Delete Game
                </button>
                ) : null} */}
              <button
                onClick={() => {
                  deleteGame(game.id);
                }}
                disabled={user.id ? false : true}
              >
                Delete Game
              </button>
              {user.id ? (
                checkFav(game.id) ? (
                  <button disabled={true}>Favorited</button>
                ) : (
                  <button
                    onClick={() => {
                      addToFav(game.id);
                    }}
                  >
                    Add to Favorites
                  </button>
                )
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Games;
