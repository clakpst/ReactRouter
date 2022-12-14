import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categoria from "../pages/Categoria";
import Home from "../pages/Home";
import Page2 from "../pages/Page2";
const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/categoria" element={<Categoria />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
