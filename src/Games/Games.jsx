import "./games.css";
import { Link } from "react-router";

const Games = ({ games }) => {
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
          </div>
        );
      })}
    </div>
  );
};

export default Games;
