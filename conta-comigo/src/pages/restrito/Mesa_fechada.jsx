import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/core modules/mesas.module.css"
import ListaPessoas from "../../components/Listas/Lista_pessoas_fechada";
import api from "../../config/api";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import voltar from "../../_assets/img/icons/setaVoltar.png"


// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }


function Mesas() {

    const [clientes, setClientes] = useState([])
    const [pedido, setPedido] = useState([])

    const { state } = useLocation()

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


    if (sessionStorage.length > 0) {

        // var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                <div onClick={()=>{navigate("/pedidos")}} className={"voltar"}>
                        <img src={voltar} alt="" />
                         <p>voltar</p>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Mesa {pedido.mesa}</p>
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
                            <button onClick={()=>{navigate("/pagamentoSingular")}} className={styles.btnSingular}>Apenas uma pessoa irá pagar</button>
                            <button onClick={()=>{navigate("/opcaoDivisao")}}>Dividir conta em conjunto</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    else {
        sessionStorage.clear()
        navigate("/login")
    }
}

export default Mesas;