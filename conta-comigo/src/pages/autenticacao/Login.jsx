import styles from "../../_assets/css/modules/login.module.css"
import logomarca from "../../_assets/img/logo-logotipo/logomarca.png"

function Login() {
    return (
        <div className={styles.bodyF}>
            <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logomarca} alt="" />
            </div>
            <p className={styles.login}>Login</p>
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
            <p className={styles.fpsw}>Esqueceu a senha?</p>
            <p className={styles.novaConta}>Não possui conta?</p>
            <div className={styles.btn}>Cadastre-se</div>
        </div>
        </div>
    );
}

export default Login;