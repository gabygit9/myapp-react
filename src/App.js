import React from 'react';
import './App.css';
import ProductoDetalle from './components/ProductoDetalle';

function App() {
  const ProductoInfo = {
    nombre: 'Producto Nombre',
    descripcion: 'Producto Descripción',
    precio: 19.99,
    sku: 'SKU123',
    cantidad: 100
  };

  return(
    <div className="App">
      <h1>Detalles del Producto</h1>
      <ProductoDetalle producto={ProductoInfo}/>
    </div>
  );
}

export default App;
