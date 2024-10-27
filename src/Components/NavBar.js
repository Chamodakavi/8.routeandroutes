import React from "react";
import { Link } from "react-router-dom";
import { useMatch, useResolvedPath } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary pt-3 fixed-top">
      <div className="container ">
        <Link to="/" className="c-nav-title navbar-brand ">
          Calvino.
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navmenu">
          <ul className="navbar-nav ms-auto fw-bold">
            <CustomLink to="/aboutme">About Me</CustomLink>
            <CustomLink to="/skills">Skills</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/exp">Experience</CustomLink>
            <CustomLink to="/events">Events</CustomLink>
          </ul>
        </div>
        {/* <span className='mode w-50'><i class="bi bi-moon-fill"></i></span> */}
      </div>
    </nav>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active nav-link" : "nav-link"}>
      <Link to={to} {...props} className="nav-link">
        {children}
      </Link>
    </li>
  );
}

export default NavBar;
