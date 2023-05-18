import styles from "../_assets/css/modules/divisao modules/total_pessoas.module.css"
import person from "../_assets/img/icons/person.png"
function Lista_pessoas(props){
    return(
            <div className={styles.pessoa}>
                <div className={styles.icon}> <img src={person} alt="" /></div>
                <div className={styles.nome}>{props.cliente.nomeDono}</div>
                <div className={styles.valor}>R${props.cliente.preco.toFixed(2)}</div>
              
            </div>
    );
}

export default Lista_pessoas;