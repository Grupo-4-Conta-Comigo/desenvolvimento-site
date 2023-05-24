import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/divisao_pers.module.css";
import voltar from "../../_assets/img/icons/setaVoltar.png";
import Card from "../../components/Card";
import ReactCardCarousel from "react-card-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useEffect, useState } from "react";
import api from "../../config/api";
import Swal from "sweetalert2";

function Divisao_personalizada() {
  const [itens, setItens] = useState([]);
  const [corpoCalculo, setCorpoCalculo] = useState({});

  function getValotTotal(itens) {
    return itens
      .map((item) => item.produto.preco)
      .reduce((total, precoItem) => total + precoItem, 0);
  }

  function getItens() {
    api
      .get("itens-comanda/todos/pedido/" + sessionStorage.pedidoAtual)
      .then((response) => {
        setItens(response.data);
        corpoCalculo.itens = [];
        for (const item of response.data) {
          corpoCalculo.itens.push({
            id: item.id,
            nome: item.produto.nome,
            preco: item.produto.preco,
            donoOriginal: item.nomeDono,
            isValid: true,
            pagantes: [
              { nome: item.nomeDono, valorAPagar: item.produto.preco },
            ],
          });
        }
        corpoCalculo.valorTotal = getValotTotal(response.data);
        console.log(corpoCalculo);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log("Este endpoint não existe");
        } else {
          console.error(err);
        }
      });
  }

  function onAddPagante(itemId, nomePagante, valor) {
    for (const item of corpoCalculo.itens) {
      if (itemId === item.id) {
        item.pagantes.push({
          nome: nomePagante,
          valorAPagar: valor,
        });
      }
    }
    console.log(corpoCalculo);
  }

  function onValorChange(itemId, nomePagante, valor, isValid) {
    for (const item of corpoCalculo.itens) {
      if (item.id === itemId) {
        for (const pagante of item.pagantes) {
          if (pagante.nome === nomePagante) {
            pagante.valorAPagar = Number(valor);
          }
        }
        item.isValid = isValid;
      }
    }
    console.log(corpoCalculo);
  }

  function areAllCardsValid() {
    for (const item of corpoCalculo.itens) {
      if (!item.isValid) {
        return false;
      }
    }
    return true;
  }

  function calc() {
    if (!areAllCardsValid()) {
      Swal.fire("Valores inválidos!", "", "warning");
      return;
    }
    console.log("aqui");
    api
      .post("calculos/calculo-personalizado", corpoCalculo)
      .then((response) => console.log(response))
      .catch((err) => {
        if (err.response.status === 404) {
          console.log("Este endpoint não existe");
        } else {
          console.error(err);
        }
      });
  }

  useEffect(() => {
    getItens();
  }, []);

  if (sessionStorage.length > 0) {
    return (
      <div className="fBody">
        <link
          rel="stylesheet"
          href="../../_assets/css/modules/divisao_pers.module.css"
        ></link>
        <script src="../../_assets/js/carrossel.js"></script>
        <LateralMenu />
        <div className={styles.main}>
          <div className={"voltar"}>
            <img src={voltar} alt="" />
            <p>voltar</p>
          </div>
          <div className={styles.container}>
            <div className={styles.container_head}>
              <p>Divisão personalizada</p>
              <div className={styles.passagem}>
                <div className={styles.line}></div>
              </div>
            </div>
            <div className={styles.container_right}>
              <div className={styles.valor}>Valor total: </div>
              <div className={styles.total}>
                R$
                {getValotTotal(itens)}
              </div>
            </div>
            <div className={styles.container_main}>
              <div className={styles.carrossel}>
                <div className={styles.cards}>
                  <ReactCardCarousel
                    autoplay={false}
                    autoplay_speed={2500}
                    spread="medium"
                  >
                    {itens
                      ? itens.map((item, i) => {
                          return (
                            <Card
                              key={i}
                              item={item}
                              onAddPagante={onAddPagante}
                              onValorChange={onValorChange}
                            />
                          );
                        })
                      : ""}
                  </ReactCardCarousel>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <button className={styles.btnSingular}>Voltar</button>
              <button onClick={calc}>Pagar</button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    window.location.href = "http://localhost:3000/login";
  }
}

export default Divisao_personalizada;
