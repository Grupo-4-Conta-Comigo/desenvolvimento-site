import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/opcao_divisao.module.css"
import { useState, useEffect } from "react";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import voltar from "../../_assets/img/icons/setaVoltar.png"
import Swal from "sweetalert2";



// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }

function Opcao_divisao() {
    const [pedido, setPedido] = useState([])
    const [opcao, setOpcao] = useState()
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
                            <p>Divisão da Conta</p>
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
                                <p>Como a conta será dividida?</p>

                                <div className={styles.select}>
                                    <div>
                                            <input name="teste" value="igualmente" type="radio" onChange={texto => setOpcao(texto.target.value)} />
                                            <span>Igualmente</span>
                                            <input name="teste" value="consumo" type="radio" onChange={texto => setOpcao(texto.target.value)}/>
                                            <span>Por consumo</span>
                                            <input name="teste" value="personalizada" type="radio" onChange={texto => setOpcao(texto.target.value)}/>
                                            <span>Personalizada</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={()=>{navigate("/mesas")}} className={styles.button_one}>Voltar</button>
                            <button onClick={()=>{               
                                if(opcao == undefined){
                                    Swal.fire({
                                        icon: 'error',
                                    title: 'Oops...',
                                    text: 'Selecione uma opção'
                                        })
                                }
                                else if(opcao == "personalizada"){
                                    navigate("/divisaoPersonalizada")
                                }
                                else{
                                    navigate("/totalDivisao", {state : opcao})
                                }
                            }
                        } className={styles.button_two}>Próximo</button>
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

export default Opcao_divisao;