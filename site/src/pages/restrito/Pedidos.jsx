import Menu from "../../components/Lateral_menu"
import lupa from "../../_assets/img/icons/lupa.png"
import add from "../../_assets/img/icons/mais.png"
import Pedidos from "../../components/Listas/Lista_pedidos"
import styles from "../../_assets/css/modules/core modules/pedidos.module.css"
import { useEffect, useState } from "react"
import api from "../../config/api"
import Swal from "sweetalert2"
// import Bot from "../../components/Bot/Bot"
import { useNavigate } from "react-router-dom"


function Inicio() {

    const navigate = useNavigate()

    const [pedidos, setPedidos] = useState([])

    const [numero, setNumero] = useState("")

    const [qtd, setQtd] = useState("")

    const [chaveCadastrada, setChaveCadastrada] = useState()


    const changeNumero = (event) => {
        setNumero(event.target.value);
    };

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

    function contarPedidos() {
        api.get("/pedidos/count/" + sessionStorage.userId, {params: {ativos: true}})
            .then((response) => {
                console.log("QTD: ", response.data)
                setQtd(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    function getChaveCadastrada(){
        api.get("/detalhes-pagamento/" + sessionStorage.userId)
        .then((response) => {
            setChaveCadastrada(response.data)
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
        getChaveCadastrada()
        contarPedidos()
      }, []);




    if (sessionStorage.length > 0) {
        return (
            <div className="fBody">
                {/* <div className="botSuporte">
                <Bot />
                </div> */}
                <Menu />

                <div className={styles.main}>
                    
                    {/* <button onClick={getPedidos}>teste</button> */}
                    <div className={styles.principal}>
                        <div className={styles.titulo}>
                            Temos <div className={styles.qtd}>{qtd} {pedidos.length > 1 || pedidos.length === 0 ? 'pedidos' : 'pedido'}</div> em andamento
                        </div>
                        <div className={styles.pesquisa}>
                            <div className={styles.busca}>
                                <input type="number" placeholder="Buscar pedido..." onChange={changeNumero}/>
                                <img src={lupa} alt="" />
                            </div>
                            <button onClick={
                                () => {

                                   if(chaveCadastrada){
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
                                                        contarPedidos()
                                                        
                                                    }).catch((err) => {
                                                        console.log("TINHA QUE ENTRAR AQUI")
                                                        console.log(err.response.data.errors[0].defaultMessage)

                
                                                        
                                                    })
                                            }
                                        }
                                    })
                                   }else{
                                    Swal.fire(
                                        'Cadastre uma chave pix!',
                                        '',
                                        'warning'
                                    )
                                   }


                                }
                            }>
                                <img src={add} alt="" />
                            </button>
                        </div>
                        <div className={styles.pedidos}>
                            {
                                pedidos ? (
                                    pedidos.map((pedido) => {
                                        if((pedido.mesa).toString().includes(numero) && (pedido.status === "ativo" || pedido.status === "fechado")){
                                            return (
                                                <Pedidos pedido={pedido} key={pedido.id} />
                                            )
                                        }
                                    })
                                ) : <div className={styles.msg}>Não há pedidos em andamento</div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        navigate("/login")
    }
}

export default Inicio;