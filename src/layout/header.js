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
                            <button className="botonbarra stylebutton " >Productos</button>
                        </Link>
                    </div>
                    <div className="col-md-1 text-center">
                        <Link to="/descuentos">
                            <button className="botonbarra stylebutton" >Descuentos</button>
                        </Link>
                    </div>


                    <div className="col-md-6 d-flex justify-content-center">
                        <input 
                            type="text" 
                            className="search " 
                            placeholder="Search" 
                            style={{ borderRadius: '15px', padding: '5px 10px', width: '80%', backgroundColor: '#EDEABF',textAlign: 'left' }} 
                        />
                    </div>


                    <div className="col-md-1 d-flex justify-content-center">
                        <Navbar.Brand href="/favoritos"><i className="iconitos" data-feather="heart"></i></Navbar.Brand>
                    </div>
                    
                    <div className="col-md-1 d-flex justify-content-center">
                        <Navbar.Brand href="/"><i className="iconitos" data-feather="shopping-cart"></i></Navbar.Brand>
                    </div>

                    

                    <div className="col-md-1">
                            <NavDropdown 
                                className="d-inline-block " 
                                alignRight 
                                title={<i className="iconitos" data-feather="user"></i>} 
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