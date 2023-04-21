import './_assets/css/global.css';
import Index from './pages/Index';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/autenticacao/Login';
import Cadastro from './pages/autenticacao/Cadastro';
import Pedidos from './pages/restrito/Pedidos';
import Inicio from './pages/restrito/Inicio';
import Mesas from './pages/restrito/Mesas';
import Add_clientes from './pages/restrito/Add_clientes';
import Add_itens from './pages/restrito/Add_itens';
import Pagamento_singular from './pages/restrito/Pagamento_singular';







function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
        <Route path="/pedidos" element={<Pedidos/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/mesas' element={<Mesas/>}/>
        <Route path='/add_clientes' element={<Add_clientes/>}/>
        <Route path='/add_itens' element={<Add_itens/>}/>
        <Route path='/pagamento_singular' element={<Pagamento_singular/>}/>




      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
