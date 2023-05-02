import Lateral_menu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/inicio.module.css"
import Lista_pagamentos from "../../components/Lista_pagamentos";
import inicioAtv from "../../_assets/img/icons/inicioAtv.png";
import Bot from "../../components/Bot";

function irPedidos(){
    sessionStorage.pagina = "pedidos";
    window.location.href = "http://localhost:3000/pedidos";
}

function Inicio() {
    if(sessionStorage.length > 0){

        var infoAtv = 'infoAtv';
    return (
        <div className="fBody">
            <Lateral_menu />
            <Bot  />
            <div className={styles.main}>

                <div className={styles.container}>
                    <div className={styles.container_head}>
                        <p>Olá, {sessionStorage.nome_user}</p>
                        <div className={styles.passagem}>
                        <p className={styles.desc}>Temos {sessionStorage.qtdPedidos? sessionStorage.qtdPedidos : 0} {sessionStorage.qtdPedidos > 1 ? 'pedidos' : 'pedido'} em andamento</p>
                        <div className={styles.line}></div>
                        </div>
                        <button onClick={irPedidos}>Gerenciar pedidos</button>
                    </div>
                    <div className={styles.container_main}>
                        <div className={styles.titulo}>Últimos pagamentos recebidos</div>
                        <div className={styles.pagamentos}>
                        <Lista_pagamentos/>
                        <Lista_pagamentos/>
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