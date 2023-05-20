import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/pagamento_cliente.module.css"
import TotalPessoas from "../../components/Total_pessoas";
import { useState, useEffect } from "react";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";
import Lista_pagamento_cliente from "../../components/Listas/Lista_pagamento_cliente";



function Pagamento_cliente() {
    if (sessionStorage.length > 0) {
        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Pagamento</p>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>


                            </div>
                          
                        </div>
                     
                        <div className={styles.container_main}>


                        <Lista_pagamento_cliente/>
                        <Lista_pagamento_cliente/>
                        <Lista_pagamento_cliente/>

                        </div>
                        <div className={styles.buttons}>
                            <button  className={styles.button_one}>Voltar</button>
                            <button className={styles.button_two}>Próximo</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    else {
        window.location.href = "http://localhost:3000/login";
    }
}

export default Pagamento_cliente;