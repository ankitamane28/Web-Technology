import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Contact Manager</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add</Link>
      </div>
    </div>
  );
}

export default Navbar;