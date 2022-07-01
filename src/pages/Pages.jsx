import Home from "./Home";
import { Route, Routes, useLocation } from "react-router-dom";
import ViewCatagory from "./ViewCatagory";

function Pages() {
  const location =useLocation()
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home/>} />
      <Route path="/catagory/:type" element={<ViewCatagory/>} />
    </Routes>
  );
}

export default Pages;
