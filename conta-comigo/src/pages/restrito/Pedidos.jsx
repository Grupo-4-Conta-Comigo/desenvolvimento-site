import Menu from "../../components/Lateral_menu"
import lupa from "../../_assets/img/icons/lupa.png"
import add from "../../_assets/img/icons/mais.png"
import Pedidos from "../../components/Lista_pedidos"
import styles from "../../_assets/css/modules/pedidos.module.css"
import { useEffect, useState } from "react"
import api from "../../config/api"
import Swal from "sweetalert2"
import Bot from "../../components/Bot"


function Inicio() {

    const [pedidos, setPedidos] = useState([])

    function getPedidos() {
        api.get("/pedidos/todos/" + sessionStorage.userId)
            .then((response) => {
                console.log("RESPONSE: ", response)
                console.log("PEDIDOS: ", response.data)
                setPedidos(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    useEffect(() => {
        getPedidos()
      }, []);

    sessionStorage.setItem("qtdPedidos",pedidos.length)



    if (sessionStorage.length > 0) {
        return (
            <div className="fBody">
                <Bot />
                <Menu />

                <div className={styles.main}>
                    
                    {/* <button onClick={getPedidos}>teste</button> */}
                    <div className={styles.principal}>
                        <div className={styles.titulo}>
                            Temos <div className={styles.qtd}>{pedidos.length} {pedidos.length > 1 || pedidos.length === 0 ? 'pedidos' : 'pedido'}</div> em andamento
                        </div>
                        <div className={styles.pesquisa}>
                            <div className={styles.busca}>
                                <input type="text" placeholder="Buscar pedido..." />
                                <img src={lupa} alt="" />
                            </div>
                            <button onClick={
                                () => {

                                    Swal.fire({
                                        title: 'Digite o número da mesa',
                                        input: 'number',
                                        inputLabel: '',
                                        inputAttributes: {
                                            min: 1,
                                            max: 100,
                                            step: 1
                                          },
                                        showCancelButton: true,
                                        inputValidator: (value) => {
                                            if (!value) {
                                                return 'You need to write something!'
                                            } else {
                                                api.post("/pedidos/criar/"+ sessionStorage.userId, {
                                                    mesa : value
                                                })
                                                    .then((response) => {
                                                        console.log("RESPONSE: ", response)
                                                        getPedidos();
                                                        
                                                    }).catch((err) => {
                                                        console.log("TINHA QUE ENTRAR AQUI")
                                                        console.log(err.response.data.errors[0].defaultMessage)

                
                                                        
                                                    })
                                            }
                                        }
                                    })


                                }
                            }>
                                <img src={add} alt="" />
                            </button>
                        </div>
                        <div className={styles.pedidos}>
                            {
                                pedidos ? (
                                    pedidos.map((pedido) => {
                                        return (
                                            <Pedidos pedido={pedido} key={pedido.id} />
                                        )
                                    })
                                ) : <div className={styles.msg}>Não há pedidos em andamento</div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        window.location.href = "http://localhost:3000/login";
    }
}

export default Inicio;