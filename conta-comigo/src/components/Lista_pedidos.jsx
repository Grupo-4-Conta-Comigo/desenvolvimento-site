import styles from "../_assets/css/modules/lista_pedidos.module.css"
import seta from "../_assets/img/icons/setaDireita.png"


function Lista_pedidos(props){
    function irMesa(){
        sessionStorage.pagina = "pedidos";
        window.location.href = "http://localhost:3000/adicionarClientes/" + props.pedido.mesa;
    }
    return(
            <div className={styles.pedido} onClick={irMesa}>
                <div className={styles.number}>{props.pedido.mesa}</div>
                <div className={styles.mesa}>Mesa {props.pedido.mesa}</div>
                <div className={styles.pessoas}>0 pessoas</div>
                <img src={seta} alt="" />
            </div>
    );
}

export default Lista_pedidos;