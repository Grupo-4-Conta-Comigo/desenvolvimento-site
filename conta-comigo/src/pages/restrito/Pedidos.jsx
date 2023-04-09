import Menu from "../../components/Lateral_menu"
import lupa from "../../_assets/img/icons/lupa.png"
import add from "../../_assets/img/icons/mais.png"
import Pedidos from "../../components/Lista_pedidos"
import styles from "../../_assets/css/modules/pedidos.module.css"

function Inicio(){
    return(
        <div>
            <Menu/>

            <div className={styles.main}>
                <div className={styles.main_head}>
                    Olá, restaurante
                    <p>
                        &gt; início
                    </p>
                </div>
                <div className={styles.principal}>
                    <div className={styles.titulo}>
                        Temos <div className={styles.qtd}>4 pedidos</div> em andamento
                    </div>
                    <div className={styles.pesquisa}>
                        <div className={styles.busca}>
                            <input type="text" placeholder="Buscar pedido..."/>
                            <img src={lupa} alt="" />
                        </div>
                        <button>
                            <img src={add} alt="" />
                        </button>
                    </div>
                    <Pedidos/>
                </div>
            </div>
        </div>
    );
}

export default Inicio;