import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/core modules/cadastrar_pix.module.css";
import pasta from "../../_assets/img/icons/pasta.png";
import voltar from "../../_assets/img/icons/setaVoltar.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../config/api";
import { useState } from "react";

function Cadastrar_pix() {
  const navigate = useNavigate();
  const [chavepix, setChavepix] = useState();
  const [clienteid, setClienteid] = useState();
  const [clienteSecret, setClienteSecret] = useState();
  const [carregando, setCarregando] = useState(false)

  const changeChave = (event) => {
    setChavepix(event.target.value);
  };

  const changeId = (event) => {
    setClienteid(event.target.value);
  };

  const changeSecret = (event) => {
    setClienteSecret(event.target.value);
  };

  function cadastrarChave() {
    setCarregando(true)
    console.log(chavepix, clienteid, clienteSecret);
    api
      .put("/detalhes-pagamento/criar/" + sessionStorage.userId, {
        chavePix: chavepix,
        clientId: clienteid,
        clientSecret: clienteSecret,
      })
      .then((response) => {
        api
          .put("/detalhes-pagamento/testar-pagamentos/" + sessionStorage.userId)
          .then((response)=>{
            console.log(response)
            Swal.fire("Chave pix cadastrada!", "", "success").then((value) => {
              navigate("/perfil");
            });
            setCarregando(false)
            // getPedidos();
          }).catch(()=>{
            Swal.fire("As informações são inválidas!", "", "warning")
            setCarregando(false)
          })
      })
      .catch((err) => {
        setCarregando(false)
        console.log("TINHA QUE ENTRAR AQUI");
        console.log(err.response.data.errors[0].defaultMessage);
      });
  }
  if (sessionStorage.length > 0) {
    // var infoAtv = 'infoAtv';
    return (
      <div className="fBody">
        <LateralMenu />
        <div className={styles.main}>
          <div
            onClick={() => {
              navigate("/perfil");
            }}
            className={"voltar"}
          >
            <img src={voltar} alt="" />
            <p>voltar</p>
          </div>
          <div className={styles.container}>
            <div className={styles.container_top}>
              <p>Cadastre aqui a sua chave PIX!</p>
              <div className={styles.passagem}>
                <div className={styles.line}></div>
              </div>
            </div>

            <div className={styles.container_main}>
              <input
                type="text"
                className={styles.input_valor}
                placeholder="Digite a chave PIX:"
                onChange={changeChave}
              />
              <input
                type="text"
                className={styles.input_valor}
                placeholder="Client ID:"
                onChange={changeId}
              />
              <input
                type="text"
                className={styles.input_valor}
                placeholder="Client Secret:"
                onChange={changeSecret}
              />

              {/* <div className={styles.file}>

                                <form>
                                    <label for="file"> Certificado:
                                        <img src={pasta} alt="" />
                                    </label>
                                    <input type="file" className={styles.input_file} />
                                </form>

                            </div> */}

              <div
                className={styles.arquivo}
                onClick={async () => {
                  const { value: file } = await Swal.fire({
                    title: "Select image",
                    input: "file",
                    inputAttributes: {
                      accept: "*",
                      "aria-label": "Adicione o certificado",
                    },
                  });

                  if (file) {
                    let data = new FormData();
                    data.append("certificado", file);
                    api
                      .put(
                        `/detalhes-pagamento/certificados/criar/${sessionStorage.getItem(
                          "userId"
                        )}`,
                        data,
                        {
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        }
                      )
                      .then((response) => {
                        console.log("RESPONSE: ", response);
                        Swal.fire("Documento adicionado!", "", "success");
                        // getPedidos();
                      })
                      .catch((err) => {
                        console.log("TINHA QUE ENTRAR AQUI");
                        console.log(err);
                      });
                  }
                }}
              >
                <p>Adicionar certificado</p>
                <img src={pasta} alt="" />
              </div>
              <span className={carregando ? "loader" : ""}></span>
            </div>
            <div className={styles.buttons}>
              <button className={styles.button_two} onClick={cadastrarChave}>
                Cadastrar Chave
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "http://localhost:3000/login";
  }
}

export default Cadastrar_pix;
