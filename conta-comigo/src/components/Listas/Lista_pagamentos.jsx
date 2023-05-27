import styles from "../../_assets/css/modules/listas modules/lista_pagamentos.module.css"
import pagamento from "../../_assets/img/icons/celpix.png"

function Lista_pagamentos(){
    return(
        <div className={styles.pagamento}>
            <div className={styles.celular}>
                <img src={pagamento} alt="" />
            </div>
            <div className={styles.dados}>
                <div className={styles.preco}>
                <div className={styles.money}>R$ 8,00</div>
                <div className={styles.desc}>Mesa 2 - Gabriel</div>
                </div>
            </div>
        </div>
    );
}

export default Lista_pagamentos;