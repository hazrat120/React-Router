import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink
            to="/services"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                color: isActive ? "red" : "",
                fontweight: isPending ? "bold" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            Services
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/posts/jsx/react"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            React
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/faq"
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "Bold" : "",
              };
            }}
          >
            FAQ
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
