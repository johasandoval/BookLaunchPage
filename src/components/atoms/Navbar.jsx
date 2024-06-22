import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Sinopsis", href: "#sinopsis" },
    { name: "Autor", href: "#autor" },
    { name: "Reseñas", href: "#reseñas" },
    { name: "Comprar", href: "#comprar" },
    { name: "Contacto", href: "#contacto" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    const headerOffset = 50;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleScroll = (e, href) => {
    e.preventDefault();
    smoothScroll(href);
    setIsOpen(false);
  };

  return (
    <nav className="bg-gold sticky top-0 z-50 shadow-md flex justify-between items-center px-4">
      <div className="flex justify-between items-center w-full lg:w-auto">
        <button
          onClick={toggleMenu}
          className="btn btn-ghost btn-circle lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-7 w-7 transition-transform transform ${
              isOpen ? "rotate-45" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-12 left-0 w-full bg-white shadow-lg  lg:static lg:bg-transparent lg:shadow-none lg:flex lg:space-x-4 text-primaryBlue font-cinzel font-bold `}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="border-b border-gray-200 lg:border-none">
              <a
                href={item.href}
                className="block px-4 py-2 text-sm lg:inline-block btn-ghost rounded"
                onClick={(e) => handleScroll(e, item.href)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-center">
        <a className="text-sm font-cinzel btn btn-ghost content-center lg:block hidden">
          Caminos de la Aurora
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
