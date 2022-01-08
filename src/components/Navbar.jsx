import { BrowserRouter as Router, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Router>
        <div>
          <Link to={"/"}>Home</Link>
          <Link to={"/About"}>About</Link>
          <Link to={"/Contact"}>Contact</Link>
        </div>
      </Router>
    </>
  );
}

export default Navbar;
