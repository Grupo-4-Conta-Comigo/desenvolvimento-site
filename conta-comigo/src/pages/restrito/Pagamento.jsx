import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/pagamento.module.css";
import person from "../../_assets/img/icons/person.png";
import { useLocation } from "react-router-dom";
import api from "../../config/api";
import { useEffect, useState } from "react";

function Pagamento() {
  const { state } = useLocation();
  const [qrcode, setQrcode] = useState();

  function gerarQRcode() {
    api
      .put("/pagamentos/criar-cobranca", {
        idRestaurante: sessionStorage.userId,
        idComanda: sessionStorage.clienteAtual,
        valor: state.valor.toFixed(2),
      })
      .then((response) => {
        console.log("RESPONSE: ", response);
        api
          .put(
            "/pagamentos/qr-code",
            {
              idComanda: sessionStorage.clienteAtual,
              idRestaurante: sessionStorage.userId,
            },
            {
              responseType: "blob",
            }
          )
          .then((response) => {
            let qrCodeString = URL.createObjectURL(response.data);
            setQrcode(qrCodeString);
            })
          .catch((err) => {
            console.log("TINHA QUE ENTRAR AQUI");
            console.log(err.response.data.errors[0].defaultMessage);
          });
      })
      .catch((err) => {
        console.log("TINHA QUE ENTRAR AQUI");
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

                <button
                  onClick={() => {
                    console.log(qrcode);
                  }}
                >
                  teste
                </button>

                <img src={qrcode} alt="" />
              </div>

              <div className={styles.aponte}>Pagamento concluído</div>

              {/* <span class="loader"></span>  */}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "http://localhost:3000/login";
  }
}

export default Pagamento;
