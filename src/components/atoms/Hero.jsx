import React from "react";
import bground from '../../assets/images/backgroundStars.jpg';
import coverBook from '../../assets/images/coverBook.png';

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${bground})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content flex flex-col md:flex-row md:items-center">
          <div className="max-w-md md:mr-10">
            <h1 className="mb-5 text-3xl font-bold text-gold font-cinzel">Caminos de la aurora</h1>
            <p className="mb-5 text-roboto">
              Descubre un mundo de magia y aventura en "Caminos de la Aurora", la nueva novela fantástica de JSal. Sigue la travesía de Elandra, una joven guardiana de la luz, que debe embarcarse en una misión épica para salvar su mundo de la oscuridad eterna. A lo largo de su viaje, se enfrentará a desafíos inimaginables, forjará alianzas inesperadas y descubrirá secretos que cambiarán su destino para siempre.
            </p>
            <button className="btn btn-warning ">¡Comprar Ahora!</button>
          </div>
          <img className="md:ml-10" src={coverBook} alt="Cover Book" />
        </div>
      </div>
    </>
  );
};

export default Hero;
