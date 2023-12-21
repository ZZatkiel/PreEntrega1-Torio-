import estilo from './CartWidget.module.css'
import card from './assets/card.svg'

const CartWidget = () =>{
return(
    <div className={estilo.cont}>
        <img className={estilo.card} src={card} alt="card"/>
        <span>0</span>
    </div>
)
}

export default CartWidget