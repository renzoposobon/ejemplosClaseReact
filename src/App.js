import './App.css';
import Clicker from "./componentes/Clicker"
import ClickEvent from './componentes/ClickEvent';
import ProductList from './componentes/ProductList';
import ClickChange from './componentes/ClickChange';

function App() {
  return (
    <div className='App'>
      <ProductList></ProductList>
        {/* <ClickEvent></ClickEvent> */}
        {/* <ClickChange></ClickChange> */}
    </div>
  )
}

export default App;
