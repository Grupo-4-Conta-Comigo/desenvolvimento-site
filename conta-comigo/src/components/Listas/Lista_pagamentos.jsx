import styles from "../../_assets/css/modules/listas modules/lista_pagamentos.module.css"
import pagamento from "../../_assets/img/pagamento.png"

function Lista_pagamentos(){
    return(
        <div className={styles.pagamento}>
            <div className={styles.titulo}>Pagamento via pix</div>
            <div className={styles.desc_mesa}>Mesa 2</div>
            <img src={pagamento} alt="" />
        </div>
    );
}

export default Lista_pagamentos;