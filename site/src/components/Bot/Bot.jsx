import bot from "../../_assets/img/icons/bot.png"
import styles from "../../_assets/css/modules/bot.module.css"
import pling from "../../_assets/sound/pling.mp3"
import setaBranco from "../../_assets/img/icons/setVoltarBranco.png"
import { useState } from "react"
import Mensagem_bot from "../Mensagem_bot"

function Bot(){
    const [botAberto, setBotAberto] = useState(false)
    const audio = new Audio()
    audio.src = pling

    function abrirBot(){
        audio.play();
        setBotAberto(true)
    }
    return(
        <div className={botAberto? styles.botOpen : styles.main} onClick={abrirBot}>
            <img className={botAberto? "btn_d" : ""} src={bot} alt="" />
            <div className={botAberto? styles.botHeader : "btn_d"}>
                <div className={styles.voltar}>
                    <img src={setaBranco} alt="" />
                </div>
                <div className={styles.iconBot}>
                    <img src={bot} alt="" />
                </div>
                <div className={styles.nome}>ContaComigo bot</div>
            </div>

            <div className={styles.mensagens}>
                <Mensagem_bot />
            </div>
        </div>
    );
}

export default Bot;