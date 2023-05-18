import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/pag_singular.module.css"
import { useState, useEffect } from "react";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import voltar from "../../_assets/img/icons/setaVoltar.png"
// import Lista_pessoas from "../../components/Listas/Lista_pessoas";


// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }

function Pagamento_singular() {
    const [pedido, setPedido] = useState([])
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

    if (sessionStorage.length > 0) {

        // var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                <div onClick={()=>{navigate("/mesas", {state : pedido.mesa})}} className={"voltar"}>
                        <img src={voltar} alt="" />
                         <p>voltar</p>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Pagamento Singular</p>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>


                            </div>

                        </div>
                        <div className={styles.container_right}>
                            <div className={styles.valor}>Valor total: </div>
                            <div className={styles.total}>R${Number(pedido.preco).toFixed(2)}</div>
                        </div>
                        <div className={styles.container_main}>
                            <div className={styles.center}>
                                <p>Quem irá pagar?</p>

                                <div className={styles.select}>
                                    <select name="format" id="format">
                                        <option selected disabled>Larissa</option>
                                        <option value="damasceno">Damasceno</option>
                                        <option value="rafael">Rafael</option>
                                        <option value="lucas">Lucas</option>
                                        <option value="pinheiro">Pinehiro</option>
                                        <option value="valentim">Valentim</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={()=>{navigate("/mesas")}} className={styles.button_one}>Voltar</button>
                            <button className={styles.button_two} onClick={()=>{navigate("/pagamento")}}>Pagar</button>
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

export default Pagamento_singular;