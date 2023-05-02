import Lateral_menu from "../../components/Lateral_menu"
import Lista_itens_pessoa from "../../components/Lista_itens_pessoa"
import styles from "../../_assets/css/modules/add_itens.module.css"
import add from "../../_assets/img/icons/mais.png"
import person from "../../_assets/img/icons/person.png"
import comidas from "../../_assets/img/icons/comida.png"
import bebidas from "../../_assets/img/icons/bebida-de-coquetel.png"


function irPedidos() {
    window.location.href = "http://localhost:3000/pedidos";
}

function Add_itens() {
    if (sessionStorage.length > 0) {

        var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <Lateral_menu />
                <div className={styles.main}>

                    <div className={styles.container}>

                        <div className={styles.container_head}>
                            <div className={styles.wires}>
                                <div className={styles.wire}></div>
                                <div className={styles.wire}></div>
                                <div className={styles.wire}></div>
                                <div className={styles.wire}></div>
                                <div className={styles.wire}></div>
                            </div>
                            <div className={styles.icon}> <img src={person} alt="" /></div>
                            <p>Damasceno</p>


                        </div>
                        <div className={styles.container_right}>
                            <div className={styles.valor}>Adicionar itens</div>
                            <button className={styles.add_itens}>
                                <img src={add} alt="" />
                            </button>
                        </div>
                        <div className={styles.container_main}>

                            <div className={styles.itens}>

                                <div className={styles.listar}>
                                    <div className={styles.item}>
                                        <img src={comidas} alt="" />
                                        <p>Comidas</p>

                                    </div>

                                    <Lista_itens_pessoa />
                                    <Lista_itens_pessoa />
                                    <Lista_itens_pessoa />
                                </div>
                                <div className={styles.listar}>
                                    <div className={styles.item}>
                                        <img src={bebidas} alt="" />
                                        <p>Bebidas</p>

                                    </div>
                                    <Lista_itens_pessoa />
                                    <Lista_itens_pessoa />
                                    <Lista_itens_pessoa />
                                </div>
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

export default Add_itens;