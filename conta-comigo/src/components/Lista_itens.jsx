import styles from "../_assets/css/modules/add_itens.module.css"


function Lista_itens(props){
    return(
        <div className={styles.lista_comida}>

            <div className={styles.listar_itens}>
                <div className={styles.nome}>1- Porção de Batata</div>
                <div className={styles.valor}> R$15,90</div>
            </div>
            <div className={styles.line}></div>
               </div>
    );
}

export default Lista_itens; 