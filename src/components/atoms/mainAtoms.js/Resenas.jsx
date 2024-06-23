import React from "react";

const Resenas = () => {
  return (
    <>
      <section id="reseñas" className="bg-secundaryGray p-12 xs:px-2">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-cinzel text-2xl text-gold font-bold mb-8">
            Reseñas de Lectores
          </h2>
          <div className="flex flex-col gap-6 md:flex-row md:gap-12">
            <div className="flex flex-col items-center">
              <div className="rating rating-md flex mb-2">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <p className="text-roboto text-text">
                "¡Increíble! Este libro me transportó a otro mundo desde la
                primera página. Recomiendo su lectura. Es un viaje fascinante!"
              </p>
              <p className="font-bold font-cinzel text-gold mt-2">
                - Ana Pérez
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rating rating-md flex mb-2">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-roboto text-text">
                "Me cautivó desde el inicio. Los personajes son profundos y la
                trama está llena de giros inesperados."
              </p>
              <p className="font-bold font-cinzel text-gold mt-2">
                - Juan Gómez
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rating rating-md flex mb-2">
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-roboto text-text">
                "Una obra maestra de la fantasía. No puedo esperar para leer más
                del autor."
              </p>
              <p className="font-bold font-cinzel text-gold mt-2">
                - María López
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resenas;
