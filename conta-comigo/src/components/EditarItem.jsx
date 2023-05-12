import styles from "../_assets/css/modules/core modules/cardapio.module.css";
import { useState } from "react";

function EditarItem(){
    const [nomeIpt, setNome] = useState();
    const [categoriaIpt, setCategoria] = useState('Comida');
    const [precoIpt, setPreco] = useState();

    const changePreco = (event) => {
        setPreco(event.target.value);
    };

    const changeNome = (event) => {
        setNome(event.target.value);
    };

    return(
        <div className={styles.cadastrarItem}>
        <div className={styles.popup}>
            <div className={styles.header_popup}>
                <div className={styles.line}></div>
                <div className={styles.titulo}>Cadastrar novo item ao cardápio</div>
            </div>

            <div className={styles.inputs}>
                <input type="text" placeholder="Nome do item:" onChange={changeNome} />

                <select name="format" id="format">
                    <option selected disabled>Escolher</option>
                    <option value="comida">Comida</option>
                    <option value="bebida">Bebida</option>
                    <option value="outro">Outro</option>
                </select>


                <input type="number" placeholder="0.01" step="0.01" min="0.01" onChange={changePreco} />
            </div>

            <button>Cadastrar</button>
        </div>
    </div>
    );
}

export default EditarItem;