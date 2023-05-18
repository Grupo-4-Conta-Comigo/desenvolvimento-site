import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/divisao_pers.module.css"
import voltar from "../../_assets/img/icons/setaVoltar.png"
import Card from "../../components/Card";



// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }

function Divisao_personalizada() {
    if (sessionStorage.length > 0) {

        // var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                <div className={"voltar"}>
                        <img src={voltar} alt="" />
                         <p>voltar</p>
                    </div>
                <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Divisão personalizada</p>
                            <div className={styles.passagem}>
                            <div className={styles.line}></div>
                            </div>

                        </div>
                        <div className={styles.container_right}>
                            <div className={styles.valor}>Valor total: </div>
                            <div className={styles.total}>R$150,00</div>
                        </div>
                        <div className={styles.container_main}>

                            <div className={styles.cards}>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div>

                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.btnSingular}>Voltar</button>
                            <button >Pagar</button>
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

export default Divisao_personalizada;