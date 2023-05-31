import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/pagamento.module.css";
import person from "../../_assets/img/icons/person.png";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../../config/api";
import { useEffect, useState } from "react";
import spin from "../../_assets/img/icons/spin.gif"
import Swal from "sweetalert2";
import voltar from "../../_assets/img/icons/setaVoltar.png"


function Pagamento(props) {
  const { state } = useLocation();
  const [qrcode, setQrcode] = useState();
  const [carregando, setCarregando] = useState(false)
  const navigate = useNavigate()

  // console.log(state.singular)
  // console.log(state.idComanda)

  function carregar() {
    setCarregando(true);
  }


  function pararLoading() {
    setCarregando(false);
  }

  function gerarQRcode() {
    carregar()
    console.log(state.idComanda)
    api
      .put("/pagamentos/criar-cobranca", {
        idRestaurante: sessionStorage.userId,
        idComanda: state.idComanda,
        valor: state.valor.toFixed(2),
      })
      .then((response) => {
        // console.log("RESPONSE: ", response);
        api
          .put(
            "/pagamentos/qr-code",
            {
              idComanda: state.idComanda,
              idRestaurante: sessionStorage.userId,
            },
            {
              responseType: "blob",
            }
          )
          .then((response) => {
            let qrCodeString = URL.createObjectURL(response.data);
            setQrcode(qrCodeString);
            pararLoading()
          })
          .catch((err) => {
            console.log(err.response.data.errors[0].defaultMessage);
            pararLoading()
          });
      })
      .catch((err) => {
        console.log(err.response.data.errors[0].defaultMessage);
      });
  }

  useEffect(() => {
    gerarQRcode();
  }, []);

  if (sessionStorage.length > 0) {
    return (
      <div className="fBody">
        <LateralMenu />
        <div className={styles.main}>
          <div onClick={() => { window.history.back() }} className={"voltar"}>
            <img src={voltar} alt="" />
            <p>voltar</p>
          </div>
          <div className={styles.container}>
            <div className={styles.pagante}>
              <div className={styles.profile}>
                <div className={styles.circle}>
                  <img src={person} alt="" />
                </div>
              </div>
              <div className={styles.nome}>{state.nome}</div>
              <div className={styles.valor}>
                R${Number(state.valor).toFixed(2)}
              </div>
            </div>
            <div className={styles.areaPix}>
              <div className={styles.titulo}>Aguardando pagamento...</div>
              <div className={styles.line}>
                <div className={styles.lineVisible}></div>
              </div>

              <div className={styles.QRbox}>
                <div className={styles.squares}>
                  <div className={styles.squareTopLeft}></div>
                  <div className={styles.squareTopRigth}></div>
                </div>
                <div className={styles.squares}>
                  <div className={styles.squareBotLeft}></div>
                  <div className={styles.squareBotRigth}></div>
                </div>
                <div className={carregando ? styles.loading : "btn_d"}>
                  <img src={spin} alt="" />
                </div>
                <img className={qrcode ? "" : "btn_d"} src={qrcode} alt="" />
              </div>

              <div className={styles.aponte} onClick={() => {
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 2000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  },
                  didClose: (toast) => {
                    api.put("/comandas/editar/" + state.idComanda, {
                      status: "finalizado",
                      nomeDono: state.nome
                    })
                      .then((response) => {
                        console.log("RESPONSE: ", response)
                        api.post("/pagamentos/criar", {
                          idRestaurante: sessionStorage.userId,
                          numeroMesa: 2,
                          nomePagante: state.nome,
                          chavePix: "",
                          valorPagamento: state.valor.toFixed(2),
                          pagamentoConcluido: true,
                          pix: true
                        }).then((response)=>{
                          console.log("RESPONSE: ", response)
                        }).catch((err)=>{
                          console.log(err)
                        })

                        // getPedidos();

                      }).catch((err) => {
                        console.log(err.response.data.errors[0].defaultMessage)
                      })
                    if (state.singular) {
                      api.put("/pedidos/editar/" + sessionStorage.pedidoAtual, {
                        status: "finalizado", //AQUI TEM QUE MUDAR
                        mesa: state.mesa
                      })
                        .then((response) => {
                          console.log("RESPONSE: ", response)
                          Swal.fire(
                            'Mesa finalizada!',
                            '',
                            'success'
                          ).then(() => {
                            navigate("/pedidos")
                          })

                          // getPedidos();

                        }).catch((err) => {
                          console.log(err.response.data.errors[0].defaultMessage)


                        })
                    } else {
                      window.history.back()
                    }
                  }
                })

                Toast.fire({
                  icon: 'success',
                  title: 'Pagamento registrado'
                })
              }}>Confirmar pagamento</div>

              {/* <span class="loader"></span>  */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    navigate("/login")
  }
}

export default Pagamento;
