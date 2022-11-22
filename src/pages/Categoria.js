import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "../components/Menu";

const Categoria = () => {
  const query = new URLSearchParams(useLocation().search);
  const categoria = query.get("categoria");
  return (
    <React.Fragment>
      <Menu />
      <p>Categoria:{categoria}</p>
    </React.Fragment>
  );
};

export default Categoria;
