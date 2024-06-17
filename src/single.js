import productos from './data/productosPaginaPrincipal.json'

const Single = () => {

    const currentRoute = window.location.pathname;
    const pro = productos.find(it => currentRoute.includes(it.slug))

    return (<>
        <h1>{pro.name}</h1>
        <hr></hr>
        <img src={pro.picture}></img>
        <p>{pro.description}</p>
    </>);   
}

export default Single;