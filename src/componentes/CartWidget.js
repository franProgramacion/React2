import './CartWidget.css'

// Componente que crea el icono del carrito de compra. Este componente es children, hijo del navbar
const CartWidget = () => {
    return (
        <div>
            <img src= 'imagenes/cart.svg' alt='CartWidget' className='carrito'/> 
        </div>
    )

}
export default CartWidget;