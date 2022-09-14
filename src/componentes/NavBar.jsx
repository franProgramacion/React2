import './NavBar.css';
import CartWidget from '../componentes/CartWidget';
import { Link } from 'react-router-dom';
const NavBar =() => {
    return (
        <nav>
                <div className='gridContainerResponsive NavBar'>
                    <Link className="botones" to={"/"} >Home</Link>
                    <Link className="botones" to={"/categoria/perfumeria"} >Perfumes</Link>
                    <Link  className="botones" to={"/categoria/desodorantes"}>Desodorantes</Link>
                    <Link  className="botones" to={"/categoria/cremas"}>Cuidados diarios</Link>
                    <Link  className="botones" to={"/categoria/jabones"}>Jabones</Link>
                <CartWidget/>
                <input />
                </div>
        </nav>
    )
}
export default NavBar;