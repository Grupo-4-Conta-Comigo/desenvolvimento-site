import LateralMenu from "../../components/Lateral_menu"
import styles from "../../_assets/css/modules/core modules/add_cliente.module.css"
import ListaPessoas from "../../components/Listas/Lista_pessoas"
import add from "../../_assets/img/icons/mais.png"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import api from "../../config/api";
import Bot from "../../components/Bot/Bot"
import voltar from "../../_assets/img/icons/setaVoltar.png"

// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }

function Add_clientes(props) {
    
    const { state } = useLocation();
    const navigate = useNavigate()


    const [clientes, setClientes] = useState([])
    const [pedido, setPedido] = useState()

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

    useEffect(() => {
        getClientes()
    }, []);


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

        return (
            <div className="fBody">
                {/* <div className="botSuporte">
                <Bot />
                </div> */}
                <LateralMenu />
                <div className={styles.main}>
                    <div onClick={()=>{navigate("/pedidos")}} className={"voltar"}>
                        <img src={voltar} alt="" />
                         <p>voltar</p>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Mesa {state}</p>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>


                            </div>

                            <div className={styles.container_right} onClick={() => {
                            Swal.fire({
                                title: 'Digite o apelido do cliente',
                                input: 'text',
                                inputAttributes: {
                                    autocapitalize: 'off'
                                },
                                showCancelButton: true,
                                confirmButtonText: 'Concluir',
                                showLoaderOnConfirm: true,
                                preConfirm: (login) => {
                                    api.post("/comandas/criar/" + sessionStorage.pedidoAtual, {
                                        nomeDono: login
                                    })
                                        .then((response) => {
                                            getClientes()
                                        }).catch((err) => {
                                            console.log(err.response.data.errors[0].defaultMessage)
                                        })
                                },
                                allowOutsideClick: () => !Swal.isLoading()
                            })
                        }}>
                            <div className={styles.valor}>Adicionar cliente</div>
                            <button className={styles.add_cliente}>
                                <img src={add} alt="" />
                            </button>
                        </div>
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

                            <div className={styles.buttons}>
                                <button className={clientes ? "" : "btn_d"} onClick={() => {
                                    pedido.preco > 0 ?
                                        api.put("/pedidos/editar/" + sessionStorage.pedidoAtual, {
                                            status: "finalizado",
                                            mesa: state
                                        })
                                            .then((response) => {
                                                console.log("RESPONSE: ", response)
                                                Swal.fire(
                                                    'Conta fechada!',
                                                    '',
                                                    'success'
                                                ).then((value) => {
                                                    navigate("/mesas")
                                                })
                                            }).catch((err) => {
                                                console.log(err.response.data.errors[0].defaultMessage)
                                            })                                                                   
                                    :
                                Swal.fire({
                                    icon: 'error',
                                title: 'Oops...',
                                text: 'Os Clientes não possuem comanda',
                                footer: '<a href="">Precisa de ajuda?</a>'
                                    })
                                }}>Fechar conta</button>
                        </div>

                    </div>

                </div>
            </div>
            </div >
        );
    }

    else {
        sessionStorage.clear()
        navigate("/login")
    }
}

export default Add_clientes;