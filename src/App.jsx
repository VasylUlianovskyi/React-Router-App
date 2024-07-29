import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BasePage from "./BasePage";
import HomeEl from "./HomeEl/HomeEl";
import UserCard from "./UserCard/index";
import LoginForm from "./LoginForm/LoginForm";
import UserList from "./UserList/UserList";
import Weather from "./WeatherWidget/Weather";
import Slider from "./Slider/index";
import NotFound from "./NotFound";

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

const images = [
  "https://images.wallpaperscraft.com/image/single/planets_galaxy_stars_146448_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/galaxy_glow_spiral_142698_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/cosmonaut_astronaut_art_134410_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/exoplanet_atmosphere_clouds_stars_101205_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/starry_sky_stars_night_117082_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/pluto_planet_dwarf_planet_97479_1920x1080.jpg",
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomeEl />}></Route>
          <Route path="/usercard" element={<UserCard user={user} />}></Route>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/loginform" element={<LoginForm />}></Route>
          <Route path="/weather" element={<Weather />}></Route>
          <Route path="/slider" element={<Slider images={images} />}></Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
