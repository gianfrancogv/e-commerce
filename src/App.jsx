import './App.css'
import Navbar from "./components/NavBar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting="Hola Componente" />
      <ItemDetailContainer />
    </>
  )
}

export default App
