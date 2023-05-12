import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/divisao_pers.module.css"


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
                    <div className={styles.container}>
                    <div className={styles.container_top}>
                            <p>Divisão Personalizada</p>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>


                            </div>

                        </div>
                        <div className={styles.container_head}>
                            
                            <p>Total:</p>
                        
                            <div className={styles.total}>R$215,90</div>
                          
                        </div>
                     
                        <div className={styles.container_main}>
                            <div className={styles.select}>
                                    <select name="format" id="format">
                                        <option selected disabled>Larissa</option>
                                        <option value="damasceno">Damasceno</option>
                                        <option value="rafael">Rafael</option>
                                        <option value="lucas">Lucas</option>
                                        <option value="pinheiro">Pinehiro</option>
                                        <option value="valentim">Valentim</option>
                                    </select>
                                </div>
                        <input type="text" className="input_valor" placeholder="Digite o valor a pagar..."/>
                      
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button_one}>Voltar</button>
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

export default Divisao_personalizada;