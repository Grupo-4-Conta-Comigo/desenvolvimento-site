import bot from "../../_assets/img/icons/bot.png"
import styles from "../../_assets/css/modules/bot.module.css"
import pling from "../../_assets/sound/pling.mp3"

function Bot(){
    const audio = new Audio()
    audio.src = pling
    return(
        <div className={styles.main} onClick={()=>{audio.play()}}>
            <img src={bot} alt="" />
        </div>
    );
}

export default Bot;