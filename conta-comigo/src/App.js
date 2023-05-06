import './_assets/css/global.css';
import Index from './pages/Index';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/autenticacao/Login';
import Cadastro from './pages/autenticacao/Cadastro';
import Pedidos from './pages/restrito/Pedidos';
import Inicio from './pages/restrito/Inicio';
import Mesas from './pages/restrito/Mesas';
import Cardapio from './pages/restrito/Cardapio';
import Perfil from "./pages/restrito/Perfil";
import AddClientes from "./pages/restrito/Add_clientes";
import AddItens from "./pages/restrito/Add_itens"
import Divisao_personalizada from './pages/restrito/Divisao_personalizada';
import Opcao_divisao from './pages/restrito/Opcao_divisao';
import Pagamento_singular from './pages/restrito/Pagamento_singular';
import Total_divisao from './pages/restrito/Total_divisao';



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
        <Route path='/cardapio' element={<Cardapio/>}/>
        <Route path='/perfil' element={<Perfil/>}/>
        <Route path='/adicionarClientes/:idMesa' element={<AddClientes />}/>
        <Route path='/adicionarItens' element={<AddItens />}/>
        <Route path='/divisaoPersonalizada' element={<Divisao_personalizada />}/>
        <Route path='/opcaoDivisao' element={<Opcao_divisao />}/>
        <Route path='/pagamentoSingular' element={<Pagamento_singular />}/>
        <Route path='/totalDivisao' element={<Total_divisao />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
