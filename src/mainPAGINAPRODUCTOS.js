import React, { useState, useEffect } from 'react';
import productosGeneral from './productosGeneral/general.json';
import Navbar from 'react-bootstrap/Navbar';

function MainProductos({ history }) {
    const productos = productosGeneral;

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
    const [precioSeleccionado, setPrecioSeleccionado] = useState('');
    const [marcasSeleccionadas, setMarcasSeleccionadas] = useState([]);
    const [mostrarMarcas, setMostrarMarcas] = useState(false);
    const [marcasDisponibles, setMarcasDisponibles] = useState([]);


    useEffect(() => {
        if (categoriaSeleccionada) {
            const marcas = obtenerMarcasPorCategoria(categoriaSeleccionada);
            setMarcasDisponibles(marcas);
        } else {
            setMarcasDisponibles([]);
        }
    }, [categoriaSeleccionada]);

    const obtenerMarcasPorCategoria = (categoria) => {
        // Simulación de obtener marcas únicas por categoría desde los productos
        const marcas = new Set();
        productos.forEach(producto => {
            if (producto.categoria === categoria) {
                marcas.add(producto.marca);
            }
        });
        return Array.from(marcas);
    };

    const productosFiltrados = productos.filter(producto => {
        // Filtrar por categoría y precio
        let categoriaValida = true;
        if (categoriaSeleccionada) {
            categoriaValida = producto.categoria === categoriaSeleccionada;
        }
    
        let precioValido = true;
        if (precioSeleccionado) {
            const [min, max] = precioSeleccionado.split('-');
            // Convertir min y max a números enteros
            const precioProducto = parseFloat(producto.precio); 
            precioValido = precioProducto >= parseFloat(min) && precioProducto <= parseFloat(max);
        }

        // Filtrar por marcas seleccionadas
        let marcaValida = true;
        if (marcasSeleccionadas.length > 0) {
            marcaValida = marcasSeleccionadas.includes(producto.marca);
        }

        return categoriaValida && precioValido && marcaValida;
    });

    const handleChangeCategoria = (e) => {
        const categoria = e.target.value;
        setCategoriaSeleccionada(categoria);
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
                    <div className="col-md-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Navbar.Brand href="/"><img src="https://i.imgur.com/blI3BKX.png" alt="logohome" className="logohome" /></Navbar.Brand>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">Todos los Productos</li>
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
                        <h4 className="text-right text-center titulo">PRODUCTOS</h4>
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

export default MainProductos;



