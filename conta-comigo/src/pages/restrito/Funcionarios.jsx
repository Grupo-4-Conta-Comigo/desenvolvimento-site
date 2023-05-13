import Menu from "../../components/Lateral_menu"
import styles from "../../_assets/css/modules/core modules/funcionarios.module.css";
import Lista_itens from "../../components/Listas/Lista_itens";
import { useEffect, useState } from "react";
import api from "../../config/api";
import Swal from "sweetalert2";
import add from "../../_assets/img/icons/mais.png"
import Lista_funcionarios from "../../components/Listas/Lista_funcionarios";


function Funcionarios() {

  

    return (
        <div className={styles.fBody}>
            <Menu />
            {/* <div className={styles.cadastrarItem}>
                <div className={styles.popup}>
                    <div className={styles.header_popup}>
                        <div className={styles.line}></div>
                        <div className={styles.titulo}>Cadastrar novo funcionário</div>
                    </div>

                    <div className={styles.inputs}>
                       
                        <input type="text" placeholder="Nome:" />

                        <input type="email" placeholder="E-mail" />
                        <input type="password" placeholder="Senha" />
                    </div>

                    <button>Cadastrar</button>
                </div>
            </div> */}
                
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.containerHead}>
                            <div className={styles.titulo}>Funcionários Cadastrados
                                <div className={styles.line}></div></div>
                            <div className={styles.cadastrar}>

                                <div className={styles.valor}>Adicionar funcionário</div>
                                <button className={styles.add_cliente}>
                                    <img src={add} alt="" />
                                </button>
                            </div>
                        </div>

                    <div className={styles.center}>
                    <div className={styles.funcionarios}>
                        <Lista_funcionarios/>
                        <Lista_funcionarios/>
                        <Lista_funcionarios/>
                        <Lista_funcionarios/>
                        <Lista_funcionarios/>
                        <Lista_funcionarios/>
              </div>

           
                    </div>

             
                     
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}


export default Funcionarios;