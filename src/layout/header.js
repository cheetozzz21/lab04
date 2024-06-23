import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


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
                        <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Navbar.Brand href="/"><img src="https://i.imgur.com/tbxdgrD.png" alt="megusta" className="user" style={{ borderRadius: '10%' }} /></Navbar.Brand>
                        </div>
                    </div>
                    
                    <div className="col-md-1 d-flex justify-content-center">
                        <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Navbar.Brand href="/"><img src="https://i.imgur.com/cuHZxRw.png" alt="Logo" className="user" style={{ borderRadius: '10%' }} /></Navbar.Brand>
                        </div>
                    </div>

                    

                    <div className="col-md-1">
                            <NavDropdown 
                                className="d-inline-block " 
                                alignRight 
                                title={<img src="https://i.imgur.com/NjVtc52.png" 
                                        alt="Logo" 
                                        className="user img-fluid" />} 
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