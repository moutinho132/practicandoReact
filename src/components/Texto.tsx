// src/components/Texto.jsx
import React, { useState } from 'react';

const Texto = () => {
  const [texto, setTexto] = useState("Hola, React!");

  const cambiarTexto = () => {
    setTexto("Mi practica con React para tomar contexto");
  };

  return (
    <div>
      <h2>{texto}</h2>
      <button onClick={cambiarTexto}>Cambiar texto</button>
    </div>
  );
};

export default Texto;
