import Lateral_menu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/mesas.module.css"
import Lista_pessoas from "../../components/Lista_pessoas";


function irPedidos() {
    window.location.href = "http://localhost:3000/pedidos";
}

function Mesas() {
    if (sessionStorage.length > 0) {

        var infoAtv = 'infoAtv';
        return (
            <div>
                <Lateral_menu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Mesa 3</p>
                            <div className={styles.passagem}>
                            <div className={styles.line}></div>
                          

                            </div>

                        </div>
                        <div className={styles.container_right}>
                            <div className={styles.valor}>Valor total: </div>
                            <div className={styles.total}>R$215,90</div>
                        </div>
                        <div className={styles.container_main}>

                            <div className={styles.pessoas}>
                                <Lista_pessoas />
                                <Lista_pessoas />
                                <Lista_pessoas />
                                <Lista_pessoas />
                            </div>

                        </div>
                        <div className={styles.buttons}>
                            <button>Apenas uma pessoa irá pagar</button>
                            <button>Dividir conta em conjunto</button>
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

export default Mesas;