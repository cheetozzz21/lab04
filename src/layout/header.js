import "../stylehead.css"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={{ backgroundColor: '#97CADB', padding: '5px 20px', fontFamily: 'Arial, sans-serif', color: 'white' }}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-1 d-flex justify-content-center">
                        <div style={{ backgroundColor: '#02457A', padding: '5px', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src="https://i.imgur.com/dFku6Qa.png" alt="Logo" className="img-fluid" style={{ borderRadius: '50%' }} />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="¿Qué estás buscando?" 
                            style={{ borderRadius: '15px', padding: '5px 10px', width: '100%' }} 
                        />
                    </div>
                    <div className="col-md-2 text-center">
                        <Link to="/productos">
                            <button className="btn" style={{ backgroundColor: 'transparent', color: 'white', padding: '5px 10px', fontSize: '14px', fontWeight: 'bold' }}>Productos</button>
                        </Link>
                    </div>
                    <div className="col-md-2 text-center">
                        <Link to="/descuentos">
                            <button className="btn" style={{ backgroundColor: 'transparent', color: 'white', padding: '5px 10px', fontSize: '14px', fontWeight: 'bold' }}>Descuentos</button>
                        </Link>
                    </div>
                    <div className="col-md-2 text-center">
                        <Link to="/">
                            <button className="btn" style={{ backgroundColor: 'transparent', color: 'white', padding: '5px 10px', fontSize: '14px', fontWeight: 'bold' }}>Iniciar sesion</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;