import logotipo from "../../_assets/img/logo-logotipo/logotipo.png"
import cmMobile from "../../_assets/img/cmMobile.png"
import styles from "../../_assets/css/modules/core modules/cadastro.module.css"
import { useState } from "react";
import api from "../../config/api";
import Swal from "sweetalert2";

function irLogin(){
    window.location.href = "http://localhost:3000/login";
}

function Cadastro() {
    const [nomeIpt, setNome] = useState('');
    const [cnpjIpt, setCnpj] = useState('');
    const [emailIpt, setEmail] = useState('');
    const [senhaIpt, setSenha] = useState('');
    const [senhaDoisIpt, setSenhaDois] = useState('');

    const [carregando, setCarregando] = useState(false)

    const [cnpjErrado, setCnpjErrado] = useState(false);
    const [emailErrado, setEmailErrado] = useState(false);
    const [senhaErrada, setSenhaErrada] = useState(false);
    const [senhaErradaIguais, setSenhaErradaIguais] = useState(false);
    const [senhaErradaTamanho, setSenhaErradaTamanho] = useState(false);

    const estilo = {
        border: '1px solid #fc5b5b'
    }

    const erro = {
        display : 'block'
    }




    const changeNome = (event) => {
        setNome(event.target.value);
    };

    const changeCnpj = (event) => {
        setCnpj(event.target.value);
    };

    const changeEmail = (event) => {
        setEmail(event.target.value);
    };

    const changeSenha = (event) => {
        setSenha(event.target.value);
    };

    const changeSenhaDois = (event) => {
        setSenhaDois(event.target.value);
    };


    function carregar(){
        setCarregando(true);
    }

    function pararLoading(){
        setCarregando(false);
    }

    function cadastrar() {
        carregar()

        console.log("NOME: " + nomeIpt);
        console.log("CNPJ: " + cnpjIpt);
        console.log("EMAIL: " + emailIpt);
        console.log("SENHA: " + senhaIpt);
        console.log("SENHA DOIS: " + senhaDoisIpt);


        if (senhaIpt !== senhaDoisIpt) {
            setSenhaErrada(true);
            setSenhaErradaIguais(true);
            pararLoading()
            return;
        }

        api.post("/restaurantes/criar", {
            nome: nomeIpt,
            cnpj: cnpjIpt,
            email: emailIpt,
            senha: senhaIpt
        })
            .then((response) => {
                console.log("RESPONSE: ", response)
                pararLoading()
                Swal.fire(
                    'Restaurante cadastrado!',
                    '',
                    'success'
                ).then((value) => {
                    irLogin()
                })
            }).catch((err) => {
                console.log("TINHA QUE ENTRAR AQUI")
                console.log(err.response.data.errors[0].defaultMessage)

                setCnpjErrado(false);
                setEmailErrado(false);
                setSenhaErrada(false);
                setSenhaErradaIguais(false);
                setSenhaErradaTamanho(false);

                pararLoading()

                var i = 0;
                while (i < 3) {
                    if (err.response.data.errors[i].defaultMessage === "número do registro de contribuinte corporativo brasileiro (CNPJ) inválido") {
                        setCnpjErrado(true);
                    } else if (err.response.data.errors[i].defaultMessage === "deve ser um endereço de e-mail bem formado") {
                        setEmailErrado(true);
                    }
                    else if (err.response.data.errors[i].defaultMessage === "tamanho deve ser entre 8 e 2147483647") {
                        setSenhaErradaTamanho(true);
                        setSenhaErrada(true);
                    } else if (err.response.data.errors[i].defaultMessage === "não deve estar em branco") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Campos vazios!',
                            text: 'Insira todos os campos e tente novamente'
                        })
                    }
                    i = i + 1;
                }
            })
    }

    return (
        <div className={styles.bodyF}>
            {/* {console.log(cnpjErrado)} */}
            <div className={styles.left_side}>
                <div className={styles.head}>
                    <img src={logotipo} alt="" />
                    <span>| Cadastro</span>
                </div>
                <div className={styles.form}>
                    <input id="nomeid" type="text" placeholder="Nome do restaurante" onChange={changeNome} />
                    <p className={styles.erro} id="erroNome"></p>
                    <input style={emailErrado ? estilo : null} type="text" placeholder="Email" onChange={changeEmail} />
                    <p style={emailErrado ? erro : null} className={styles.erro}>Email inválido</p>
                    <input style={cnpjErrado ? estilo : null} type="text" placeholder="CNPJ" onChange={changeCnpj} />
                    <p style={cnpjErrado ? erro : null} className={styles.erro}>CNPJ inválido</p>
                    <div className={styles.container_ipt}>
                        <input style={senhaErrada ? estilo : null} type="password" placeholder="Senha" onChange={changeSenha} />
                        <input style={senhaErrada ? estilo : null} type="password" placeholder="Repita a senha" onChange={changeSenhaDois} />
                    </div>
                    <p style={senhaErradaIguais ? erro : null} className={styles.erro}>As senhas precisam ser iguais</p>
                    <p style={senhaErradaTamanho ? erro : null} className={styles.erro}>A senha deve ter mais de 8 caracteres</p>
                    <button onClick={cadastrar}>Cadastrar</button>
                </div>
                <span className={carregando ? "loader" : ""}></span>
                
                <p className={carregando ? "disable" : ""} onClick={irLogin}>Já possui conta?</p>
                <div onClick={irLogin} className={styles.btn}>Entrar</div>
            </div>
            <div className={styles.right_side}>
                <img src={cmMobile} alt="" />
            </div>
        </div>
    );
}

export default Cadastro;