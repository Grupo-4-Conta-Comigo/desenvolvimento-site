import { useState } from "react";
import styles from "../../_assets/css/modules/login.module.css"
import logomarca from "../../_assets/img/logo-logotipo/logomarca.png"
import api from "../../config/api";

function Login() {
    const [usuario,setUsuario] = useState('')
    const [senhaIpt,setSenha] = useState('')

    const changeUsuario = (event) => {
        setUsuario(event.target.value);
      };

      const changeSenha = (event) => {
        setSenha(event.target.value);
      };

      function logar(){
        api.post("/restaurantes/login",{
            email: usuario,
            senha: senhaIpt
        })
            .then((response) => {
                console.log("RESPONSE: ", response)
                alert("LOGADO" + "nome: " + response.data.nome)
                sessionStorage.setItem("nome_user", response.data.nome);
                sessionStorage.setItem("email_user", response.data.email);
                sessionStorage.setItem("cnpj_user", response.data.cnpj);
                sessionStorage.setItem("senha_user", response.data.senha);
                window.location.href = "http://localhost:3000/inicio";

            }).catch((err) => {
                alert("SENHA OU EMAIL INCORRETOS")
            })
      }

    if(sessionStorage.length > 0){
        window.location.href = "http://localhost:3000/inicio";
    }else{
        return (
            <div className={styles.bodyF}>
                <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logomarca} alt="" />
                </div>
                <p className={styles.login}>Login</p>
                <input type="text" placeholder="Email" onChange={changeUsuario}/>
                <input type="password" placeholder="Senha" onChange={changeSenha}/>
                <button onClick={logar}>Entrar</button>
                <p className={styles.fpsw}>Esqueceu a senha?</p>
                <p className={styles.novaConta}>Não possui conta?</p>
                <div className={styles.btn}>Cadastre-se</div>
            </div>
            </div>
        );
    }
}

export default Login;