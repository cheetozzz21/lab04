import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import feather from 'feather-icons';


function Header() {
       
    
    return (
        <header classname="header-barra" style={{ backgroundColor: '#4CAF50'}}>
            <div className="container-fluid">
                <div className="row align-items-center">


                    <div className="col-md-1 d-flex justify-content-center">
                        <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Navbar.Brand href="/"><img src="https://i.imgur.com/ECx8W7C.png" alt="Logo" className="logo" /></Navbar.Brand>
                            <Navbar.Brand href="/"><div className='textjyj'>J & J</div></Navbar.Brand>
                        </div>
                    </div>
                    
                    <div className="col-md-1 text-center">
                        <Link to="/productos">
                            <button className=" stylebutton" >
                                <div className="botonbarra">Productos</div>
                                </button>
                        </Link>
                    </div>
                    <div className="col-md-1 text-center">
                        <Link to="/descuentos">
                            <button className="botonbarra stylebutton" >Descuentos</button>
                        </Link>
                    </div>


                    <div className="col-md-6 d-flex justify-content-center search">
                        <div className="search-container">
                            <input 
                                type="text"
                                placeholder="Search"
                                className="search-input"
                            />
                            <span className="search-icon" data-feather="search"></span>
                        </div>
                    </div>
          
                        <div className="col-md-1 justify-content-right botonbarra stylebutton">
                            <Navbar.Brand href="/"><i className="iconitos " data-feather="shopping-cart"></i> Mi carrito</Navbar.Brand>
                        </div>
                        
                        <div className="col-md-1 d-flex justify-content-center botonbarra stylebutton">
                            <Navbar.Brand href="/favoritos"> <i className="iconitos" data-feather="heart"></i> Favoritos</Navbar.Brand>
                        </div>
                        
            
                        <div className="col-md-1 botonbarra stylebutton">
                                <NavDropdown 
                                    className="d-inline-block " 
                                    alignRight 
                                    title={
                                        <div>
                                            <i className="iconitos" data-feather="user"></i>Mi sesión
                                            </div>
                                        
                                    } 
                                    id="navbarScrollingDropdown"
                                
                                >
                                        
                                        <NavDropdown.Item className="negrita-user" href="/iniciar-Sesion">
                                            <i data-feather="user"></i> Iniciar sesión/Registrarse
                                        </NavDropdown.Item>
                                        <div className="divider"></div>
                                        <NavDropdown.Item className="negrita-user" href="#action3">
                                            <i data-feather="shopping-bag"></i> Mis pedidos
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className="negrita-user" href="#action4">
                                            <i data-feather="package"></i> Mis productos
                                        </NavDropdown.Item>
                                                
                                </NavDropdown>                             
                        </div>
              
                    
                </div>
            </div>
        </header>
    );
}

export default Header;