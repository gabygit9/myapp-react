import React from 'react';

const ProductoDetalle = (props) => {
    const {nombre, descripcion, precio, sku, cantidad } = props.producto;

    return (
        <div className="producto-detalle">
            <h2>{nombre}</h2>
            <p>Descripción: {descripcion}</p>
            <p className='precio'>Precio: {precio}</p>
            <p className='sku'>SKU: {sku}</p>
            <p className='cantidad'>Cantidad: {cantidad}</p>
        </div>
    );
};

export default ProductoDetalle;