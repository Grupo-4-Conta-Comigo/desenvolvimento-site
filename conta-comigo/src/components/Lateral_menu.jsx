import styles from "../_assets/css/modules/lateral_menu.module.css"
import logotipo from "../_assets/img/logo-logotipo/logotipo.png"
import logo from "../_assets/img/logo-logotipo/logomarca.png"
import inicio from "../_assets/img/icons/inicio.png"
import inicioAtv from "../_assets/img/icons/inicioAtv.png"
import editar from "../_assets/img/icons/editar.png"
import editarAtv from "../_assets/img/icons/editarAtv.png"
import perfil from "../_assets/img/icons/perfil.png"
import perfilAtv from "../_assets/img/icons/perfilAtv.png"
import interrogacao from "../_assets/img/icons/interrogation.png"
import sair from "../_assets/img/icons/sair.png"

function Lateral_menu() {
    return (
        <div className={styles.bodyF}>
            <div className={styles.menu_lateral}>
                <div className={styles.head}>
                    <img src={logotipo} alt="" />
                    <div className={styles.logomarca}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.menus}>
                    <div className={styles.menu}>
                        <div className={styles.line}>
                            <div className={styles.vertical}>

                            </div>
                        </div>
                        <div className={styles.icon}>
                            <img src={inicio} alt="" />
                        </div>
                        <div className={styles.info}>Início</div>
                    </div>

                    <div className={styles.menu}>
                        <div className={styles.line}>
                            <div className={styles.verticalAtv}>

                            </div>
                        </div>
                        <div className={styles.icon}>
                            <img src={editarAtv} alt="" />
                        </div>
                        <div className={styles.infoAtv}>Pedidos</div>
                    </div>

                    <div className={styles.menu}>
                        <div className={styles.line}>
                            <div className={styles.vertical}>

                            </div>
                        </div>
                        <div className={styles.icon}>
                            <img src={perfil} alt="" />
                        </div>
                        <div className={styles.info}>Perfil</div>
                    </div>


                </div>

                <div className={styles.suporte}>
                    <div className={styles.box}>
                        <div className={styles.sup_head}>
                            <div className={styles.sup_icon}>
                                <img src={interrogacao} alt="" />
                            </div>
                            <div className={styles.titulo}>Precisa de ajuda?</div>
                        </div>
                        <div className={styles.sup_main}>Clique no botão abaixo</div>
                        <div className={styles.btn}>
                            <button>Suporte</button>
                        </div>
                    </div>
                </div>

                <div className={styles.sair}>
                    <img src={sair} alt="" />
                    <div className={styles.sair_txt}>Sair</div>
                </div>

            </div>
        </div>
    );
}

export default Lateral_menu;