
import './App.css';
import Email from './email';
import Menu from './menu';
import MinhasPlantas from './minhasPlantas';
import AssinaturaNewsletter from './newsletter';
import Ofertas from './ofertas';
 

function App() {
  return (
    <div className="App">
     <Menu/>
    <AssinaturaNewsletter/>
    <Email/>
    <MinhasPlantas/>
    <Ofertas />
    

    </div>
  );
}

export default App;
