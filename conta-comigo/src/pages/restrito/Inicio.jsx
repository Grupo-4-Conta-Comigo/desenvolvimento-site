import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/inicio.module.css"
import ListaPagamentos from "../../components/Lista_pagamentos";
import Bot from "../../components/Bot";

function irPedidos(){
    sessionStorage.pagina = "pedidos";
    window.location.href = "http://localhost:3000/pedidos";
}

function Inicio() {
    if(sessionStorage.length > 0){
    return (
        <div className="fBody">
            <LateralMenu />
            <Bot  />
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