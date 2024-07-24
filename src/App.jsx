import Slider from "./Slider";

const images = [
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://assets.weforum.org/article/image/0ZUBmNNVLRCfn3NdU55nQ00UF64m2ObtcDS0grx02fA.jpg",
  "https://onetreeplanted.org/cdn/shop/articles/nature_facts_1600x.jpg?v=1705008496",
  "https://cdn.pixabay.com/photo/2018/02/02/17/29/nature-3125912_960_720.jpg",
  "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752",
];

function App() {
  return <Slider images={images} />;
}

export default App;
