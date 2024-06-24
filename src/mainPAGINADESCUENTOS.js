import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productosGeneral from './productosGeneral/general.json';
import Navbar from 'react-bootstrap/Navbar';

function MainDescuentos() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [precioSeleccionado, setPrecioSeleccionado] = useState('');
    const [nombreCategoria, setNombreCategoria] = useState('Todos los Productos');

    const productos = productosGeneral;



    const productosFiltrados = productos.filter(producto => {
        // Filtrar solo los productos que tienen descuento definido
        return producto.descuento !== undefined && producto.descuento !== '';

    }).filter(producto => {
        if (categoriaSeleccionada && precioSeleccionado) {
            return producto.categoria === categoriaSeleccionada && producto.precio === precioSeleccionado;
        } else if (categoriaSeleccionada) {
            return producto.categoria === categoriaSeleccionada;
        } else if (precioSeleccionado) {
            return producto.precio === precioSeleccionado;
        } else {
            return true;
        }
    });

    // Estado para manejar los likes de cada producto
    const [likes, setLikes] = useState({});

    // Función para manejar el clic de "Me gusta"
    const handleLikeClick = (id) => {
        setLikes(prevLikes => ({
            ...prevLikes,
            [id]: !prevLikes[id] // Cambia el estado de like para el producto identificado por su id
        }));
    };


    const handleChangeCategoria = (e) => {
        const categoria = e.target.value;
        setCategoriaSeleccionada(categoria);
        // Obtener el nombre de la categoría seleccionada
        const nombre = e.target.options[e.target.selectedIndex].text;
        setNombreCategoria(nombre);
    }
        

    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Navbar.Brand href="/"><img src="https://i.imgur.com/blI3BKX.png" alt="logohome" className="logohome" /></Navbar.Brand>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{nombreCategoria}</li>
                            </ol>
                        </nav>
                        <div className="card">

                            <div className="form-group">
                                <label htmlFor="categorias" className="titulo">Categorías</label>
                                <select
                                    className="form-control fuentecateg"
                                    id="categorias"
                                    value={categoriaSeleccionada}
                                    onChange={handleChangeCategoria}
                                >
                                    <option value="">Todas las categorías</option>
                                    <option value="abarrotes">Abarrotes</option>
                                    <option value="carnes">Carnes</option>
                                    <option value="snacks">Snacks</option>
                                    <option value="bebidas">Bebidas</option>
                                    <option value="usopersonal">Uso Personal</option>
                                    <option value="limpieza">Limpieza</option>
                                </select>
                            </div>
                            <hr />
                            <div className="titulo">Filtros</div>
                            <div className="titulocate">Marca</div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="gloria"
                                />
                                <label className="form-check-label fuentesubcateg" htmlFor="gloria">Gloria</label>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="mas_vendidos" />
                                <label className="form-check-label fuentesubcateg" htmlFor="laive">Laive</label>
                            </div>

                            <div className="form-group">
                                <label htmlFor="precio" className="titulocate">Precio</label>
                                <select
                                    className="form-control fuentecateg"
                                    id="precios"
                                    value={precioSeleccionado}
                                    onChange={(e) => setPrecioSeleccionado(e.target.value)}>
                                    <option value="">Rango de precio</option>
                                    <option value="0-10">S/.0 - S/.10.00</option>
                                    <option value="10-20">S/.10.00 - S/.20.00</option>
                                    <option value="20-30">S/.20 - S/.30.00</option>
                                    <option value="30-40">S/.30.00 - S/.40.00</option>
                                    <option value="40+">S/.40.00 a más</option>
                                </select>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-9">
                        <h4 className="text-right text-center titulo">DESCUENTOS</h4>

                        <div className="procard row">

                            {productosFiltrados.map((producto, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <div className="procardcat">
                                        <div className="minicard">
                                            <img src={producto.imagen} className="img-fluid" alt={`Imagen de ${producto.nombre}`} />
                                        </div>
                                        <div className="fuentemarca">{producto.marca}</div>
                                        <div className="fuentenombre">{producto.nombre}</div>
                                        <div className="fuentemarca">{producto.cantidad}</div>
                                        <div className='fuentestachado'> {producto.descuento}</div>
                                        <div className='fuenteslug'> {producto.slug}</div>
                                        <div className="aliboticon">
                                            <button className="botonagre stylebotonagre " >AGREGAR</button>
                                            <button className={`like-button ${likes[producto.id] ? 'liked' : ''}`} onClick={() => handleLikeClick(producto.id)}>
                                                <i className="loveicon" data-feather="heart"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainDescuentos;
