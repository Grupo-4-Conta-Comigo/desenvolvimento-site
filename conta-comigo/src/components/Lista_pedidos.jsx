import styles from "../_assets/css/modules/lista_pedidos.module.css"
import seta from "../_assets/img/icons/setaDireita.png"

function Lista_pedidos(props){
    return(
            <div className={styles.pedido}>
                <div className={styles.number}>{props.pedido.numeroMesa}</div>
                <div className={styles.mesa}>Mesa {props.pedido.numeroMesa}</div>
                <div className={styles.pessoas}>{props.pedido.qtdPessoas} pessoas</div>
                <img src={seta} alt="" />
            </div>
    );
}

export default Lista_pedidos;