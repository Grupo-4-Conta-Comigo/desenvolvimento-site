import styles from "../../_assets/css/modules/divisao modules/pagamento_cliente.module.css"
import seta from "../../_assets/img/icons/setaDireita.png"
import check from "../../_assets/img/icons/check.png"
import person from "../../_assets/img/icons/person.png"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import api from "../../config/api"

function Lista_pagamento_cliente(props){

    const navigate = useNavigate()

    const [status, setStatus] = useState()

    console.log(props.cliente.idComanda)

    function verificaStatus(){
        api.get("/comandas/" + props.cliente.idComanda)
        .then((response) => {
            setStatus(response.data.status)
        }).catch((err) => {
            if (err.response.status === 404) {
                console.log("Este endpoint não existe")
            } else {
                console.error(err)
            }
        })
    }

    
    useEffect(() => {
        if(props.personaliz === true){
            verificaStatus()
        }else{
            setStatus(props.cliente.status)
        }
    }, []);


    return(
            <div className={styles.pessoa} onClick={
                ()=>{
                    // sessionStorage.setItem('clienteAtual', props.cliente.id);
                    if(status != "finalizado"){
                        navigate("/pagamento", {state: {nome : props.personaliz? props.cliente.nome : props.cliente.nomeDono, valor : props.preco, idComanda : props.personaliz? props.cliente.idComanda : props.cliente.id}})
                    }
                }
            }>
                <div><div className={status == "finalizado" ? styles.iconFechado : styles.icon}> <img src={person} alt="" /></div></div>
                <div className={styles.nome}>{props.personaliz? props.cliente.nome : props.cliente.nomeDono}</div>
                <div className={styles.valor}> {status == "finalizado" ? "Pago" : "Pagar"}</div>
                <img src={status == "finalizado" ? check : seta} alt=""/>
            </div>
    );
}

export default Lista_pagamento_cliente;