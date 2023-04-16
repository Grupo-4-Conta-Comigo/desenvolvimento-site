import logotipo from "../../_assets/img/logo-logotipo/logotipo.png"
import cmMobile from "../../_assets/img/cmMobile.png"
import styles from "../../_assets/css/modules/cadastro.module.css"
import { useState } from "react";
import api from "../../config/api";



function Cadastro() {
    const [nomeIpt, setNome] = useState('');
    const [cnpjIpt, setCnpj] = useState('');
    const [emailIpt, setEmail] = useState('');
    const [senhaIpt, setSenha] = useState('');
    const [senhaDoisIpt, setSenhaDois] = useState('');

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

    function cadastrar() {

        console.log("NOME: " + nomeIpt);
        console.log("CNPJ: " + cnpjIpt);
        console.log("EMAIL: " + emailIpt);
        console.log("SENHA: " + senhaIpt);
        console.log("SENHA DOIS: " + senhaDoisIpt);


        api.post("/restaurantes/criar",{
            nome: nomeIpt,
            cnpj: cnpjIpt,
            email: emailIpt,
            senha: senhaIpt
        })
            .then((response) => {
                console.log("RESPONSE: ", response)
                window.location.href = "http://localhost:3000/login";
            }).catch((err) => {
                console.log("TINHA QUE ENTRAR AQUI")
                console.log(err.response.data.errors[0].defaultMessage)

                if(senhaIpt !== senhaDoisIpt){
                    alert("As senhas devem ser iguais")
                }
                var i = 0;
                while(i < 3){
                    if(err.response.data.errors[i].defaultMessage === "número do registro de contribuinte corporativo brasileiro (CNPJ) inválido"){
                        alert("CNPJ inválido")
                    }else if(err.response.data.errors[i].defaultMessage === "deve ser um endereço de e-mail bem formado"){
                        alert("Email inválido")
                    }
                    else if(err.response.data.errors[i].defaultMessage === "tamanho deve ser entre 8 e 2147483647"){
                        alert("A senha deve ter no mínimo 8 caracteres")
                    }
                    i = i + 1;
                }
            })
    }

    return (
        <div className={styles.bodyF}>
            <div className={styles.left_side}>
                <div className={styles.head}>
                    <img src={logotipo} alt="" />
                    <span>| Cadastro</span>
                </div>
                <div className={styles.form}>
                    <input id="nomeid" type="text" placeholder="Nome completo" onChange={changeNome} />
                    <p className={styles.erro} id="erroNome"></p>
                    <input type="text" placeholder="Email" onChange={changeEmail}/>
                    <p className={styles.erro}>Email inválido</p>
                    <input type="text" placeholder="CNPJ" onChange={changeCnpj}/>
                    <p className={styles.erro}>CNPJ inválido</p>
                    <div className={styles.container_ipt}>
                        <input type="password" placeholder="Senha" onChange={changeSenha}/>
                        <input type="password" placeholder="Repita a senha" onChange={changeSenhaDois}/>
                    </div>
                    <p className={styles.erro}>A senha precisa ter mais de 8 caracteres</p>
                    <p className={styles.erro}>As senhas precisam ser iguais</p>
                    <button onClick={cadastrar}>Cadastrar</button>
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