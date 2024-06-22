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
      
          <div className="max-w-md md:mr-10">
            <h1 className="mb-5 text-3xl font-bold text-gold font-cinzel">
              Caminos de la aurora
            </h1>
            <p className="mb-5 text-roboto">
              Descubre un mundo de magia y aventura en{" "}
              <strong className="font-cinzel text-gold">
                "Caminos de la aurora"
              </strong>
              , la nueva novela fantástica de{" "}
              <strong className="font-cinzel text-gold">JSal</strong> Sigue la
              travesía de{" "}
              <strong className="font-cinzel text-gold">Elandra</strong>, una
              joven guardiana de la luz, que debe embarcarse en una misión épica
              para salvar su mundo de la oscuridad eterna. A lo largo de su
              viaje, se enfrentará a desafíos inimaginables, forjará alianzas
              inesperadas y descubrirá secretos que cambiarán su destino para
              siempre.
            </p>
            <button
              className="btn btn-warning font-cinzel font-bold text-xl"
              onClick={handleScrollToComprar}
            >
              ¡Comprar Ahora!
            </button>
          </div>
          <img className="md:ml-10" src={coverBook} alt="Cover Book" />
       
    </section>
  );
};

export default Hero;
