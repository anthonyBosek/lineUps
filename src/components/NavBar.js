import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/form">Create</NavLink>
      <NavLink to="/all">All</NavLink>
    </nav>
  );
};

export default NavBar;
