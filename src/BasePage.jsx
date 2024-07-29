import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function BasePage() {
  return (
    <>
      <Header />
      <div className="mainContent">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default BasePage;
