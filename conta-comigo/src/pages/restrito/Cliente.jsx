import LateralMenu from "../../components/Lateral_menu"
// import Lista_itens_pessoa from "../../components/Lista_itens_pessoa"
import styles from "../../_assets/css/modules/core modules/add_itens.module.css"
import add from "../../_assets/img/icons/mais.png"
import person from "../../_assets/img/icons/person.png"
// import comidas from "../../_assets/img/icons/comida.png"
// import bebidas from "../../_assets/img/icons/bebida-de-coquetel.png"
import { useEffect, useState } from "react"
import api from "../../config/api"
import editar from "../../_assets/img/icons/btnEditar.png"
import hamburguer from "../../_assets/img/icons/hamburguer.png"
import ItensIndv from "../../components/ItensIndv"
import lupa from "../../_assets/img/icons/lupa.png"
import Lista_search from "../../components/Listas/Lista_search"
import { useNavigate } from "react-router-dom"
import voltar from "../../_assets/img/icons/setaVoltar.png"


// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }

function Add_itens() {

    const [itens, setItens] = useState([])
    const [produtos, setProdutos] = useState([])
    const [cadastroAberto, setCadastroAberto] = useState(false)
    const [produto, setProduto] = useState();

    const navigate = useNavigate()

    const changeProduto = (event) => {
        setProduto(event.target.value);
        getProdutos(event.target.value);
    };

    function getItens() {
        api.get("/itens-comanda/todos/" + sessionStorage.clienteAtual)
            .then((response) => {
                setItens(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    useEffect(() => {
        getItens();
    }, []);


    function getProdutos(produtoProcurando) {
        api.get("/produtos/todos/" + sessionStorage.userId)
            .then((response) => {
                console.log("RESPONSE: ", response)
                console.log("PEDIDOS: ", response.data)
                console.log("PRODUTO PROCURAAAAA "+ produtoProcurando)
                setProdutos(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }


    if (sessionStorage.length > 0) {


        return (
            <div className="fBody">
                <LateralMenu />

                <div className={cadastroAberto ? styles.cadastrarItem : "btn_d"}>
                <div className={styles.popup}>
                <div className="close" onClick={()=>{setCadastroAberto(false)}}>
                <img src={voltar} alt="" />
                <p>voltar</p>
                </div>
                    <div className={styles.header_popup}>
                        <div className={styles.line}></div>
                        <div className={styles.titulo}>Adicione um item a comanda</div>
                    </div>

                    <div className={styles.search}>
                        <input placeholder="Buscar item..." type="text" onChange={changeProduto} />
                        <img src={lupa} alt="" />
                    </div>

                    <div className={styles.resultado}>
                    {
                                produtos ? (
                                    produtos.map((prod) => {
                                        if(prod.nome.toLowerCase().includes(produto)){
                                            if(produto){
                                                return(
                                                    <Lista_search prod={prod} key={prod.id}/>
                                                );
                                            }
                                        }else{
                                            return (
                                                // <Lista_itens item={item} key={item.id} />
                                                ""
                                            )
                                        }
                                    })
                                ) : <div className={styles.msg}>Não há itens cadastrados</div>

                            }
                    </div>

                    {/* <div className={styles.btns}>
                        <button className={styles.cancelar} onClick={()=>{setCadastroAberto(false)}}>Cancelar</button>
                        <button className={styles.adicionar}>Adicionar</button>
                    </div> */}
                </div>
                </div>

                

                <div className={styles.main}>

                <div onClick={()=>{navigate("/pedidos")}} className={"voltar"}>
                        <img src={voltar} alt="" />
                         <p>voltar</p>
                    </div>

                    <div className={styles.container}>

                        <div className={styles.containerHead}>
                            <div className={styles.containerHead_left}>
                                <div className={styles.person}>
                                    <div className={styles.circle}>
                                        <img src={person} alt="" />
                                    </div>
                                </div>
                                <div className={styles.nome}>
                                    {sessionStorage.nomeClienteAtual}
                                </div>
                                <div className={styles.editar}>
                                    <img src={editar} alt="" />
                                </div>
                            </div>
                            <div onClick={()=>{setCadastroAberto(true)}} className={styles.containerHead_right}>
                                <div className={styles.valor}>Adicionar item</div>
                                <button className={styles.add_cliente}>
                                    <img src={add} alt="" />
                                </button>
                            </div>
                        </div>

                        <div className={styles.selecionar}>
                            <img src={hamburguer} alt="" />
                            <p>-- Selecionar categoria --</p>
                            <select name="format" id="format">
                                <option value="tudo">Tudo</option>
                                <option value="comida">Comida</option>
                                <option value="bebida">Bebida</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>


                        <div className={styles.container_table}>
                        <table>
                            <tr className={itens ? "" : "btn_d"}>
                                <th className={styles.nomeItem}>Nome</th>
                                <th className={styles.espaco}>{/* espaço */}</th>
                                <th className={styles.preco}>Preço</th>
                                <th className={styles.espaco}>{/* espaço */}</th>
                                <th className={styles.id}>Observação</th>
                                <th className={styles.deletar}></th>
                            </tr>

                            {
                                itens ? (
                                    itens.map((item) => {
                                        return (
                                            <ItensIndv item={item} key={item.id} />
                                        )
                                    })
                                ) : <div className={styles.msg}>O cliente não possui pedidos</div>

                            }
                            </table>
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

export default Add_itens;