import styles from "../../_assets/css/modules/divisao modules/pagamento_cliente.module.css"
import seta from "../../_assets/img/icons/setaDireita.png"
import person from "../../_assets/img/icons/person.png"
import { useNavigate } from "react-router-dom"
function Lista_pagamento_cliente(props){

    const navigate = useNavigate()

    return(
            <div className={styles.pessoa} onClick={
                ()=>{
                    navigate("/pagamento", {state: {nome : props.cliente.nomeDono, valor : props.preco}})
                }
            }>
                <div className={styles.icon}> <img src={person} alt="" /></div>
                <div className={styles.nome}>{props.cliente.nomeDono}</div>
                <div className={styles.valor}> Pagar</div>
                <img src={seta} alt="" />
            </div>
    );
}

export default Lista_pagamento_cliente;