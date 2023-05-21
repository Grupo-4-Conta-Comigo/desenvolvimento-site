import Menu from "../../components/Lateral_menu"
import styles from "../../_assets/css/modules/core modules/funcionarios.module.css";
import Lista_itens from "../../components/Listas/Lista_itens";
import { useEffect, useState } from "react";
import api from "../../config/api";
import Swal from "sweetalert2";
import add from "../../_assets/img/icons/mais.png"
import Lista_funcionarios from "../../components/Listas/Lista_funcionarios";
import { useNavigate } from "react-router-dom";
import voltar from "../../_assets/img/icons/setaVoltar.png"



function Funcionarios() {

    const [garcons, setGarcom] = useState([])
    const [popup, setPopup] = useState(false)
    const [nomeIpt, setNomeIpt] = useState()
    const [emailIpt, setEmailIpt] = useState()
    const [senhaIpt, setSenhaIpt] = useState()
    const [cpfIpt, setCpfIpt] = useState("094.700.440-88")
    const navigate = useNavigate()

    function getGarcons() {
        api.get("/restaurantes/garcons/todos/" + sessionStorage.userId)
            .then((response) => {
                console.log(response.data)
                setGarcom(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    useEffect(() => {
        getGarcons()
    }, []);

    const changeNome = (event) => {
        setNomeIpt(event.target.value);
    };
    const changeEmail = (event) => {
        setEmailIpt(event.target.value);
    };
    const changeSenha = (event) => {
        setSenhaIpt(event.target.value);
    };


    function cadastrarGarcom() {
        if (!nomeIpt || !emailIpt || !senhaIpt) {
            Swal.fire({
                icon: 'error',
                title: 'Campos vazios!',
                text: 'Insira todos os campos e tente novamente'
            })
        } else {
                api.post("/restaurantes/garcons/criar" , {
                    nome: nomeIpt,
                    cpf: cpfIpt,
                    email: emailIpt,
                    senha: senhaIpt,
                    restauranteId: sessionStorage.userId
                })
                    .then((response) => {
                        console.log("RESPONSE: ", response)
                        Swal.fire(
                            'Garçom cadastrado!',
                            '',
                            'success'
                        ).then((value) => {
                            console.log(response)
                            getGarcons();
                            setPopup(false)
                        })
                    }).catch((err) => {
                        console.log(err.response.data.errors[0].defaultMessage)
                    })
        }
    }

    return (
        <div className={styles.fBody}>
            <Menu />
            <div className={popup? styles.cadastrarItem : "btn_d"}>
                <div className={styles.popup}>
                <div className="close" onClick={()=>{setPopup(false)}}>
                <img src={voltar} alt="" />
                <p>voltar</p>
                </div>
                    <div className={styles.header_popup}>
                        <div className={styles.line}></div>
                        <div className={styles.titulo}>Cadastrar novo funcionário</div>
                    </div>

                    <div className={styles.inputs}>
                       
                        <input type="text" placeholder="Nome:" onChange={changeNome} />

                        <input type="email" placeholder="E-mail" onChange={changeEmail} />
                        <input type="password" placeholder="Senha" onChange={changeSenha} />
                    </div>

                    <button onClick={cadastrarGarcom}>Cadastrar</button>
                </div>
            </div>
                
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.containerHead}>
                            <div className={styles.titulo}>Funcionários Cadastrados
                                <div className={styles.line}></div></div>
                            <div className={styles.cadastrar}>

                                <div onClick={()=>{setPopup(true)}} className={styles.valor}>Adicionar funcionário</div>
                                <button className={styles.add_cliente}>
                                    <img src={add} alt="" />
                                </button>
                            </div>
                        </div>

                    <div className={styles.center}>
                    <div className={styles.funcionarios}>

                        {
                                    garcons ? (
                                        garcons.map((garcom) => {
                                            return (
                                                <Lista_funcionarios garcom={garcom} key={garcom.id}/>
                                            )
                                        })
                                    ) : <div className={styles.msg}>Não há funcionários com acesso</div>
                                }
              </div>

           
                    </div>

             
                     
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}


export default Funcionarios;