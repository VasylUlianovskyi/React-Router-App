import { NavLink, BrowserRouter as Router } from "react-router-dom";

import styles from "./Header.module.sass";

const linkStyle = ({ isActive }) =>
  isActive
    ? {
        borderBottom: "2px solid black",
      }
    : {};

function Header() {
  return (
    <header>
      <h1>Router App</h1>
      <nav>
        <ul className={styles.navContainer}>
          <li>
            <NavLink to="/" style={linkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/components" style={linkStyle}>
              Components
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={linkStyle}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
