import React from "react";
import coverBook from "../../assets/images/coverBook.png";

const Hero = () => {
  const handleScrollToComprar = () => {
    const comprarSection = document.getElementById("comprar");
    if (comprarSection) {
      window.scrollTo({
        top: comprarSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="inicio">
      <div className="hero min-h-screen flex justify-center items-center hero-content text-neutral-content flex flex-col md:flex-row md:items-center">
        <div className="max-w-md md:ml-2">
          <h1 className="xs:pt-8 md:pt-2 text-3xl font-bold text-gold font-cinzel">
            Caminos de la aurora
          </h1>
          <p className="xs:my-4 sm:my-12 text-roboto">
            Descubre un mundo de magia y aventura en{" "}
            <strong className="font-cinzel text-gold">
              "Caminos de la aurora"
            </strong>{" "}
            , la nueva novela fantástica de{" "}
            <strong className="font-cinzel text-gold">JSal</strong> Sigue la
            travesía de{" "}
            <strong className="font-cinzel text-gold">Elandra</strong>, una
            joven guardiana de la luz, que debe embarcarse en una misión épica
            para salvar su mundo de la oscuridad eterna. A lo largo de su viaje,
            se enfrentará a desafíos inimaginables, forjará alianzas inesperadas
            y descubrirá secretos que cambiarán su destino para siempre.
          </p>
          <button
            className="mt-4 btn btn-warning font-cinzel font-bold text-xl"
            onClick={handleScrollToComprar}
          >
            ¡Comprar Ahora!
          </button>
        </div>
        <img className="md:w-96 xs:mt-8" src={coverBook} alt="Cover Book" />
      </div>
    </section>
  );
};

export default Hero;
