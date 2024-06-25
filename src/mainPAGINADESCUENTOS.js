import React, { useState, useEffect } from 'react';
import productosGeneral from './productosGeneral/general.json';
import Navbar from 'react-bootstrap/Navbar';

function MainDescuentos() {
    const productos = productosGeneral;

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [precioSeleccionado, setPrecioSeleccionado] = useState('');
    const [marcasSeleccionadas, setMarcasSeleccionadas] = useState([]);
    const [mostrarMarcas, setMostrarMarcas] = useState(false);
    const [marcasDisponibles, setMarcasDisponibles] = useState([]);
    const [nombreCategoria, setNombreCategoria] = useState('');

    useEffect(() => {
        const marcas = obtenerMarcasPorCategoriaYPrecio(categoriaSeleccionada, precioSeleccionado);
        setMarcasDisponibles(marcas);
    }, [categoriaSeleccionada, precioSeleccionado]);

    const obtenerMarcasPorCategoriaYPrecio = (categoria, precio) => {
        const marcas = new Set();
        productos.forEach(producto => {
            if ((!categoria || producto.categoria === categoria) &&
                (!precio || precioValido(producto.precio, precio)) &&
                producto.descuento !== undefined && producto.descuento !== '') {
                marcas.add(producto.marca);
            }
        });
        return Array.from(marcas);
    };

    const precioValido = (precioProducto, rangoPrecio) => {
        const [min, max] = rangoPrecio.split('-');
        const precio = parseFloat(precioProducto);
        return precio >= parseFloat(min) && precio <= parseFloat(max);
    };

    const productosFiltrados = productos.filter(producto => {
        // Filtrar por categoría, precio y productos con descuento
        let categoriaValida = true;
        if (categoriaSeleccionada) {
            categoriaValida = producto.categoria === categoriaSeleccionada;
        }

        let precioValido = true;
        if (precioSeleccionado) {
            const [min, max] = precioSeleccionado.split('-');
            const precioProducto = parseFloat(producto.precio); 
            precioValido = precioProducto >= parseFloat(min) && precioProducto <= parseFloat(max);
        }

        return categoriaValida && precioValido && producto.descuento !== undefined && producto.descuento !== '';
    });

    const handleChangeCategoria = (e) => {
        const categoria = e.target.value;
        setCategoriaSeleccionada(categoria);
    
        // Obtener y establecer el nombre de la categoría seleccionada
        const nombre = e.target.options[e.target.selectedIndex].text;
        setNombreCategoria(nombre);
    };

    const handleMarcaChange = (marca) => {
        if (marcasSeleccionadas.includes(marca)) {
            setMarcasSeleccionadas(marcasSeleccionadas.filter(item => item !== marca));
        } else {
            setMarcasSeleccionadas([...marcasSeleccionadas, marca]);
        }
    };

    const toggleMostrarMarcas = () => {
        setMostrarMarcas(!mostrarMarcas);
    };

    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <div className=" estatico col-md-3 ">
                        <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Navbar.Brand href="/"><img src="https://i.imgur.com/blI3BKX.png" alt="logohome" className="logohome" /></Navbar.Brand>
                                    </li>
                                    
                                    <li className="breadcrumb-item active" aria-current="page">
                                        <Navbar.Brand href="/descuentos">Categorías</Navbar.Brand>
                                    </li>

                                    {categoriaSeleccionada && (
                                        <li className="breadcrumb-item active" aria-current="page">
                                            {nombreCategoria}
                                        </li>
                                    )}
                                </ol>
                        </nav>
                        <div className="card">
                            <div className="form-group">
                                
                                <label htmlFor="categorias" className="titulo">Categorías</label>
                                
                                <select
                                    className="form-control fuentecateg"
                                    id="categorias"
                                    value={categoriaSeleccionada}
                                    onChange={(e) => handleChangeCategoria(e)}
                                    
                                >
                                    <option value="">Todas las categorías</option>
                                    <option value="aceites y grasas">Aceites y grasas</option>
                                    <option value="bebidas">Bebidas</option>
                                    <option value="usopersonal">Cuidado Personal</option>
                                    <option value="carnes">Carnes</option>
                                    <option value="cereales">Cereales</option>
                                    <option value="enlatados y conservas">Enlatados y conservas</option>
                                    <option value="limpieza">Limpieza</option>
                                    <option value="papeleria">Papeleria</option>
                                    <option value="snacks">Snacks</option>
                                                                      
                                </select>
                            </div>
                            <hr />

                            <div className="titulo">Filtros</div>
                            <div className="form-group">
                                <label htmlFor="precios" className="titulocate">Precio</label>
                                <select
                                    className="form-control fuentecateg"
                                    id="precios"
                                    value={precioSeleccionado}
                                    onChange={(e) => setPrecioSeleccionado(e.target.value)}
                                >
                                    <option value="">Rango de precio</option>
                                    <option value="0-10">S/.0 - S/.10.00</option>
                                    <option value="10-20">S/.10.00 - S/.20.00</option>
                                    <option value="20-30">S/.20 - S/.30.00</option>
                                    <option value="30-40">S/.30.00 - S/.40.00</option>
                                    <option value="40+">S/.40.00 a más</option>
                                </select>
                            </div>

                            
                            <div className="titulomarc" onClick={toggleMostrarMarcas}>Marcas
                                <img src="https://i.imgur.com/THqgYev.png" alt="logomarca" className="logomarca" />
                                
                            </div>
                            {mostrarMarcas && (
                                <div className="titulocate">
                                    {marcasDisponibles.map((marca, index) => (
                                        <div className="form-check" key={index}>
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value={marca}
                                                id={marca}
                                                checked={marcasSeleccionadas.includes(marca)}
                                                onChange={() => handleMarcaChange(marca)}
                                            />
                                            <label className="form-check-label fuentesubcateg" htmlFor={marca}>{marca}</label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-md-9">
                        <h4 className="text-right text-center tit-pro">DESCUENTOS</h4>
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
                                        <button className="botonagre stylebotonagre " >AGREGAR</button>
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

