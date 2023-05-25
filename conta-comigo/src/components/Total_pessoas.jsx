import styles from "../_assets/css/modules/divisao modules/total_pessoas.module.css"
import person from "../_assets/img/icons/person.png"
function Lista_pessoas(props){
    console.log(props.opcao)
    if(props.opcao == "igualmente"){
        const valor = props.valor / props.qtd
        return(
            <div className={styles.pessoa}>
                <div className={styles.icon}> <img src={person} alt="" /></div>
                <div className={styles.nome}>{props.cliente.nomeDono}</div>
                <div className={styles.valor}>R${valor.toFixed(2)}</div>
              
            </div>
    );
    }else if(props.opcao == "consumo"){
        return(
            <div className={styles.pessoa}>
                <div className={styles.icon}> <img src={person} alt="" /></div>
                <div className={styles.nome}>{props.cliente.nomeDono}</div>
                <div className={styles.valor}>R${props.cliente.preco.toFixed(2)}</div>
              
            </div>
    );
    }else{
        return(
            <div className={styles.pessoa}>
                <div className={styles.icon}> <img src={person} alt="" /></div>
                <div className={styles.nome}>{props.cliente.nome}</div>
                <div className={styles.valor}>R${props.cliente.valorAPagar.toFixed(2)}</div>
              
            </div>
    );
    }
}

export default Lista_pessoas;