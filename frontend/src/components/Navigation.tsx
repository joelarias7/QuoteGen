import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories/motivation">Motivation</Link>
      <Link to="/categories/sad">Sad</Link>
      <Link to="/categories/happy">Happy</Link>
      <Link to="/categories/loving">Loving</Link>
    </nav>
  );
}

export default Navigation;