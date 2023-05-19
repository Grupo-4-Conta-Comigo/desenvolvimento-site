import bot from "../../_assets/img/icons/bot.png"
import styles from "../../_assets/css/modules/bot.module.css"
import pling from "../../_assets/sound/pling.mp3"
import { useState } from "react"

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

            </div>
        </div>
    );
}

export default Bot;