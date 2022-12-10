import './App.css';
import Clicker from "./componentes/Clicker"
import ClickEvent from './componentes/ClickEvent';
import ProductList from './componentes/ProductList';
import ClickChange from './componentes/ClickChange';
import CharList from './componentes/rickandmorty/CharList';
import PokeApi from './componentes/PokeApi';
import NavBar from "./componentes/NavBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlassesList from './after1/GlassesList';
import GlassDetail from './after1/GlassDetail';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<GlassesList/>} />
      <Route path='/glass/:id' element={<GlassDetail/>} />
      <Route path='/rick' element={<CharList/>} />
      {/* <Route path='/rick/:charId' element={<CharDetail/>} /> */}
      <Route path='/phones' element={<ProductList/>} />
      <Route path='/event' element={<ClickEvent/>} />
      <Route path='/clickchange' element={<ClickChange/>} />
    </Routes>
  </BrowserRouter>
    // <BrowserRouter>
    //   <NavBar />
    //   <Routes>
    //     <Route path='/' element={<GlassesList />} />
    //     <Route path='/glass/:id' element={<GlassDetail />} />
    //     <Route path='/rick' element={<CharList />} />
    //     <Route path='/phone' element={<ProductList />} />
    //     <Route />
    //     <Route />
    //   </Routes>
    // </BrowserRouter>
  )
}


export default App;
