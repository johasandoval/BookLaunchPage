import React from "react";

const Sinopsis = () => {
  return (
    <>
      <section
        id="sinopsis"
        className="hero min-h-screen flex justify-center items-center hero-content text-neutral-content flex flex-col md:flex-row md:items-center md:border-t-4 md:border-t-gold"
      >
        <h1 className="font-cinzel text-2xl text-gold font-bold pt-8 xs:pt-2 xl:px-24">
          Sinopsis
        </h1>
        <p className="text-roboto text-text pt-4 pb-8 xs:px-2 pt-2 md:pb-2 xl:px-24">
          En el mundo de Luminara, la luz y la oscuridad han coexistido en un
          frágil equilibrio desde tiempos inmemoriales. Pero ahora, una amenaza
          oscura se cierne sobre el horizonte, poniendo en peligro todo lo que
          los habitantes de este mágico reino conocen y aman.
          <strong className="font-cinzel text-gold"> Elandra</strong>, una joven
          y valiente guardiana de la luz, es elegida por los antiguos sabios
          para embarcarse en una misión épica. Con solo una brújula encantada y
          un mapa misterioso, debe viajar a través de tierras inexploradas y
          peligrosas para encontrar los Caminos de la Aurora, una red de
          senderos legendarios que se dice que tienen el poder de restaurar la
          luz en tiempos de oscuridad. A lo largo de su viaje,{" "}
          <strong className="font-cinzel text-gold">Elandra</strong> se
          encontrará con personajes extraordinarios: un guerrero desterrado en
          busca de redención, una hechicera con un pasado secreto y un dragón
          anciano que guarda conocimientos perdidos hace mucho tiempo. Juntos,
          formarán una alianza inesperada, uniendo sus fuerzas y habilidades
          para enfrentarse a desafíos inimaginables. Mientras tanto, en las
          sombras, el misterioso y siniestro Señor de la Noche trama su
          conquista final, desplegando su ejército de criaturas oscuras y
          sembrando el caos en cada rincón de Luminara.{" "}
          <strong className="font-cinzel text-gold">Elandra</strong> deberá
          enfrentarse no solo a enemigos externos, sino también a sus propios
          miedos y dudas, descubriendo en el proceso secretos sobre su propia
          identidad y destino que cambiarán su vida para siempre. "Caminos de la
          Aurora" es una historia de valentía, amistad y el poder de la
          esperanza. Es un viaje a través de un mundo lleno de maravillas y
          peligros, donde la luz y la oscuridad luchan por la supremacía, y
          donde una joven guardiana debe encontrar su verdadero poder para
          salvar todo lo que ama.
        </p>
      </section>
    </>
  );
};

export default Sinopsis;
