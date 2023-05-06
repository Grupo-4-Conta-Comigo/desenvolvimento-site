import LateralMenu from "../../components/Lateral_menu"
import styles from "../../_assets/css/modules/add_cliente.module.css"
import ListaPessoas from "../../components/Lista_pessoas"
import add from "../../_assets/img/icons/mais.png"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import api from "../../config/api";
import Bot from "../../components/Bot"

// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }

function Add_clientes(props) {
    const { idMesa } = useParams();

    const [clientes, setClientes] = useState([])

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


    if (sessionStorage.length > 0) {

        return (
            <div className="fBody">
                <Bot />
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Mesa {idMesa}</p>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>


                            </div>

                        </div>
                        <div className={styles.container_right} onClick={()=>{
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
                                <button className={clientes? "" : "btn_d"} onClick={
                                    () => {
                                        Swal.fire({
                                            icon: 'error',
                                            title: 'Oops...',
                                            text: 'Os Clientes não possuem comanda',
                                            footer: '<a href="">Precisa de ajuda?</a>'
                                        })
                                    }
                                }>Fechar conta</button>
                            </div>

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

export default Add_clientes;