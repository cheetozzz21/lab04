import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './stylemain.css';
import { useNavigate } from 'react-router-dom';
import feather from 'feather-icons';
import productos from './data/productosPaginaPrincipal.json';

import './style.css';
import './category.css';
import categorias from './categoriasCarrusel/product.json';



setTimeout(() => {
    feather.replace();
}, 500);


const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePreviousClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : categorias.length - 1));
    };

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex < categorias.length - 1 ? prevIndex + 1 : 0));
    };

    return <main>
        <Carousel style={{ height: '500px' }}>
                    {productos.map((it, index) => (
                        <Carousel.Item key={index} onClick={(e) => {
                                e.preventDefault();
                                handleClick(it.slug);
                            }}>
                                <div className="d-flex justify-content-center align-items-center">
                                    <img className='carousel' src={it.picture} />
                                </div>
                                <Carousel.Caption>
                                    <button className="btn btn-primary">Ver detalle</button>
                                </Carousel.Caption>
                        </Carousel.Item>
                    ))}
        </Carousel>
        
        
        <div className="container-flu">
            <div className="row align-items-center">
                <div className="col-md-1 d-flex justify-content-center">
                    <img
                        src="https://i.imgur.com/k7i8SUg.png"
                        alt="Previous"
                        className="navigation-button"
                        onClick={handlePreviousClick}
                    />
                </div>
                <div className="col-md-10 d-flex justify-content-center ">
                    {categorias.slice(currentIndex, currentIndex + 5).map((categoria) => (
                        <div key={categoria.id} className="category-item">
                            <img src={categoria.imageUrl} alt={categoria.altText} className="category-button" />
                            <p className="category-name">{categoria.name}</p>
                        </div>
                    ))}
                </div>
                <div className="col-md-1 d-flex justify-content-center">
                    <img
                        src="https://i.imgur.com/4oMgEcQ.png"
                        alt="Next"
                        className="navigation-button"
                        onClick={handleNextClick}
                    />
                </div>
            </div>
        </div>


        
      


        <hr />
        <div class="popular-products-section text-center">
            <h2 class="text-center" ><i data-feather="clipboard"></i> PRODUCTOS MÁS VENDIDOS</h2>
            <div>
                <div class="product-card">
                    <img src="https://www.prisa.cl/media/cache/attachment/filter/product_gallery_main/b6b1adc76b36bd6a7f81344215e93277/76961/Prisa-6321140456538918788443.png" alt="Producto 1" class="product-image">
                    </img>
                    <div class="product-name">CLORO</div>
                </div>
                <div class="product-card">
                    <img src="https://wongfood.vtexassets.com/arquivos/ids/230542/Sapolio-Lejia-Original-5000-g-1-144025.jpg?v=636664861447600000" alt="Producto 2" class="product-image">
                    </img>
                    <div class="product-name">LEJIA</div>
                </div>
                <div class="product-card">
                    <img src="https://media.justo.mx/products/7500435140010.jpg" alt="Producto 3" class="product-image">
                    </img>
                    <div class="product-name">DETERGENTE</div>
                </div>
                <div class="product-card">
                    <img src="https://i0.wp.com/lepotmarket.com/wp-content/uploads/2021/03/LP-Gloria-Leche-Reconstituida.png?fit=700%2C700&ssl=1" alt="Producto 4" class="product-image">
                    </img>
                    <div class="product-name">LECHE</div>
                </div>
                <div class="product-card">
                    <img src="https://media.freshmart.pe/products/62237.png" alt="Producto 5" class="product-image">
                    </img>
                    <div class="product-name">SIBARITA</div>
                </div>
            </div>
        </div>

        <div class="about-us-section text-center">
            <h2>¿QUIÉNES SOMOS? </h2 ><i data-feather="users"></i>
            <div>
                <div class="about-card">
                    <h3 class="about-title">Historia</h3>
                    <p class="about-content">...</p>
                </div>
                <div class="about-card">
                    <h3 class="about-title">Misión</h3>
                    <p class="about-content">...</p>
                </div>
                <div class="about-card">
                    <h3 class="about-title">Visión</h3>
                    <p class="about-content">...</p>
                </div>
            </div>
        </div>
    </main >;

}

export default Main;