import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/core modules/comanda.module.css"
import Lista_itens_comanda from "../../components/Listas/Lista_itens_comanda";
import hamburguer from "../../_assets/img/icons/hamburguer.png"
import coquetel from "../../_assets/img/icons/bebida-de-coquetel.png"
import person from "../../_assets/img/icons/person.png"
import { useNavigate } from "react-router-dom";

function Comanda_Finalizada() {

    const navigate = useNavigate()
    
    if (sessionStorage.length > 0) {

        return (
            <div className="fBody">
                <LateralMenu />
                <div className={styles.main}>
                    <div className={styles.abas}>
                        <div className={styles.aba_comida}>
                            <img src={hamburguer} alt="" />
                            <p>Comidas</p>
                        </div>
                        <div className={styles.aba_bebida}>
                        <img src={coquetel} alt="" />
                            <p>Bebidas</p>
                        </div>

                        <div className={styles.aba_outro}>
                            <p>Outro</p>
                        </div>
                    </div>
                    <div className={styles.container}>

                        <div className={styles.container_head}>

                        <p>Comidas</p>
                        <div className={styles.passagem}>
                                <div className={styles.line}></div>


                            </div>

                        <div className={styles.pessoa} >
                                <div className={styles.icon}> <img src={person} alt="" /></div>
                                <div className={styles.nome}>Larissa</div>
                        </div>

                        </div>

                        <div className={styles.container_main}>
                         <Lista_itens_comanda/>
                         <Lista_itens_comanda/>
                         <Lista_itens_comanda/>
                         <Lista_itens_comanda/>


                        </div>

                    </div>
                </div>
            </div>
        );
    }

    else {
        navigate("/login")
    }
}

export default Comanda_Finalizada;