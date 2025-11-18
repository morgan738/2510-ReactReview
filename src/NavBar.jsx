import { Link } from "react-router";

const NavBar = ({ user, setUser }) => {
  const logout = () => {
    window.localStorage.removeItem("token");
    setUser({});
  };
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/allGames">All Games</Link>
      {user.id ? (
        <span>
          <Link to="/addGame">Add a new game</Link>
          <Link to="/aboutMe">About Me</Link>
          <Link onClick={logout} to="/">
            Logout
          </Link>
        </span>
      ) : (
        <span>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </span>
      )}
    </nav>
  );
};

export default NavBar;
