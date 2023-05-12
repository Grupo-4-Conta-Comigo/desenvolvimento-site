import styles from "../../_assets/css/modules/core modules/cardapio.module.css"
import editar from "../../_assets/img/icons/btnEditar.png"
import apagar from "../../_assets/img/icons/btnApagar.png"
import Swal from "sweetalert2";
import api from "../../config/api";
import { useState } from "react";
import ok from "../../_assets/img/icons/ok.png"

function Lista_itens(props) {
  const [editarAberto, setEditarAberto] = useState(false);

  const [nomeIpt, setNome] = useState(props.item.nome);
  const [categoriaIpt, setCategoria] = useState('comida');
  const [precoIpt, setPreco] = useState(props.item.preco);

  const changePreco = (event) => {
    setPreco(event.target.value);
  };

  const changeNome = (event) => {
    setNome(event.target.value);
  };

  return (
    <tr className={styles.dados}>
      <td>{props.item.id}</td>
      <td className={styles.espaco}>{/* espaço */}</td>
      <td>
        <input onChange={changeNome} className={editarAberto ? styles.ipt_enable : ""} type="text" defaultValue={props.item.nome} disabled={editarAberto ? false : true} /></td>
      <td className={styles.espaco}>{/* espaço */}</td>
      <td>
        <div className={styles.precos}>
          R$ <input onChange={changePreco} className={editarAberto ? styles.ipt_enable : ""} type="number" defaultValue={props.item.preco.toFixed(2)} step="0.01" min="0.01" disabled={editarAberto ? false : true} />
        </div>
      </td>
      <td className={styles.espaco}>{/* espaço */}</td>
      <td className={styles.editarApagar}>
        {editarAberto ? <img src={ok} alt="" onClick={
          ()=>{
            api.put("/produtos/editar/" + props.item.id, {
              nome: nomeIpt,
              categoria: categoriaIpt,
              preco: precoIpt
            })
              .then((response) => {
                console.log("RESPONSE: ", response)
                setEditarAberto(false);
              }).catch((err) => {
                console.log(err.response.data.errors[0].defaultMessage)
              })
          }
        } /> :
          <img src={editar} alt="" onClick={() => { setEditarAberto(true) }} />}
      </td>
      <td className={styles.editarApagar}><img src={apagar} alt="" onClick={
        () => {
          Swal.fire({
            title: 'Apagar ' + props.item.nome + '?',
            text: "Você não poderá reverter!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Sim, quero deletar!'
          }).then((result) => {
            if (result.isConfirmed) {

              api.delete("/produtos/deletar/" + props.item.id)
                .then((response) => {
                  Swal.fire(
                    props.item.nome + ' deletado!',
                    'O item foi deletado do seu cardápio',
                    'success'
                  );
                }).catch((err) => {
                  console.error(err)
                })
            }
          })
        }
      } /></td>
    </tr>
  );
}

export default Lista_itens;