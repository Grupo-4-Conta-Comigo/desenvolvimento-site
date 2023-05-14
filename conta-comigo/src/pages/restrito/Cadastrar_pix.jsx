import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/core modules/cadastrar_pix.module.css"
import  cll_qr from "../../_assets/img/icons/qr.png"



function Cadastrar_pix() {
    if (sessionStorage.length > 0) {

        // var infoAtv = 'infoAtv';
        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.container}>
                    <div className={styles.container_top}>
                            <p>Cadastre aqui a sua chave PIX!</p>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>


                            </div>

                        </div>
                        <div className={styles.container_head}>
                            
                         
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
                    
                                <input type="number" className="input_valor" placeholder="Digite o valor a pagar..."/>

                      
                        </div>
                        <div className={styles.buttons}>
                            <button className={styles.button_one}>Voltar</button>
                            <button className={styles.button_two}>Próximo</button>
                        </div>
                        <div className={styles.container_right}>
                        <img src={cll_qr} alt="" />
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

export default Cadastrar_pix;