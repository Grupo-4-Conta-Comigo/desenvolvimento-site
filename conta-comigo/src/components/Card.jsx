import { useEffect, useState } from "react";
import styles from "../_assets/css/modules/divisao modules/divisao_pers.module.css";
import food from "../_assets/img/icons/hamburguer.png";
import drink from "../_assets/img/icons/wine.png";
import mais from "../_assets/img/icons/mais.png";
import ListaCardPessoas from "./Listas/Lista_Card_Pessoas";
import api from "../config/api";
import ListaPessoasOption from "./Listas/Lista_Pessoas_Option";

function Card(props) {
  const [clientes, setClientes] = useState([]);
  const [isValido, setIsValido] = useState(true);
  const item = props.item;
  const valorTotal = item.produto.preco.toFixed(2);
  const [pagantes, setPagantes] = useState(
    new Map([[item.nomeDono, item.produto.preco]])
  );
  const [clienteAtual, setClienteAtual] = useState("");

  function onPrecoChange(cliente, valor) {
    setPagantes(new Map(pagantes.set(cliente, valor)));
    setIsValido(isTotalValido());
    props.onValorChange(item.id, cliente, valor, isTotalValido());
  }

  function isTotalValido() {
    let valorNosItens = Number(0);
    pagantes.forEach((value, key, map) => (valorNosItens += Number(value)));
    return (valorNosItens * 100).toFixed(0) === (valorTotal * 100).toFixed(0);
  }

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

  function addCliente(cliente, valor) {
    if (pagantes.has(cliente) || cliente == "") {
      return;
    }
    setPagantes(new Map(pagantes.set(cliente, valor)));
    console.log(pagantes);
    props.onAddPagante(item.id, cliente, valor);
  }

  useEffect(() => {
    getClientes();
  }, []);

  return (
    <div>
      <div className={styles.cardzin}>
        <div className={styles.card_header}>
          <div className={styles.icon} onClick={()=>{
            console.log(item.produto.categoria)
          }}>
            <img src={item.produto.categoria == "comida" ? food : drink} alt="" />
          </div>
          <div className={styles.nome}>{item.produto.nome}</div>
          <div className={isValido ? styles.preco : styles.precoErro}>R${item.produto.preco.toFixed(2)}</div>
        </div>
        {/* <span>Válido: {isValido ? "Sim" : "Não"}</span> */}
        <div className={styles.card_main}>
          <div className={styles.card_titulo}>
            <select
              name=""
              className={styles.select}
              id=""
              onChange={(texto) => setClienteAtual(texto.target.value)}
            >
              <option value="">-- Pagantes --</option>
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
          {Array.from(pagantes).map(([nomePagante, valorAPagar], i) => {
            addCliente(nomePagante, valorAPagar);
            return (
              <ListaCardPessoas
                key={i}
                nome={nomePagante}
                preco={valorAPagar}
                onChange={onPrecoChange}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
