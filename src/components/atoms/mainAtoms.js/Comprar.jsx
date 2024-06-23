import React from "react";
import coverBook from "../../../assets/images/coverBook.png";

const Comprar = () => {
  return (
    <section id="comprar">
      <div className="max-w-6xl mx-auto px-4 flex flex-col p-12 md:flex-row items-center">
        <div className="md:w-1/3 md:mr-8 mb-4 md:mb-0">
          <img
            src={coverBook}
            alt="Portada del libro"
            className="w-full rounded-xl shadow-lg pb-8"
          />
        </div>
        <div className="xs:w-5/6 md:w-2/3 md:ml-8">
          <h2 className="font-cinzel text-2xl text-gold font-bold mb-8">
            ¡Comprar AHORA!
          </h2>
          <form className="glass shadow-md rounded-lg p-4 flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Nombre completo"
              className=" font-light font-roboto input-form rounded pl-2 font-sm"
            />
            <input
              type="text"
              placeholder="Dirección"
              className=" font-light font-roboto input-form rounded pl-2 font-sm"
            />
            <input
              type="text"
              placeholder="Teléfono"
              className=" font-light font-roboto input-form rounded pl-2 font-sm"
            />
            <input
              type="email"
              placeholder="Email"
              className=" font-light font-roboto input-form rounded pl-2 font-sm"
            />
            <input
              type="text"
              placeholder="Número de tarjeta"
              className="input-form rounded pl-2 text-sm"
            />
            <input
              type="text"
              placeholder="CVV"
              className=" font-light font-roboto input-form rounded pl-2 font-sm"
            />
            <input
              type="text"
              placeholder="(MM/YY)"
              className="font-light font-roboto input-form rounded pl-2 font-sm"
            />
            <button
              type="submit"
              className="font-cinzel text-gold text-bold btn btn-warning mt-4 md:mt-0"
            >
              Pagar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Comprar;
