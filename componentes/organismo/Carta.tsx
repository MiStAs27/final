import React from "react";

interface Props {
  imagen: string;
  titulo: string;
  parrafo: string;
}
const Carta = ({ imagen, titulo, parrafo }: Props) => {
  return (
    <div className="carta">
      <div className="carta-adentro">
        <img src={imagen} alt="" className="imagen" />
        <div className="palabras">
          <h2>{titulo}</h2>
          <p>{parrafo}</p>
        </div>
      </div>
      <img src="/icono2.jpg" alt="" className="icono" />
    </div>
  );
};

export default Carta;
