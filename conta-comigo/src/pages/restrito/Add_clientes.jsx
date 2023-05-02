import Lateral_menu from "../../components/Lateral_menu"
import styles from "../../_assets/css/modules/add_cliente.module.css"
import Lista_pessoas from "../../components/Lista_pessoas"
import add from "../../_assets/img/icons/mais.png"
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

function irPedidos() {
    window.location.href = "http://localhost:3000/pedidos";
}

function Add_clientes(props) {
    const { idMesa } = useParams();
    const apelido = 'Larissa';
    if (sessionStorage.length > 0) {

        var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <Lateral_menu />
                <div className={styles.main}>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Mesa {idMesa}</p>
                            <div className={styles.passagem}>
                            <div className={styles.line}></div>
                          

                            </div>

                        </div>
                        <div className={styles.container_right}>
                            <div className={styles.valor}>Adicionar cliente</div>
                            <button className={styles.add_cliente}>
                                <img src={add} alt="" />
                            </button>
                        </div>
                        <div className={styles.container_main}>

                            <div className={styles.pessoas}>
                                <Lista_pessoas pessoas={apelido} key = {idMesa}/>
                                <Lista_pessoas />
                                <Lista_pessoas />
                                <Lista_pessoas />
                                <Lista_pessoas />
                                <Lista_pessoas />
                            </div>

                            <div className={styles.buttons}>
                            <button onClick={
                                ()=>{
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Os Clientes não possuem comanda',
                                        footer: '<a href="">Precisa de ajuda?</a>'
                                      })
                                }
                            }>Fechar conta</button>
                        </div>

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

export default Add_clientes;