import styles from "../../_assets/css/modules/divisao modules/divisao_pers.module.css"
import btnEditar from "../../_assets/img/icons/btnEditar.png"


function Lista_Card_Pessoas() {
    return (
        <div className={styles.card_pessoa}>
            <div className={styles.nomePessoa}>Juliana</div>
            <div className={styles.precoPessoa}>R$ 15,00</div>
            <div className={styles.editar}>
                <img src={btnEditar} alt="" />
            </div>
        </div>
    );
}

export default Lista_Card_Pessoas;