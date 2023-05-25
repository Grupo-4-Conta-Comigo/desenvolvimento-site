import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/core modules/inicio.module.css"
import ListaPagamentos from "../../components/Listas/Lista_pagamentos";
import Bot from "../../components/Bot/Bot";
import { useNavigate } from "react-router-dom";



function Inicio() {
    const navigate = useNavigate();
    function irPedidos(){
        sessionStorage.pagina = "pedidos";
        // window.location.href = "http://localhost:3000/pedidos";
        navigate("/pedidos");
    }

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
                        <p className={styles.desc}>Temos {sessionStorage.qtdPedidos? sessionStorage.qtdPedidos : 0} pedidos em andamento</p>
                        <div className={styles.line}></div>
                        </div>
                        <button onClick={irPedidos}>Gerenciar pedidos</button>
                    </div>
                    <div className={styles.container_main}>
                        <div className={styles.titulo}>Últimos pagamentos recebidos</div>
                        <div className={styles.pagamentos}>
                        <ListaPagamentos/>
                        <ListaPagamentos/>
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