import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/pagamento.module.css"
import person from "../../_assets/img/icons/person.png"
import loading from "../../_assets/img/icons/carregando.png"
import qrCode from "../../_assets/img/qrCode.png"
import { useLocation } from "react-router-dom";


function Pagamento() {
    const { state } = useLocation();

    if (sessionStorage.length > 0) {

        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.pagante}>
                            <div className={styles.profile}>
                                <div className={styles.circle}>
                                    <img src={person} alt="" />
                                </div>
                            </div>
                            <div className={styles.nome}>{state.nome}</div>
                            <div className={styles.valor}>R${Number(state.valor).toFixed(2)}</div>
                        </div>
                        <div className={styles.areaPix}>
                            <div className={styles.titulo}>Aguardando pagamento...</div>
                            <div className={styles.line}>
                                <div className={styles.lineVisible}></div>
                            </div>
                            
                            <div className={styles.QRbox}>
                                <div className={styles.squares}>
                                <div className={styles.squareTopLeft}></div>
                                <div className={styles.squareTopRigth}></div>
                                </div>
                                <div className={styles.squares}>
                                <div className={styles.squareBotLeft}></div>
                                <div className={styles.squareBotRigth}></div>
                                </div>

                                <img src={qrCode} alt="" />
                            </div>

                            <div className={styles.aponte}>
                               Pagamento concluído
                            </div>

                   {/* <span class="loader"></span>  */}

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