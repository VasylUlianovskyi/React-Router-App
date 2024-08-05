import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import LoginEl from "./LoginEl";
import SignupEl from "./SignupEl";
import styles from "./HomePage.module.sass";

function HomePage() {
  return (
    <Router>
      <header className={styles.header}>
        <div className={styles.logoWrapper}>
          <FaRegComment className={styles.logo} />
          <span className={styles.logoText}>squadhelp</span>
        </div>
        <ul className={styles.regButton}>
          <li>
            <NavLink to="/login" className={styles.button}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/signup" className={styles.button}>
              Signup
            </NavLink>
          </li>
        </ul>
      </header>

      <div className={styles.contentWrapper}>
        <Routes>
          <Route path="/login" element={<LoginEl />} />
          <Route path="/signup" element={<SignupEl />} />
        </Routes>
      </div>
    </Router>
  );
}

export default HomePage;
