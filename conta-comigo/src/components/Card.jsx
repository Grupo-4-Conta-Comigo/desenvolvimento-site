import { useEffect, useState } from "react"
import styles from "../_assets/css/modules/divisao modules/divisao_pers.module.css"
import food from "../_assets/img/icons/hamburguer.png"
import mais from "../_assets/img/icons/mais.png"
import ListaCardPessoas from "./Listas/Lista_Card_Pessoas"
import Swal from "sweetalert2"
import api from "../config/api"
import ListaPessoasOption from "./Listas/Lista_Pessoas_Option"

function Card() {
    const [clientes, setClientes] = useState([])
    const [options, setOptions] = useState({})

    function getClientes() {
        api.get("comandas/todas/" + sessionStorage.pedidoAtual)
            .then((response) => {
                setClientes(response.data)
                console.log(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    useEffect(() => {
        getClientes()
    }, []);

    return (
        <div></div>
    );
}

export default Card;