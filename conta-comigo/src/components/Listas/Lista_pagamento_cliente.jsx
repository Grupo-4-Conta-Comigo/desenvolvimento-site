import styles from "../../_assets/css/modules/divisao modules/pagamento_cliente.module.css"
import seta from "../../_assets/img/icons/setaDireita.png"
import person from "../../_assets/img/icons/person.png"
import { useNavigate } from "react-router-dom"
function Lista_pagamento_cliente(props){

    const navigate = useNavigate()

    console.log(props.personaliz)

    return(
            <div className={styles.pessoa} onClick={
                ()=>{
                    // sessionStorage.setItem('clienteAtual', props.cliente.id);
                    if(props.cliente.status != "finalizado"){
                        navigate("/pagamento", {state: {nome : props.personaliz? props.cliente.nome : props.cliente.nomeDono, valor : props.preco, idComanda : props.personaliz? props.cliente.idComanda : props.cliente.id}})
                    }
                }
            }>
                <div className={props.cliente.status == "finalizado" ? styles.iconFechado : styles.icon}> <img src={person} alt="" /></div>
                <div className={styles.nome}>{props.personaliz? props.cliente.nome : props.cliente.nomeDono}</div>
                <div className={styles.valor}> {props.cliente.status == "finalizado" ? "Pago" : "Pagar"}</div>
                <img src={props.cliente.status == "finalizado" ? "" : seta} alt=""/>
            </div>
    );
}

export default Lista_pagamento_cliente;