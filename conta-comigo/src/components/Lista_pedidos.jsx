import styles from "../_assets/css/modules/lista_pedidos.module.css"
import seta from "../_assets/img/icons/setaDireita.png"

function Lista_pedidos(){
    return(
        <div className={styles.pedidos}>
            <div className={styles.pedido}>
                <div className={styles.number}>2</div>
                <div className={styles.mesa}>Mesa 2</div>
                <div className={styles.pessoas}>4 pessoas</div>
                <img src={seta} alt="" />
            </div>

            <div className={styles.pedido}>
                <div className={styles.number}>2</div>
                <div className={styles.mesa}>Mesa 2</div>
                <div className={styles.pessoas}>4 pessoas</div>
                <img src={seta} alt="" />
            </div>

            <div className={styles.pedido}>
                <div className={styles.number}>2</div>
                <div className={styles.mesa}>Mesa 2</div>
                <div className={styles.pessoas}>4 pessoas</div>
                <img src={seta} alt="" />
            </div>

            <div className={styles.pedido}>
                <div className={styles.number}>2</div>
                <div className={styles.mesa}>Mesa 2</div>
                <div className={styles.pessoas}>4 pessoas</div>
                <img src={seta} alt="" />
            </div>

            <div className={styles.pedido}>
                <div className={styles.number}>2</div>
                <div className={styles.mesa}>Mesa 2</div>
                <div className={styles.pessoas}>4 pessoas</div>
                <img src={seta} alt="" />
            </div>

            <div className={styles.pedido}>
                <div className={styles.number}>2</div>
                <div className={styles.mesa}>Mesa 2</div>
                <div className={styles.pessoas}>4 pessoas</div>
                <img src={seta} alt="" />
            </div>

            <div className={styles.pedido}>
                <div className={styles.number}>2</div>
                <div className={styles.mesa}>Mesa 2</div>
                <div className={styles.pessoas}>4 pessoas</div>
                <img src={seta} alt="" />
            </div>
        </div>
    );
}

export default Lista_pedidos;