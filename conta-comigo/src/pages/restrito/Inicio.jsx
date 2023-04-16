import Lateral_menu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/inicio.module.css"
import Lista_pagamentos from "../../components/Lista_pagamentos";

function Inicio() {
    return (
        <div>
            <Lateral_menu />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.container_head}>
                        <p>Olá, restaurante</p>
                        <div className={styles.passagem}>
                        <p className={styles.desc}>Temos 4 pedidos em andamento</p>
                        <div className={styles.line}></div>
                        </div>
                        <button>Gerenciar pedidos</button>
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
    );
}

export default Inicio;