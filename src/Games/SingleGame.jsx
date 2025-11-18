import { useParams, Link, useNavigate } from "react-router";

const SingleGame = ({ games, deleteGame, user }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteAndNav = (id) => {
    deleteGame(id);
    navigate("/allGames");
  };
  const singleGame = games.find((game) => {
    return game.id === id * 1;
  });

  if (!singleGame) {
    return <div>Loading...</div>;
  }

  return (
    <div className="singleGame">
      <h2>{singleGame.name}</h2>
      <p>{singleGame.description}</p>
      <p>Price: {singleGame.price}</p>
      <p>Rating: {singleGame.rating}/5</p>
      <img src={singleGame.image} />
      <button
        onClick={() => {
          deleteAndNav(singleGame.id);
        }}
        disabled={user.id ? false : true}
      >
        Delete Game
      </button>
      <div>
        <Link to="/allGames">Back to all Games</Link>
      </div>
    </div>
  );
};

export default SingleGame;
