import './Header.css'
import Logo from '../Assets/Logo.png'

//Cabecera. El logo es recibido a traves de props y no a traves de una url
const Header =() => {
    return (
            <div className='gridContainerResponsive cabecera'>
                <img src={Logo} alt='logo' className="imag" />
                <h1 className='titulo'> Eco Natural: Tienda oficial de Natura en Santiago del Estero</h1>
            </div>
            )
       }      

export default Header