import './Header.css'
import Logo from '../Assets/Logo.png'


const Header =() => {
    return (
            <div class='gridContainerResponsive'className="cabecera">
                <img src={Logo} alt='logo' className="imag" />
                <h1 className='titulo'> Eco Natural: Tienda oficial de Natura en Santiago del Estero</h1>
            </div>
            )
       }      

export default Header