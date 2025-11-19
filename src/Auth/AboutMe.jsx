import { Link } from "react-router";

const AboutMe = ({ user, favorites, removeFromFav }) => {
  console.log(favorites);
  return (
    <div>
      <h2>About me</h2>
      <hr />
      <h3>Username:</h3>
      <p>{user.username}</p>
      <hr />
      <h3>User id:</h3>
      <p>{user.id}</p>
      <hr />
      <h3>{user.username}'s Favorites</h3>
      {favorites.length > 0 ? (
        <div className="gamesContainer">
          {favorites.map((fav) => {
            return (
              <div className="game" key={fav.fav_id}>
                <Link to={`/allGames/${fav.id}`}>
                  <h1>{fav.name}</h1>
                </Link>

                <p>{fav.description}</p>
                <p>Price: {fav.price}</p>
                <p>Rating: {fav.rating}/5</p>
                <img src={fav.image} />
                <br />
                <button
                  onClick={() => {
                    removeFromFav(fav.fav_id);
                  }}
                >
                  Remove from Favorites
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h4>No Favorites. Go add some!</h4>
      )}
    </div>
  );
};

export default AboutMe;
