import { useParams, Link } from "react-router";

const SingleGame = ({ games }) => {
  const { id } = useParams();

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
      <div>
        <Link to="/allGames">Back to all Games</Link>
      </div>
    </div>
  );
};

export default SingleGame;
