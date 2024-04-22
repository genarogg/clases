import React, { useState } from "react";

interface indexProps {}

const index: React.FC<indexProps> = () => {
  const [numero, setNumero] = useState(0);
  const cambio = () => {
    setNumero(numero + 1);
  };
  return (
    <>
      <h1>El estado es: {numero}</h1>
      <button
        onClick={() => {
          cambio();
        }}
      >
        Sumar
      </button>
    </>
  );
};

export default index;
