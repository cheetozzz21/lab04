import React, { useState, useEffect } from 'react';
import productosGeneral from './productosGeneral/general.json';

function MainFavoritosProduct() {
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        // Al cargar la página, intentamos recuperar los productos favoritos del localStorage
        const productosFavoritosGuardados = JSON.parse(localStorage.getItem('productosFavoritos')) || [];
        setFavoritos(productosFavoritosGuardados);
    }, []);

    // Filtramos los productos generales para obtener solo los favoritos
    const productosFavoritos = productosGeneral.filter(producto => favoritos.includes(producto.id));

    return (
        <div className="container">
            <h2 className="titulo">Tus Productos Favoritos</h2>
            {productosFavoritos.length === 0 ? (
                <p>No tienes productos favoritos.</p>
            ) : (
                <div className="row">
                    {productosFavoritos.map(producto => (
                        <div className="col-md-4 mb-4" key={producto.id}>
                            <div className="card">
                                <img src={producto.imagen} className="card-img-top" alt={`Imagen de ${producto.nombre}`} />
                                <div className="card-body">
                                    <h5 className="card-title">{producto.nombre}</h5>
                                    <p className="card-text">{producto.descripcion}</p>
                                    <button className="like-button" disabled>
                                        Quitar de favoritos
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MainFavoritosProduct;


