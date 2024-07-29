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
            <NavLink to="/usercard" style={linkStyle}>
              UserCard
            </NavLink>
          </li>
          <li>
            <NavLink to="/userlist" style={linkStyle}>
              UserList
            </NavLink>
          </li>
          <li>
            <NavLink to="/loginform" style={linkStyle}>
              LoginForm
            </NavLink>
          </li>
          <li>
            <NavLink to="/weather" style={linkStyle}>
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink to="/slider" style={linkStyle}>
              Slider
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
