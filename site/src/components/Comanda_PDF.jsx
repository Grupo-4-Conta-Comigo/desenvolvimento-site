import { createRef, useEffect, useState } from "react";
import styles from "../_assets/css/modules/core modules/comanda.module.css"
import Pdf from "react-to-pdf";
import { useLocation } from "react-router-dom";
import api from "../config/api";
import Lista_itens_comanda from "./Listas/Lista_itens_comanda";

function Comanda_PDF(props) {

    const { state } = useLocation();

    const [itens, setItens] = useState([])

    function getItens() {
        api.get("/itens-comanda/todos/" + props.idCliente)
            .then((response) => {
                setItens(response.data)
                console.log(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    useEffect(() => {
        getItens();
    }, []);

    const ref = createRef();
    const options = {
        orientation: 'portrait',
        format: [100,65]
    };

    return (
        <div className={styles.teste}>
            <div className={styles.comanda} ref={ref}>
            <div className={styles.comandaHeader}>
                <div className={styles.titulo}>
                    <b>COMANDA</b>
                    <div className={styles.line}></div>
                    <p>Cliente: {state.nome}</p>
                </div>

                <div className={styles.preco}>
                    R${Number(state.preco).toFixed(2)}
                </div>
            </div>

            <div className={styles.listaItens}>
                {
                    itens.map((item) => {
                        return (
                            <Lista_itens_comanda item={item} key={item.id} />
                        )
                    })
                }
            
            </div>
        </div>
        {/* <button>Baixar PDF</button> */}

        <div className={styles.btn}>
        <Pdf targetRef={ref} filename="Comanda.pdf" options={options} >
                {({ toPdf }) =>
                    <button
                        onClick={toPdf}>
                        Baixar PDF
                    </button>
                }
            </Pdf>
        </div>
        </div>
    );
}

export default Comanda_PDF