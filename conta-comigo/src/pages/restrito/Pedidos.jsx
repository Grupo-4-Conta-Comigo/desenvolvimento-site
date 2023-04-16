import Menu from "../../components/Lateral_menu"
import lupa from "../../_assets/img/icons/lupa.png"
import add from "../../_assets/img/icons/mais.png"
import Pedidos from "../../components/Lista_pedidos"
import styles from "../../_assets/css/modules/pedidos.module.css"
import { useState } from "react"
import api from "../../config/api"

function Inicio(){
    const [pedidos, setPedidos] = useState([])


    function getPedidos() {
        api.get("/pedidos")
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

    getPedidos();

    if(sessionStorage.length > 0){
        return(
            <div>
                <Menu/>
    
                <div className={styles.main}>
                    {/* <button onClick={getPedidos}>teste</button> */}
                    <div className={styles.principal}>
                        <div className={styles.titulo}>
                            Temos <div className={styles.qtd}>4 pedidos</div> em andamento
                        </div>
                        <div className={styles.pesquisa}>
                            <div className={styles.busca}>
                                <input type="text" placeholder="Buscar pedido..."/>
                                <img src={lupa} alt="" />
                            </div>
                            <button>
                                <img src={add} alt="" />
                            </button>
                        </div>
                        <div className={styles.pedidos}>
                        {
                        pedidos.map((pedido) => {
                            return (
                                <Pedidos pedido={pedido} key={pedido.id} />
                            )
                        })
                    }
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        window.location.href = "http://localhost:3000/login";
    }
}

export default Inicio;