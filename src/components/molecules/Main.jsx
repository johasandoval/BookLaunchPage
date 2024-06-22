import React from "react";
import Sinopsis from "../atoms/mainAtoms.js/Sinopsis";
import Autor from "../atoms/mainAtoms.js/Autor";
import Resenas from "../atoms/mainAtoms.js/Resenas";
import Comprar from "../atoms/mainAtoms.js/Comprar";
import Contacto from "../atoms/mainAtoms.js/Contacto";

const Main = () => {
  return (
    <>
      <div className="bg-bg-pattern bg-contain bg-center hero-content flex flex-col">
        <Sinopsis />
        <Autor />
        <Resenas />
      </div>
      <Comprar />
      <Contacto />
    </>
  );
};

export default Main;
