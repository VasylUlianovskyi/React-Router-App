import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import BasePage from "./BasePage/BasePage";
import HomeEl from "./HomeEl/HomeEl";
import ComponentsEl from "./ComponentsEl/ComponentsEl";
import About from "./About/About";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasePage />}>
          <Route index element={<HomeEl />} />
          <Route path="/components/*" element={<ComponentsEl />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
