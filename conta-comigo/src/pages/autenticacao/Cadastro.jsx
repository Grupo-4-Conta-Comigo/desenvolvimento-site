import logotipo from "../../_assets/img/logo-logotipo/logotipo.png"
import cmMobile from "../../_assets/img/cmMobile.png"
import styles from "../../_assets/css/cadastro.module.css"

function Cadastro(){
    return(
        <div className={styles.bodyF}>
            <div className={styles.left_side}>
        <div className={styles.head}>
            <img src={logotipo} alt="" />
            <span>| Cadastro</span>
        </div>
        <div className={styles.form}>
            <input type="text" placeholder="Nome completo" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="CNPJ" />
            <div className={styles.container_ipt}>
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Repita a senha" />
            </div>
            <button>Cadastrar</button>
        </div>
        <p>Já possui conta?</p>
            <div className={styles.btn}>Entrar</div>
    </div>
    <div className={styles.right_side}>
            <img src={cmMobile} alt="" />
    </div>
        </div>
    );
}

export default Cadastro;