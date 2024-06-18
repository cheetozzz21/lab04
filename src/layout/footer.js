import "../style.css"
const Footer = () => {
    const cardStyle = {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        margin: '25px',
        textAlign: 'left',
        width: '200px'
    };

    return (
        <footer style={{ backgroundColor: '#f8f9fa', padding: '40px 20px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '30px' }}>
                <button style={{ background: 'none', border: 'none', color: '#007bff', fontWeight: 'bold', cursor: 'pointer' }}>Inicio</button>
                <button style={{ background: 'none', border: 'none', color: '#007bff', fontWeight: 'bold', cursor: 'pointer' }}>Buscar Tienda</button>
                <button style={{ background: 'none', border: 'none', color: '#007bff', fontWeight: 'bold', cursor: 'pointer' }}>Regístrate</button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}>
                <div style={cardStyle}>
                    <h3 style={{ color: '#343a40' }}>ABARROTES</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '5px' }}>Arroz</li>
                        <li style={{ marginBottom: '5px' }}>Papa</li>
                        <li style={{ marginBottom: '5px' }}>Yuca</li>
                    </ul>
                </div>
                <div style={cardStyle}>
                    <h3 style={{ color: '#343a40' }}>CARNES</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '5px' }}>Pollo</li>
                        <li style={{ marginBottom: '5px' }}>Pescado</li>
                        <li style={{ marginBottom: '5px' }}>Chancho</li>
                    </ul>
                </div>
                <div style={cardStyle}>
                    <h3 style={{ color: '#343a40' }}>USO PERSONAL</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '5px' }}>Toalla</li>
                        <li style={{ marginBottom: '5px' }}>Jabón</li>
                        <li style={{ marginBottom: '5px' }}>Shampoo</li>
                    </ul>
                </div>
                <div style={cardStyle}>
                    <h3 style={{ color: '#343a40' }}>BEBIDAS</h3>
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li style={{ marginBottom: '5px' }}>Agua</li>
                        <li style={{ marginBottom: '5px' }}>Jugo</li>
                        <li style={{ marginBottom: '5px' }}>Alcohólicas</li>
                    </ul>
                </div>
            </div>
            <div>
                <button style={{ background: 'none', border: 'none', margin: '0 10px', cursor: 'pointer' }}>
                    <img src="https://w7.pngwing.com/pngs/561/460/png-transparent-fb-facebook-facebook-logo-social-media-icon.png" alt="Facebook" style={{ width: '24px', height: '24px' }} />
                </button>
                <button style={{ background: 'none', border: 'none', margin: '0 10px', cursor: 'pointer' }}>
                    <img src="https://c0.klipartz.com/pngpicture/477/609/gratis-png-logo-iconos-de-computadora-logo-de-instagram-logo-de-instagram-thumbnail.png" alt="Social Media 2" style={{ width: '24px', height: '24px' }} />
                </button>
                <button style={{ background: 'none', border: 'none', margin: '0 10px', cursor: 'pointer' }}>
                    <img src="https://cdn.icon-icons.com/icons2/2972/PNG/512/whatsapp_logo_icon_186881.png" alt="Social Media 3" style={{ width: '24px', height: '24px' }} />
                </button>
            </div>
        </footer>
    );
}

export default Footer;

