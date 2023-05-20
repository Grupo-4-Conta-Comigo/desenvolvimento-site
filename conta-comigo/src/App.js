import './_assets/css/global.css';
import Index from './pages/Index';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './pages/autenticacao/Login';
import Cadastro from './pages/autenticacao/Cadastro';
import Pedidos from './pages/restrito/Pedidos';
import Inicio from './pages/restrito/Inicio';
import Mesas from './pages/restrito/Mesa_fechada';
import Cardapio from './pages/restrito/Cardapio';
import Perfil from "./pages/restrito/Perfil";
import AddClientes from "./pages/restrito/Mesa";
import AddItens from "./pages/restrito/Cliente"
import Divisao_personalizada from './pages/restrito/Divisao_personalizada';
import Opcao_divisao from './pages/restrito/Opcao_divisao';
import Pagamento_singular from './pages/restrito/Pagamento_singular';
import Total_divisao from './pages/restrito/Total_divisao';
import NotFound from './pages/NotFound';
import Funcionarios from './pages/restrito/Funcionarios';
import Pagamento from './pages/restrito/Pagamento';
import Comanda from './pages/restrito/Comanda';
import Cadastrar_pix from './pages/restrito/Cadastrar_pix';
import Comanda_Finalizada from './pages/restrito/Comanda_finalizada';
import PagamentoCliente from './pages/restrito/Pagamento_cliente';



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
        <Route path='/adicionarClientes' element={<AddClientes />}/>
        <Route path='/adicionarItens' element={<AddItens />}/>
        <Route path='/divisaoPersonalizada' element={<Divisao_personalizada />}/>
        <Route path='/opcaoDivisao' element={<Opcao_divisao />}/>
        <Route path='/pagamentoSingular' element={<Pagamento_singular />}/>
        <Route path='/totalDivisao' element={<Total_divisao />}/>
        <Route path='/funcionarios' element={<Funcionarios />}/>
        <Route path='/pagamento' element={<Pagamento />}/>
        <Route path='/comanda' element={<Comanda />}/>
        <Route path='/cadastrarPix' element={<Cadastrar_pix />}/>
        <Route path='/comandaFinalizada' element={<Comanda_Finalizada/>}/>
        <Route path='/pagamentoCliente' element={<PagamentoCliente/>}/>
        


        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
