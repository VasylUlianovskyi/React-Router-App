import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import UserCard from "../UserCard/index";
import LoginForm from "../LoginForm/LoginForm";
import UserList from "../UserList/UserList";
import Weather from "../WeatherWidget/Weather";
import Slider from "../Slider/index";
import ComponentsHomePage from "./ComponentsHomePage";
import NotFound from "../NotFound/NotFound";
import styles from "./ComponentsEl.module.sass";

const user = {
  photo:
    "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7154725/harry-potter-top-10-hermione-granger-moments-hermione-granger-358045.jpg?quality=90&strip=all&crop=0,15.095986038394,100,69.808027923211",
  firstName: "Hermione",
  lastName: "Granger",
  username: "h_granger",
  gender: "female",
  tweets: 828,
  following: 728,
  followers: 1329,
};

const linkStyle = ({ isActive }) =>
  isActive
    ? {
        borderBottom: "2px solid black",
      }
    : {};

const images = [
  "https://images.wallpaperscraft.com/image/single/planets_galaxy_stars_146448_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/galaxy_glow_spiral_142698_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/cosmonaut_astronaut_art_134410_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/exoplanet_atmosphere_clouds_stars_101205_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/starry_sky_stars_night_117082_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/pluto_planet_dwarf_planet_97479_1920x1080.jpg",
];

function ComponentsEl() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  const hideEl = () => {
    setShow(false);
  };
  return (
    <div className={styles.componentsWrapper}>
      <ul className={styles.componentsList}>
        <li>
          <NavLink
            to="usercard"
            style={linkStyle}
            onClick={handleClick}
            onMouseLeave={hideEl}
          >
            UserCard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="userlist"
            style={linkStyle}
            onClick={handleClick}
            onMouseLeave={hideEl}
          >
            UserList
          </NavLink>
        </li>
        <li>
          <NavLink
            to="loginform"
            style={linkStyle}
            onClick={handleClick}
            onMouseLeave={hideEl}
          >
            LoginForm
          </NavLink>
        </li>
        <li>
          <NavLink
            to="weather"
            style={linkStyle}
            onClick={handleClick}
            onMouseLeave={hideEl}
          >
            Weather
          </NavLink>
        </li>
        <li>
          <NavLink
            to="slider"
            style={linkStyle}
            onClick={handleClick}
            onMouseLeave={hideEl}
          >
            Slider
          </NavLink>
        </li>
      </ul>
      <div
        className={`${styles.contentWrapper} ${show ? styles.show : ""}`}
        onMouseEnter={() => setShow(true)}
      >
        <Routes>
          <Route index element={<ComponentsHomePage />} />
          <Route path="/usercard" element={<UserCard user={user} />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/slider" element={<Slider images={images} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default ComponentsEl;
