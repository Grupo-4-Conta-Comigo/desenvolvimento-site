import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/core modules/comanda.module.css"
import { useLocation } from "react-router-dom";
import api from "../../config/api";
import { useState, useEffect } from "react";
import logotipo from "../../_assets/img/logo-logotipo/logotipo.png"
import Comanda_PDF from "../../components/Comanda_PDF";

function Comanda() {

    const { state } = useLocation();

    const [itens, setItens] = useState([])

    function getItens() {
        api.get("/itens-comanda/todos/" + state.idCliente)
            .then((response) => {
                setItens(response.data)
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

    console.log(state)
    if (sessionStorage.length > 0) {

        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <img src={logotipo} alt="" />
                        </div>
                        <Comanda_PDF itens={itens} key={itens.id} idCliente={state.idCliente} nome={state.nome} preco={state.preco}/>
                    </div>
                </div>

            </div>
        );
    }

    else {
        window.location.href = "http://localhost:3000/login";
    }
}

export default Comanda;