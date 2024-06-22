import React from "react";
import Sinopsis from "../atoms/mainAtoms.js/Sinopsis";
import Autor from "../atoms/mainAtoms.js/Autor";
import Resenas from "../atoms/mainAtoms.js/Resenas";
import Comprar from "../atoms/mainAtoms.js/Comprar";
import Contacto from "../atoms/mainAtoms.js/Contacto";

const Main = () => {
  return (
    <>
      <Sinopsis />
      <Autor />
      <Resenas />
      <Comprar />
      <Contacto />
    </>
  );
};

export default Main;
