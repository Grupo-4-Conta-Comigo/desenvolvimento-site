import styles from "../../_assets/css/modules/listas modules/lista_funcionarios.module.css"
import garcom from "../../_assets/img/icons/garcom.png"
import editar from "../../_assets/img/icons/btnEditar.png"
import apagar from "../../_assets/img/icons/btnApagar.png"
import Swal from "sweetalert2"
import api from "../../config/api"
import { useNavigate } from "react-router-dom"
import voltar from "../../_assets/img/icons/setaVoltar.png"
import { useState } from "react"

function Lista_funcionarios(props) {

  const navigate = useNavigate()
  const [nomeIpt, setNomeIpt] = useState(props.garcom.nome)
  const [emailIpt, setEmailIpt] = useState(props.garcom.email)
  const [senhaIpt, setSenhaIpt] = useState(props.garcom.senha)
  const [popup, setPopup] = useState(false)

  const changeNome = (event) => {
    setNomeIpt(event.target.value);
};
const changeEmail = (event) => {
    setEmailIpt(event.target.value);
};
const changeSenha = (event) => {
    setSenhaIpt(event.target.value);
};

function atualizar() {
  if (!nomeIpt || !emailIpt || !senhaIpt) {
      Swal.fire({
          icon: 'error',
          title: 'Campos vazios!',
          text: 'Insira todos os campos e tente novamente'
      })
  } else {
          api.put("/restaurantes/garcons/editar/" + props.garcom.id , {
              nome: nomeIpt,
              email: emailIpt,
              cargo: "garcom",
              senha: senhaIpt
          })
              .then((response) => {
                  console.log("RESPONSE: ", response)
                  Swal.fire(
                      'Garçom atualizado!',
                      '',
                      'success'
                  ).then((value) => {
                      console.log(response)
                      setPopup(false)
                      window.location.reload()
                  })
              }).catch((err) => {
                  console.log(err.response.data.errors[0].defaultMessage)
              })
  }
}

  return (
    <div>
      <div className={popup? styles.cadastrarItem : "btn_d"}>
        <div className={styles.popup}>
          <div className="close" onClick={()=>{setPopup(false)}}>
            <img src={voltar} alt="" />
            <p>voltar</p>
          </div>
          <div className={styles.header_popup}>
            <div className={styles.line}></div>
            <div className={styles.titulo}>Alterar o funcionário {props.garcom.nome}</div>
          </div>

          <div className={styles.inputs}>

            <input type="text" defaultValue={props.garcom.nome} placeholder="Nome:" onChange={changeNome}/>

            <input type="email" defaultValue={props.garcom.email} placeholder="E-mail" onChange={changeEmail}/>
            <input type="password" defaultValue="12345678" placeholder="Senha" onChange={changeSenha}/>
          </div>

          <button onClick={atualizar}>Atualizar</button>
        </div>
      </div>
      <div className={styles.funcionario}>
      <div className={styles.icon}> <img src={garcom} alt="" /></div>
      <div className={styles.dados}>
        <div className={styles.nome}>{props.garcom.nome}</div>
        <div className={styles.email}>{props.garcom.email}</div>
      </div>
      <div className={styles.editar} onClick={()=>{setPopup(true)}}>
        <img src={editar} />
      </div>
      <div onClick={() => {
        Swal.fire({
          title: 'Apagar ' + props.garcom.nome + '?',
          text: "Você não poderá reverter!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'Cancelar',
          confirmButtonText: 'Sim, quero deletar!'
        }).then((result) => {
          if (result.isConfirmed) {

            api.delete("/restaurantes/garcons/" + props.garcom.id)
              .then((response) => {
                window.location.reload()
              }).catch((err) => {
                console.error(err)
              })
          }
        })
      }} className={styles.apagar}>
        <img src={apagar} />
      </div>

    </div>
    </div>
  );
}

export default Lista_funcionarios;