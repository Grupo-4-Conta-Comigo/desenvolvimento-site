import './_assets/css/global.css';
import Index from './pages/Index';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/autenticacao/Login';
import Cadastro from './pages/autenticacao/Cadastro';
import Pedidos from './pages/restrito/Pedidos';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/pedidos" element={<Pedidos/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
