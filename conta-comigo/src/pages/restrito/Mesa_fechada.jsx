import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/core modules/mesas.module.css"
import ListaPessoas from "../../components/Listas/Lista_pessoas_fechada";
import api from "../../config/api";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";


// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }

function Mesas() {

    const [clientes, setClientes] = useState([])
    const [pedido, setPedido] = useState([])

    const { state } = useLocation()



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

        // var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Mesa {state}</p>
                            <div className={styles.passagem}>
                            <div className={styles.line}></div>
                          

                            </div>

                        </div>
                        <div className={styles.container_right}>
                            <div className={styles.valor}>Valor total: </div>
                            <div className={styles.total}>R${Number(pedido.preco).toFixed(2)}</div>
                        </div>
                        <div className={styles.container_main}>

                            <div className={styles.pessoas}>
                            {
                                    clientes ? (
                                        clientes.map((cliente) => {
                                            return (
                                                <ListaPessoas cliente={cliente} key={cliente.id} />
                                            )
                                        })
                                    ) : <div className={styles.msg}>Não há clientes inseridos na mesa</div>
                                }
                            </div>

                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.btnSingular}>Apenas uma pessoa irá pagar</button>
                            <button>Dividir conta em conjunto</button>
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

export default Mesas;