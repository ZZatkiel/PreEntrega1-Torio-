import './App.css'
import Navbar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'


function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer texto={'Bienvenidos a todos'}/>
    </>
  )
}

export default App