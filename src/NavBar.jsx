import { Link } from "react-router";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/allGames">All Games</Link>
      <Link to="/addGame">Add a new game</Link>
    </nav>
  );
};

export default NavBar;
