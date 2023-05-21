import styles from "../../_assets/css/modules/core modules/comanda.module.css"


function Lista_itens_comanda(props) {
    return (
        <div className={styles.item}>
            <div className={styles.nome}>{props.item.produto.nome}</div>
            <div className={styles.pontos}> .....................................</div>
            <div className={styles.valor}>R${props.item.produto.preco}</div>
        </div>
    );
}

export default Lista_itens_comanda;