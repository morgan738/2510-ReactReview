import { useState, useEffect } from "react";
import { useSearchParams, Link, useNavigate } from "react-router";

const SearchGame = ({ games }) => {
  const [searchState, setSearchState] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams({});
  const nameSearch = searchParams.get("game");

  const navigate = useNavigate();

  useEffect(() => {
    const results = games.filter((game) => {
      return game.name.toLowerCase().includes(nameSearch.toLowerCase());
    });
    console.log(results);
    setSearchState(results);
  }, [games]);

  const clearSearch = () => {
    setSearchState([]);
    navigate("/");
  };

  return (
    <div>
      <h3>Search results</h3>
      {searchState.length > 0 ? (
        <div className="gamesContainer">
          {searchState.map((game) => {
            return (
              <div className="game">
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
      ) : (
        <h4>No results :( </h4>
      )}

      <button
        onClick={() => {
          clearSearch();
        }}
      >
        Clear Search
      </button>
    </div>
  );
};

export default SearchGame;
