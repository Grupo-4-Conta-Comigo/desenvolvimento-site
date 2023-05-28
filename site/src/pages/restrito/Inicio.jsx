import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/core modules/inicio.module.css"
import ListaPagamentos from "../../components/Listas/Lista_pagamentos";
// import Bot from "../../components/Bot/Bot";
import { useNavigate } from "react-router-dom";
import api from "../../config/api";
import { useState, useEffect} from "react";
import cuidado from "../../_assets/img/icons/warning.png"



function Inicio() {
    const navigate = useNavigate();
    const [qtdPedidos, setQtdPedidos] = useState();
    const [chaveCadastrada, setChaveCadastrada] = useState()
    const [pagamentos, setPagamentos] = useState()

    function irPedidos(){
        sessionStorage.pagina = "pedidos";
        navigate("/pedidos");
    }

    function getPagamantos(){
        api.get("/pagamentos/todos/" + sessionStorage.userId)
        .then((response) => {
            console.log(response)
            setPagamentos(response.data)
        }).catch((err) => {
            if (err.response.status === 404) {
                console.log("Este endpoint não existe")
            } else {
                console.error(err)
            }
        })
    }

    function contarPedidos(){
        api.get("/pedidos/count/" + sessionStorage.userId, {params: {ativos: true}})
        .then((response) => {
            console.log("qtd: "+ response.data)
            setQtdPedidos(response.data)
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
            console.log("qtd: "+ response.data)
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
        contarPedidos()
        getChaveCadastrada()
        getPagamantos()
      }, []);

    if(sessionStorage.length > 0){
    return (
        <div className="fBody">
            <LateralMenu />
            {/* <div className="botSuporte">
            <Bot  />
            </div> */}
            <div className={styles.main}>

                <div className={styles.container}>
                    <div className={styles.container_head}>
                        <p>Olá, {sessionStorage.nome_user}</p>
                        <div className={styles.passagem}>
                        <p className={styles.desc}>Temos {qtdPedidos} pedidos em andamento</p>
                        <div className={styles.line}></div>
                        </div>
                        <button onClick={irPedidos} className={chaveCadastrada? "" : "btn_d"}>Gerenciar pedidos</button>
                    </div>
                    <div className={chaveCadastrada? styles.container_main : "btn_d"}>
                        <div className={styles.titulo}>Últimos pagamentos recebidos</div>
                        <div className={styles.pagamentos}>
                            {
                                pagamentos ? (
                                    pagamentos.map((pagamento) => {
                                            return (
                                                <ListaPagamentos pagamento={pagamento}/>
                                            )
                                    })
                                ) : <div className={styles.msg}>Não há pedidos em andamento</div>
                            }
                        </div>
                    </div>

                    <div className={styles.mainAtencao}>
                    <div className={chaveCadastrada? "btn_d" : styles.cardAtencao}>
                        <img src={cuidado} alt="" />
                        <div className={styles.titulo}>
                            Cadastre uma chave pix!
                        </div>
                        <div className={styles.text}>
                        Sem ela, as principais funcionalidades do sistema não funcionarão
                        </div>
                        <button onClick={()=>{navigate("/cadastrarPix")}}>Cadastrar</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );}

    else{
        window.location.href = "http://localhost:3000/login";
    }
}

export default Inicio;