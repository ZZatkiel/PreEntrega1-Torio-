import estilazo from './Navbar.module.css'
import Button from '../Button/button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return (
        <header>
            <nav>
                <h1 className={`${estilazo.todo} ${estilazo.fondo}`}>Ecommerce</h1>
                <div className={estilazo.flex}>
                    <div>
                        <Button label={'Inicio'} />
                        <Button label={'Productos'} />
                        <Button label={'Nosotros'} />
                    </div>
                    <CartWidget/>
                </div>
            </nav>
        </header>
    )
}

export default Navbar