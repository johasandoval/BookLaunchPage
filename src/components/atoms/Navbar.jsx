import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-gold sticky top-0 z-50 shadow-md flex justify-between items-center px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul className="text-gold font-cinzel font-bold menu menu-sm dropdown-content mt-3 p-2 shadow glass rounded w-52">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#sinopsis">Sinopsis</a>
            </li>
            <li>
              <a href="#autor">Autor</a>
            </li>
            <li>
              <a href="#reseñas">Reseñas</a>
            </li>
            <li>
              <a href="#comprar">Comprar</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl font-cinzel">
          Caminos de la Aurora
        </a>
      </div>
    </div>
  );
};

export default Navbar;
