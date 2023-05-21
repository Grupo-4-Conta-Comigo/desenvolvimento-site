import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/pagamento_cliente.module.css"
import TotalPessoas from "../../components/Total_pessoas";
import { useState, useEffect } from "react";
import api from "../../config/api";
import { useLocation, useNavigate } from "react-router-dom";
import Lista_pagamento_cliente from "../../components/Listas/Lista_pagamento_cliente";
import Swal from "sweetalert2";



function Pagamento_cliente() {

    const [clientes, setClientes] = useState([])
    const [pedido, setPedido] = useState([])
    const { state } = useLocation();
    const navigate = useNavigate()

    console.log("aaa "+ state)
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

    if (sessionStorage.length > 0) {
        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Pagamento</p>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>


                            </div>
                          
                        </div>
                     
                        <div className={styles.container_main}>


                        {
                                        clientes.map((cliente) => {
                                            return (
                                                <Lista_pagamento_cliente cliente={cliente} key={cliente.id} preco={state.opcao == "igualmente"? state.valor : cliente.preco} />
                                            )
                                        })
                                }

                        </div>
                        <div className={styles.buttons}>
                            <button  className={styles.button_one}>Voltar</button>
                            <button className={styles.button_two} onClick={
                                ()=>{
                                    Swal.fire({
                                        icon: 'error',
                                    title: 'Oops...',
                                    text: 'Ainda temos clientes que não pagaram'
                                        })
                                }
                            }>Concluído</button>
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

export default Pagamento_cliente;