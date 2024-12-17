
//import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Navegacion from './componentes/Navegacion';
import Home from './componentes/Home';
import Formulario from './componentes/Formulario';
import Usuarios from './componentes/Usuarios';
import FormProductos from './componentes/FormProductos';
import Error from './componentes/Error';
import MostrarProductos from './componentes/MostrarProductos';

function App() {
  return (

    <>

      <Navegacion />

      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/formulario' element={ <Formulario /> }></Route>
        <Route path='/usuarios' element={ <Usuarios /> }></Route>
        <Route path='/formproductos' element={ <FormProductos /> }></Route>
        <Route path='/mostrarproductos' element={ <MostrarProductos /> }></Route>
        <Route path='*' element={ <Error /> }></Route>
      </Routes>
    
    </>


  );
}

export default App;
