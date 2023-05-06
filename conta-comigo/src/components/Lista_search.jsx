import { useState } from "react";
import styles from "../_assets/css/modules/resultados.module.css"
import Associa_item from "./Associa_item";

function Lista_search(props) {
    const [selecionado, setSelecionado] = useState(false)

    return (
        <div>
            <div className={selecionado? "btn_d" : styles.resultado}>
                <div onClick={() => { setSelecionado(true) }} className={styles.result}> {props.prod.nome} </div>
            </div>
            {selecionado ? <Associa_item prod={props.prod} key={props.prod.id}/> : ""}
        </div>
    );
}

export default Lista_search;