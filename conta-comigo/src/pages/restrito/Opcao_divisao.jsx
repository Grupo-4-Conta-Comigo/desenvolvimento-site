import Lateral_menu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/opcao_divisao.module.css"



function irPedidos() {
    window.location.href = "http://localhost:3000/pedidos";
}

function Opcao_divisao() {
    if (sessionStorage.length > 0) {

        var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <Lateral_menu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Divisão da Conta</p>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>
                            </div>
                        </div>
                        <div className={styles.container_right}>
                            <div className={styles.valor}>Valor total: </div>
                            <div className={styles.total}>R$215,90</div>
                        </div>
                        <div className={styles.container_main}>
                            <div className={styles.center}>
                                <p>Como a conta será dividida?</p>

                                <div className={styles.select}>
                                    <div>
                                        <label for="f-option" className="l-radio">
                                            <input type="radio" checked="checked"/>
                                            <span>Igualmente</span>
                                        </label>
                                        <label for="s-option" className="l-radio">
                                            <input type="radio"/>
                                            <span>Por consumo</span>
                                        </label>
                                        <label for="t-option" className="l-radio">
                                            <input type="radio"  />
                                            <span>Personalizada</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button_one}>Voltar</button>
                            <button className={styles.button_two}>Próximo</button>
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

export default Opcao_divisao;