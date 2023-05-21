import styles from "../../_assets/css/modules/listas modules/lista_pessoas.module.css"
import seta from "../../_assets/img/icons/setaDireita.png"
import person from "../../_assets/img/icons/person.png"
import { useNavigate } from "react-router-dom";
function Lista_pessoas_fechada(props){

    const navigate = useNavigate()

    // function irPessoa(){
    //     sessionStorage.setItem("clienteAtual",props.cliente.id)
    //     sessionStorage.setItem("nomeClienteAtual",props.cliente.nomeDono)
    //     window.location.href = "http://localhost:3000/adicionarItens";
    // }
    return(
            <div className={styles.pessoa} onClick={
                ()=>{
                    navigate("/comanda", {state : {nome: props.cliente.nomeDono, idCliente: props.cliente.id, preco: props.cliente.preco}})
                }
            }>
                <div className={styles.icon}> <img src={person} alt="" /></div>
                <div className={styles.nome}>{props.cliente.nomeDono}</div>
                <div className={styles.valor}> R${props.cliente.preco.toFixed(2)}</div>
                <img src={seta} alt="" />
            </div>
    );
}

export default Lista_pessoas_fechada;