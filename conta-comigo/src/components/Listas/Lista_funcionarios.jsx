import styles from "../../_assets/css/modules/listas modules/lista_funcionarios.module.css"
import garcom from "../../_assets/img/icons/garcom.png"
import editar from "../../_assets/img/icons/btnEditar.png"
import apagar from "../../_assets/img/icons/btnApagar.png"
function Lista_funcionarios(){


    return(
            <div className={styles.funcionario}>
                <div className={styles.icon}> <img src={garcom} alt="" /></div>
                <div className={styles.dados}>
                <div className={styles.nome}>Carlos Henique</div>
                <div className={styles.email}>carlos.henrique@email.com</div>
                </div>
                <div className={styles.editar}>
                    <img src={editar}  />
                </div>
                <div className={styles.apagar}>
                <img src={apagar}  />
                </div>
           
            </div>
    );
}

export default Lista_funcionarios;