import Slider from "./Slider";

const images = [
  "https://images.wallpaperscraft.com/image/single/planets_galaxy_stars_146448_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/galaxy_glow_spiral_142698_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/cosmonaut_astronaut_art_134410_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/exoplanet_atmosphere_clouds_stars_101205_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/starry_sky_stars_night_117082_1920x1080.jpg",
  "https://images.wallpaperscraft.com/image/single/pluto_planet_dwarf_planet_97479_1920x1080.jpg",
];

function App() {
  return <Slider images={images} />;
}

export default App;
