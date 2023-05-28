import { useState } from "react";
import styles from "../../_assets/css/modules/divisao modules/divisao_pers.module.css";
import btnEditar from "../../_assets/img/icons/btnEditar.png";
import btnOk from "../../_assets/img/icons/ok.png";

function Lista_Card_Pessoas(props) {
  const [isEditando, setIsEditando] = useState(false);
  return (
    <div className={styles.card_pessoa}>
      <div className={styles.nomePessoa}>{props.nome}</div>
      <input
        className={styles.precoPessoa}
        onChange={(event) =>
          props.onChange(props.nome, event.target.value )
        }
        defaultValue={props.preco}
        disabled={!isEditando}
        type="number"
      />
      <div className={styles.editar}>
        <img
          onClick={() => setIsEditando(!isEditando)}
          src={isEditando ? btnOk : btnEditar}
          alt=""
        />
      </div>
    </div>
  );
}

export default Lista_Card_Pessoas;
