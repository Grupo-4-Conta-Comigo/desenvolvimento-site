import styles from "../../_assets/css/modules/core modules/comanda.module.css"


function Lista_itens_comanda(){
    return(
            <div className={styles.itens}>
                 <div className={styles.qtd}>1 -</div>
                <div className={styles.item}>Porção de Batata</div>
               

                <div className={styles.valor}> R$ 35,00</div>
              
            </div>
    );
}

export default Lista_itens_comanda;