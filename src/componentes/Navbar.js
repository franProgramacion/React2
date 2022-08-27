import './Navbar.css'
const Navbar =() => {
    return (
        <nav>
            <div class='gridContainerResponsive'className="cabecera">
                <h1 className='titulo'> Eco Natural: Tienda oficial de Natura en Santiago del Estero</h1>
                <img src='imagenes/Logo.png' alt='logo' className="imag" />
                <div class='gridContainerResponsive'className="Navbar">
                <button  className="botones" >Perfumes</button>
                <button  className="botones" >Desodorantes</button>
                <button  className="botones" >Cuidados diarios</button>
                <button  className="botones" >Jabones</button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar