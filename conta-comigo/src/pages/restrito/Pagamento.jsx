import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/pagamento.module.css"
import qrcode from "../../_assets/img/qr-code.png"
import loading from "../../_assets/img/icons/carregando.png"


function Pagamento() {
    if (sessionStorage.length > 0) {

        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.container}>
                      
                        <div className={styles.container_head}>
                            <div className={styles.head_titulo}>
                            <p>Aponte para a câmera</p>
                            </div>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>
                            </div>
                       <div className={styles.head_total}>
                       <p>Total: </p>
                            <div className={styles.total}> R$215,90</div>

                            </div>
                        </div>
                        <div className={styles.container_main}>
                            <div className={styles.main_img}>
                            <img src={qrcode}/>
                            </div>
                         
                        </div>
                        <div className={styles.container_end}>
                        <p>Aguardando Pagamento</p>
                        <img src={loading}/>

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

export default Pagamento;