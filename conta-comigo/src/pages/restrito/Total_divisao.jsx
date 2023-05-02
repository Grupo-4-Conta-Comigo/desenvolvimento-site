import Lateral_menu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/total_divisao.module.css"
import Total_pessoas from "../../components/Total_pessoas";

function irPedidos() {
    window.location.href = "http://localhost:3000/pedidos";
}

function Total_divisao() {
    if (sessionStorage.length > 0) {

        var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <Lateral_menu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Total:</p>
                        
                            <div className={styles.total}>R$215,90</div>
                          
                        </div>
                     
                        <div className={styles.container_main}>
               
                                <Total_pessoas />
                                <Total_pessoas />
                                <Total_pessoas />
                
                

                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button_one}>Voltar</button>
                            <button className={styles.button_two}>Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    else {
        window.location.href = "http://localhost:3000/login";
    }
}

export default Total_divisao;