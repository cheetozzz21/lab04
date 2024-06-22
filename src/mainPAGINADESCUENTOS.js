import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MainDescuentos() {
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [precioSeleccionado, setPrecioSeleccionado] = useState('');

    const productos = [
        { nombre: 'LECHE GLORIA', slug: '20.90 ', precio: '20-30', categoria: 'bebidas', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/28594257-512-512/929548.jpg' },
        { nombre: 'AVENA QUAKER', slug: '11.50 ', precio: '10-20', categoria: 'abarrotes', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/27425458-512-512/20251263.jpg' },
        { nombre: 'FRUGOS DEL VALLE', slug: '6.00 ', precio: '0-10', categoria: 'bebidas', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/26624105-1000-1000/963407.jpg' },
        { nombre: 'JACK DANIELS', slug: ' 139.90 ', precio: '40+', categoria: 'bebidas', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/28565879-1000-1000/20389760.jpg' },
        { nombre: 'FILETE', slug: '7.00 ', precio: '0*-10', categoria: 'carnes', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/646372-1000-1000/20110600.jpg' },
        { nombre: 'ACEITE PRIMOR', slug: '11.5 ', precio: '10-20', categoria: 'abarrotes', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/28196096-1000-1000/20235718.jpg' },
        { nombre: 'CHOCOLATE', slug: '8.6', precio: '0-10', categoria: 'snacks', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/553666-1000-1000/99837.jpg' },
        { nombre: 'ATUN', slug: '5.90 ', precio: '0-10', categoria: 'abarrotes', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/18082704-1000-1000/20283923.jpg' },
        { nombre: 'ESCOBA', slug: '35.00 ', precio: '30-40', categoria: 'limpieza', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/22086511-1000-1000/768467.jpg' },
        { nombre: 'RECOGEDOR', slug: '30.90 ', precio: '30-40', categoria: 'limpieza', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/26370272-1000-1000/image-b48f942ef36246b9b9a0567326098ea4.jpg' },
        { nombre: 'SHAMPOO', slug: '16.50', precio: '10-20', categoria: 'usopersonal', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/22657198-1000-1000/20325276.jpg' },
        { nombre: 'HABAS', slug: '7.50 ', precio: '0-10', categoria: 'snacks', imagen: 'https://plazavea.vteximg.com.br/arquivos/ids/8125902-1000-1000/20052880.jpg' },
    ];



    const productosFiltrados = productos.filter(producto => {
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

    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/principal">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page"> Todos los descuentos</li>
                            </ol>
                        </nav>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Filtros</h5>
                                <div className="form-group">
                                    <label htmlFor="categorias">Categorías</label>
                                    <select
                                        className="form-control"
                                        id="categorias"
                                        value={categoriaSeleccionada}
                                        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
                                    >
                                        <option value="">Seleccione una categoría</option>
                                        <option value="abarrotes">Abarrotes</option>
                                        <option value="carnes">Carnes</option>
                                        <option value="snacks">Snacks</option>
                                        <option value="bebidas">Bebidas</option>
                                        <option value="usopersonal">Uso Personal</option>
                                        <option value="limpieza">Limpieza</option>

                                    </select>
                                </div>
                                <hr />
                                <h6>Subcategorías</h6>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="descuento"
                                        checked={true}
                                    />
                                    <label className="form-check-label" htmlFor="descuento">
                                        Descuento
                                    </label>
                                </div>
                                <div className="form-group">

                                    <label htmlFor="precio">Precio</label>


                                    <select
                                        className="form-control"
                                        id="precios"
                                        value={precioSeleccionado}
                                        onChange={(e) => setPrecioSeleccionado(e.target.value)}
                                    >
                                        <option value="">Seleccione un rango de precio</option>
                                        <option value="0-10">0-10 soles</option>
                                        <option value="10-20">10 - 20 soles</option>
                                        <option value="20-30">20-30 soles</option>
                                        <option value="30-40">30 - 40 soles</option>
                                        <option value="40+">40+ soles</option>
                                    </select>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="mas_vendidos" />
                                    <label className="form-check-label" htmlFor="mas_vendidos">
                                        Más Vendidos
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <h4 className="text-right text-center">Descuentos!!</h4>
                        <hr />
                        <div className="row">
                            {productosFiltrados.map((producto, index) => (
                                <div className="col-md-4 mb-4" key={index}>
                                    <img src={producto.imagen} className="img-fluid" alt={`Imagen de ${producto.nombre}`} />
                                    <div className="card-body">
                                        <h4 className="card-title text-center">{producto.nombre}</h4>
                                        <h4 className='text-center'> {producto.slug}</h4>
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
