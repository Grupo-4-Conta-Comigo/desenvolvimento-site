import styles from "../../_assets/css/modules/listas modules/lista_pagamentos.module.css"
import pagamento from "../../_assets/img/icons/celpix.png"

function Lista_pagamentos(props){
    return(
        <div className={styles.pagamento}>
            <div className={styles.celular}>
                <img src={pagamento} alt="" />
            </div>
            <div className={styles.dados}>
                <div className={styles.preco}>
                <div className={styles.money}>R$ {props.pagamento.valorPagamento}</div>
                <div className={styles.desc}>Mesa {props.pagamento.numeroMesa} - {props.pagamento.nomePagante}</div>
                </div>
            </div>
        </div>
    );
}

export default Lista_pagamentos;