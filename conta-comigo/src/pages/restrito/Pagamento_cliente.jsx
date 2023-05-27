import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/pagamento_cliente.module.css"
import TotalPessoas from "../../components/Total_pessoas";
import { useState, useEffect } from "react";
import api from "../../config/api";
import { useLocation, useNavigate } from "react-router-dom";
import Lista_pagamento_cliente from "../../components/Listas/Lista_pagamento_cliente";
import Swal from "sweetalert2";
import voltar from "../../_assets/img/icons/setaVoltar.png";




function Pagamento_cliente() {

    const [clientes, setClientes] = useState([])
    const [pedido, setPedido] = useState([])
    const { state } = useLocation();
    const navigate = useNavigate()
    const [pagamentoConcluido, setPagamentoConcluido] = useState(true)


    function getClientes() {
        if (state.personaliz) {
            setClientes(state.resposta);
        } else {
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
                <div className={"voltar"} onClick={()=>{window.history.back()}}>
            <img src={voltar} alt="" />
            <p>voltar</p>
          </div>
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
                                    // if(cliente.status === "ativo"){
                                    //     setPagamentoConcluido(false)
                                    // }
                                    return (
                                        <Lista_pagamento_cliente cliente={cliente} key={cliente.id} preco={state.opcao == "igualmente" ? state.valor : state.personaliz ? cliente.valorAPagar : cliente.preco} personaliz={state.personaliz} idComanda={cliente.idComanda}/>
                                    )
                                })
                            }

                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button_one} onClick={()=>{window.history.back()}}>Voltar</button>
                            <button className={styles.button_two} onClick={
                                () => {
                                    pagamentoConcluido ? 

                                    api.put("/pedidos/editar/"+ sessionStorage.pedidoAtual, {
                                        status : "finalizado", //AQUI TEM QUE MUDAR
                                        mesa : state.mesa
                                    })
                                        .then((response) => {
                                            console.log("RESPONSE: ", response)
                                            Swal.fire(
                                                'Mesa finalizada!',
                                                '',
                                                'success'
                                            ).then(()=>{
                                                navigate("/pedidos")
                                            })
                                            
                                            // getPedidos();
                                            
                                        }).catch((err) => {
                                            console.log(err.response.data.errors[0].defaultMessage)

    
                                        })
                                    :                                    
                                    
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