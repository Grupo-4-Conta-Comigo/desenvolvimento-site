import { useState, useEffect } from "react"
import styles from "../../_assets/css/modules/listas modules/lista_pedidos.module.css"
import seta from "../../_assets/img/icons/setaDireita.png"
import api from "../../config/api";
import { useNavigate } from "react-router-dom";


function Lista_pedidos(props){
    const [pedido, setPedido] = useState();

    const navigate = useNavigate()

    function getPedido() {
        api.get("pedidos/" + sessionStorage.pedidoAtual)
            .then((response) => {
                setPedido(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    useEffect(() => {
        getPedido()
    }, []);

    function irMesa(){
        getPedido()
        console.log(props.pedido.mesa + " " + props.pedido.status)
        sessionStorage.pagina = "pedidos";
        sessionStorage.setItem("pedidoAtual",props.pedido.id);

        if(props.pedido.status === "ativo"){
            navigate("/adicionarClientes", {state: props.pedido.mesa})
            
        }else{
            navigate("/mesas", {state: props.pedido.mesa})
        }

    }
    return(
            <div className={styles.pedido} onClick={irMesa}>
                <div className={styles.number}>{props.pedido.mesa}</div>
                <div className={styles.mesa}>Mesa {props.pedido.mesa}</div>
                <div className={styles.pessoas}>{props.pedido.comandas.length} pessoas</div>
                <img src={seta} alt="" />
            </div>
    );
}

export default Lista_pedidos;