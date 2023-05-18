import styles from "../_assets/css/modules/lateral_menu.module.css"
import logotipo from "../_assets/img/logo-logotipo/logotipo.png"
import inicio from "../_assets/img/icons/inicio.png"
import inicioAtv from "../_assets/img/icons/inicioAtv.png"
import editar from "../_assets/img/icons/editar.png"
import editarAtv from "../_assets/img/icons/editarAtv.png"
import perfil from "../_assets/img/icons/perfil.png"
import perfilAtv from "../_assets/img/icons/perfilAtv.png"
import interrogacao from "../_assets/img/icons/interrogation.png"
import sair from "../_assets/img/icons/sair.png"
import cardapio from "../_assets/img/icons/cardapio.png"
import cardapioAtv from "../_assets/img/icons/cardapioAtv.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import close from "../_assets/img/icons/cancel.png"

function Lateral_menu() {

    const navigate = useNavigate();
    const [menuAberto, setMenuAberto] = useState(false)

    function logoff() {
        sessionStorage.clear();
        navigate("/login")
    }

    function irInicio(){
        sessionStorage.pagina = 'inicio';
        navigate("/inicio")
    }

    function irPedido(){
        sessionStorage.pagina = 'pedidos';
        navigate("/pedidos")
    }

    function irCardapio(){
        sessionStorage.pagina = 'cardapio';
        navigate("/cardapio")
    }

    function irPerfil(){
        sessionStorage.pagina = 'perfil';
        navigate("/perfil")
    }

    return (
        <div className={styles.bodyF}>
            <div className={menuAberto? styles.listaPaginas : "btn_d"}>
                <p onClick={irInicio}>Início</p>
                <p onClick={irPedido}>Pedidos</p>
                <p onClick={irCardapio}>Cardápio</p>
                <p onClick={irPerfil}>Perfil</p>
            </div>
            <div className={styles.menu_lateral}>
                <div className={styles.head}>
                    <div className={menuAberto? styles.fechar : "btn_d"}>
                    <img className={menuAberto? "" : "btn_d"} onClick={()=>{setMenuAberto(false)}} src={close} alt="" />
                    </div>
                    <div className={menuAberto? "btn_d" : styles.lines} onClick={()=>{setMenuAberto(true)}}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                    <img src={logotipo} alt="" />
                    <div className={styles.sairDois} onClick={logoff}>
                    <img src={sair} alt="" />
                    <div className={styles.sair_txt}>Sair</div>
                </div>
                </div>
                <div className={styles.menus}>
                    <div className={styles.menu} onClick={irInicio}>
                        <div className={styles.line}>
                            <div className={sessionStorage.pagina === "inicio" ? styles.verticalAtv : styles.vertical}>

                            </div>
                        </div>
                        <div className={styles.icon}>
                            <img src={
                                sessionStorage.pagina === "inicio" ? inicioAtv : inicio
                            } alt="" />
                        </div>
                        <div className={sessionStorage.pagina === "inicio" ? styles.infoAtv : styles.info}>Início</div>
                    </div>

                    <div className={styles.menu} onClick={irPedido}>
                        <div className={styles.line}>
                            <div className={sessionStorage.pagina === "pedidos" ? styles.verticalAtv : styles.vertical}>

                            </div>
                        </div>
                        <div className={styles.icon}>
                            <img src={sessionStorage.pagina === "pedidos" ? editarAtv : editar} alt="" />
                        </div>
                        <div className={sessionStorage.pagina === "pedidos" ? styles.infoAtv : styles.info}>Pedidos</div>
                    </div>

                    <div className={sessionStorage.cargo == "admin"? styles.menu : "btn_d"} onClick={irCardapio}>
                        <div className={styles.line}>
                            <div className={sessionStorage.pagina === "cardapio" ? styles.verticalAtv : styles.vertical}>

                            </div>
                        </div>
                        <div className={styles.icon}>
                            <img src={sessionStorage.pagina === "cardapio" ? cardapioAtv : cardapio} alt="" />
                        </div>
                        <div className={sessionStorage.pagina === "cardapio" ? styles.infoAtv : styles.info}>Cardápio</div>
                    </div>

                    <div className={sessionStorage.cargo == "admin"? styles.menu : "btn_d"} onClick={irPerfil}>
                        <div className={styles.line}>
                            <div className={sessionStorage.pagina === "perfil" ? styles.verticalAtv : styles.vertical}>

                            </div>
                        </div>
                        <div className={styles.icon}>
                            <img src={sessionStorage.pagina === "perfil" ? perfilAtv : perfil} alt="" />
                        </div>
                        <div className={sessionStorage.pagina === "perfil" ? styles.infoAtv : styles.info}>Perfil</div>
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

                <div className={styles.sair} onClick={logoff}>
                    <img src={sair} alt="" />
                    <div className={styles.sair_txt}>Sair</div>
                </div>

            </div>
        </div>
    );
}

export default Lateral_menu;