import Carousel from 'react-bootstrap/Carousel';
import './stylemain.css';
import { useNavigate } from 'react-router-dom';
const feather = require('feather-icons');
import productos from './data/productosPaginaPrincipal.json'
setTimeout(() => {
    feather.replace();
}, 500);


const Main = () => {
    const navigate = useNavigate();

    const handleClick = (slug) => {
        navigate("/detalle/" + slug);
    }

    return <main>
        <Carousel>
            {productos.map((it, index) => (
                <Carousel.Item key={index} onClick={(e) => {
                    e.preventDefault();
                    handleClick(it.slug);
                }}>
                    <div className="d-flex justify-content-center align-items-center">
                        <img className="w-50 dark-image" src={it.picture} alt={it.name} />
                    </div>
                    <Carousel.Caption>
                        <h3>{it.name}</h3>
                        <p>{it.description}</p>
                        <button className="btn btn-primary">Ver detalle</button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>

        <hr />
        <div class="categories-section text-center"></div>
        <h2 class="text-center">CATEGORÍAS</h2>
        <div >
            <img src="" alt="Categoria 1" class="category-button"></img>
            <img src="" alt="Categoria 2" class="category-button"></img>
            <img src="" alt="Categoria 3" class="category-button"></img>
            <img src="" alt="Categoria 4" class="category-button"></img>
            <img src="" alt="Categoria 5" class="category-button"></img>
            <img src="" alt="Categoria 5" class="category-button"></img>

        </div>

        <hr />
        <div class="popular-products-section text-center">
            <h2 class="text-center">PRODUCTOS MÁS VENDIDOS</h2>
            <div>
                <div class="product-card">
                    <img src="" alt="Producto 1" class="product-image">
                    </img>
                    <div class="product-name">CLORO</div>
                </div>
                <div class="product-card">
                    <img src="" alt="Producto 2" class="product-image">
                    </img>
                    <div class="product-name">LEJIA</div>
                </div>
                <div class="product-card">
                    <img src="" alt="Producto 3" class="product-image">
                    </img>
                    <div class="product-name">DETERGENTE</div>
                </div>
                <div class="product-card">
                    <img src="" alt="Producto 4" class="product-image">
                    </img>
                    <div class="product-name">LECHE</div>
                </div>
                <div class="product-card">
                    <img src="" alt="Producto 5" class="product-image">
                    </img>
                    <div class="product-name">SIBARITA</div>
                </div>
            </div>
        </div>

        <div class="about-us-section text-center">
            <h2>¿QUIÉNES SOMOS?</h2>
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