import Menu from "../../components/Lateral_menu"
import Bot from "../../components/Bot/Bot";
import styles from "../../_assets/css/modules/core modules/perfil.module.css"
import editar from "../../_assets/img/icons/btnEditar.png"
import cadeado from "../../_assets/img/icons/cadeado.png"

function Perfil() {
    return (
        <div className="fBody">
            <Menu />
            <Bot />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.up}>
                        <div className={styles.card}>
                            <div className={styles.lineRed}></div>
                            <div className={styles.card_main}>
                                <div className={styles.card_header}>
                                <div className={styles.card_titulo}>Detalhes restaurante</div>
                                <div className={styles.card_editar}></div>
                                </div>
                                <div className={styles.card_dados}>
                                    <p><b>Nome: </b>Fogão e lenha</p>
                                    <p><b>CNPJ: </b>49.261.002/0001-23</p>
                                </div>
                            </div>
                            <div className={styles.btn}>
                            <img src={editar} alt="" />
                            </div>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.lineYellow}></div>
                            <div className={styles.card_main}>
                                <div className={styles.card_header}>
                                <div className={styles.card_titulo}>Credenciais</div>
                                <div className={styles.card_editar}></div>
                                </div>
                                <div className={styles.card_dados}>
                                    <p><b>Email: </b>fogaolenha@gmail.com</p>
                                    <p><b>Senha: </b>********</p>
                                </div>
                            </div>
                            <div className={styles.btn}>
                            <img src={editar} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.mid}>
                    <div className={styles.card}>
                            <div className={styles.lineBlack}></div>
                            <div className={styles.cadeado}>
                                <img src={cadeado} alt="" />
                            </div>
                            <div className={styles.leftSide}>
                                <p>Níveis de acesso</p>
                                <p>Você - Administrador</p>
                            </div>
                            <div className={styles.rightSide}></div>
                        </div>
                    </div>
                    <div className={styles.bot}>
                    <div className={styles.card}>
                            <div className={styles.lineGreen}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;