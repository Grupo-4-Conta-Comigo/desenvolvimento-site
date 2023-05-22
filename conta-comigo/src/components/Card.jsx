import { useEffect, useState } from "react";
import styles from "../_assets/css/modules/divisao modules/divisao_pers.module.css";
import food from "../_assets/img/icons/hamburguer.png";
import mais from "../_assets/img/icons/mais.png";
import ListaCardPessoas from "./Listas/Lista_Card_Pessoas";
import Swal from "sweetalert2";
import api from "../config/api";
import ListaPessoasOption from "./Listas/Lista_Pessoas_Option";

function Card(props) {
  const [clientes, setClientes] = useState([]);
  const item = props.item;
  const [pagantes, setPagantes] = useState(
    new Map([[item.nomeDono, item.produto.preco]])
  );
  const [clienteAtual, setClienteAtual] = useState("");

  function getClientes() {
    api
      .get("comandas/todas/" + sessionStorage.pedidoAtual)
      .then((response) => {
        setClientes(response.data);
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log("Este endpoint não existe");
        } else {
          console.error(err);
        }
      });
  }

  function addCliente(cliente, preco) {
    if (pagantes.has(cliente) || cliente == "") {
      return;
    }
    setPagantes(new Map(pagantes.set(cliente, preco)));
    console.log(pagantes);
  }

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <div>
      <div className={styles.cardzin}>
        <div className={styles.card_header}>
          <div className={styles.icon}>
            <img src={food} alt="" />
          </div>
          <div className={styles.nome}>{item.produto.nome}</div>
          <div className={styles.preco}>R${item.produto.preco.toFixed(2)}</div>
        </div>
        <div className={styles.card_main}>
          <div className={styles.card_titulo}>
            {/* <p>Pagantes</p> */}
            <select
              name=""
              id=""
              onChange={(texto) => setClienteAtual(texto.target.value)}
            >
              <option value="">-- pagantes --</option>
              {clientes.map((cliente) => {
                return (
                  <ListaPessoasOption cliente={cliente} key={cliente.id} />
                );
              })}
            </select>
            <div
              className={styles.btn}
              onClick={() => {
                  addCliente(clienteAtual, 0);
              }}
            >
              <img src={mais} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.card_pessoas}>
          {Array.from(pagantes).map(([nomePagante, valorAPagar], i) => (
            <ListaCardPessoas key={i} nome={nomePagante} preco={valorAPagar} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
