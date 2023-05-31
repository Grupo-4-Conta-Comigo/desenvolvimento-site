import { useState } from "react";
import styles from "../../_assets/css/modules/core modules/login.module.css"
import logomarca from "../../_assets/img/logo-logotipo/logomarca.png"
import api from "../../config/api";
import { useNavigate } from "react-router-dom";


function Login() {
    const [usuario, setUsuario] = useState('')
    const [senhaIpt, setSenha] = useState('')
    const [erro, setErro] = useState('');

    const navigate = useNavigate()


    const [carregando, setCarregando] = useState(false)

    function carregar() {
        setCarregando(true);
    }

    function pararLoading() {
        setCarregando(false);
    }

    const getErro = () => {
        pararLoading()
        setErro("Email ou senha incorreta");
    };

    const changeUsuario = (event) => {
        setUsuario(event.target.value);
    };

    const changeSenha = (event) => {
        setSenha(event.target.value);
    };

    function logar() {
        carregar()
        api.post("/restaurantes/login", {
            email: usuario,
            senha: senhaIpt
        })
            .then((response) => {
                setErro("");
                console.log("RESPONSE: ", response)
                sessionStorage.setItem("cargo", response.data.cargo);
                sessionStorage.setItem("nome_user", response.data.nome);
                sessionStorage.setItem("email_user", response.data.email);
                sessionStorage.setItem("senha_user", response.data.senha);
                sessionStorage.setItem("token", response.data.token);
                sessionStorage.setItem("pagina", "inicio")
                if (sessionStorage.cargo === 'admin') {
                    sessionStorage.setItem("userId", response.data.userId);
                    sessionStorage.setItem("cnpj_user", response.data.cnpj);
                } else {
                    sessionStorage.setItem("userId", response.data.restauranteId)
                }
                pararLoading()
                navigate("/inicio")
                

            }).catch((err) => {
                getErro();
            })
    }

    function conexaoFormLogin(e){
        logar()
        e.preventDefault();
      }


    if (sessionStorage.length > 0) {
        navigate("/inicio")
    } else {
        return (
            <div className={styles.bodyF}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={logomarca} alt="" />
                    </div>
                    <p className={styles.login}>Login</p>

                        <form onSubmit={logar}>
                        <input type="text" placeholder="Email" onChange={changeUsuario} />
                        <input type="password" placeholder="Senha" onChange={changeSenha} />
                        <p className={styles.ativo}>{erro}</p>
                        <button onClick={conexaoFormLogin}>Entrar</button>
                        </form>

                    <span className={carregando ? "loader" : ""}></span>
                    <p className={carregando ? "disable" : styles.fpsw}>Esqueceu a senha?</p>
                    <p className={carregando ? "disable" : styles.novaConta} onClick={()=>{navigate("/cadastro")}}>Não possui conta?</p>
                    <div className={styles.btn} onClick={()=>{navigate("/cadastro")}}>Cadastre-se</div>


                </div>
            </div>
        );
    }
}

export default Login;