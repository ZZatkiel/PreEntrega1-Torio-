import estilo from './ItemListContainer.module.css'

const ItemListContainer = ({texto}) => {
    return(
        <h1 className={estilo.todo}>{texto}</h1>
    )
}

export default ItemListContainer