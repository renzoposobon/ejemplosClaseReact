import './App.css';
import Clicker from "./componentes/Clicker"
import ClickEvent from './componentes/ClickEvent';
import ProductList from './componentes/ProductList';
import ClickChange from './componentes/ClickChange';
import CharList from './componentes/rickandmorty/CharList';
import PokeApi from './componentes/PokeApi';
import NavBar from "./componentes/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  )
}

export default App;
