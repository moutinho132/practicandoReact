// src/components/Lista.jsx
import React, { useState } from 'react';

const Lista = () => {
  const [items, setItems] = useState([]);

  const agregarItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div>
      <h2>Lista de Items</h2>
      <button onClick={agregarItem}>Agregar Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
