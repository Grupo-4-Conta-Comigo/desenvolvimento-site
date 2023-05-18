import styles from "../_assets/css/modules/divisao modules/divisao_pers.module.css"
import food from "../_assets/img/icons/hamburguer.png"
import mais from "../_assets/img/icons/mais.png"
import ListaCardPessoas from "./Listas/Lista_Card_Pessoas"

function Card() {
    return (
        <div className={styles.card}>
            <div className={styles.card_header}>
                <div className={styles.icon}>
                    <img src={food} alt="" />
                </div>
                <div className={styles.nome}>Baião</div>
                <div className={styles.preco}>R$25,00</div>
            </div>
            <div className={styles.card_main}>
                <div className={styles.card_titulo}>
                    <p>Pagantes</p>
                    <div className={styles.btn}>
                        <img src={mais} alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.card_pessoas}>
            <ListaCardPessoas />
            <ListaCardPessoas />
            <ListaCardPessoas />
            <ListaCardPessoas />
            <ListaCardPessoas />
            </div>

        </div>
    );
}

export default Card;