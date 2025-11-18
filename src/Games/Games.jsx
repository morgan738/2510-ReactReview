import "./games.css";
import { Link } from "react-router";

const Games = ({ games, deleteGame, user }) => {
  return (
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
          </div>
        );
      })}
    </div>
  );
};

export default Games;
