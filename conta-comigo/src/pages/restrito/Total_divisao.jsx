import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/total_divisao.module.css"
import TotalPessoas from "../../components/Total_pessoas";
import { useState, useEffect } from "react";
import api from "../../config/api";
import { useLocation, useNavigate } from "react-router-dom";

// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }

function Total_divisao() {

    const [clientes, setClientes] = useState([])
    const [pedido, setPedido] = useState([])
    const { state } = useLocation();
    const navigate = useNavigate()

    function getClientes() {
        api.get("comandas/todas/" + sessionStorage.pedidoAtual)
            .then((response) => {
                setClientes(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

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
        getClientes()
        getPedido()
    }, []);


    function dividirIgualmente(preco){
        const valor = preco / clientes.length;
        console.log(valor)
    }

    if (sessionStorage.length > 0) {

        // var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Total:</p>
                        
                            <div className={styles.total}>R${Number(pedido.preco).toFixed(2)}</div>
                          
                        </div>
                     
                        <div className={styles.container_main}>

                                {
                                        clientes.map((cliente) => {
                                            return (
                                                <TotalPessoas cliente={cliente} key={cliente.id} valor={pedido.preco} opcao={state} qtd={clientes.length} />
                                            )
                                        })
                                }
                

                        </div>
                        <div className={styles.buttons}>
                            <button onClick={()=>{navigate("/opcaoDivisao")}} className={styles.button_one}>Voltar</button>
                            <button className={styles.button_two} onClick={
                                ()=>{navigate("/pagamentoClientes", {state : {valor: pedido.preco / clientes.length, opcao: state}})}
                            }>Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    else {
        window.location.href = "http://localhost:3000/login";
    }
}

export default Total_divisao;