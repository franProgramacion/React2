import './NavBar.css'
import CartWidget from '../componentes/CartWidget'
const NavBar =() => {
    return (
        <nav>
                <div class='gridContainerResponsive'className="Navbar">
                    <button  className="botones" >Perfumes</button>
                    <button  className="botones" >Desodorantes</button>
                    <button  className="botones" >Cuidados diarios</button>
                    <button  className="botones" >Jabones</button>
                <CartWidget/>
                <input />
                </div>
        </nav>
    )
}
export default NavBar;