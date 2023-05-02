import bot from "../_assets/img/icons/bot.png"
import styles from "../_assets/css/modules/bot.module.css"

function Bot(){
    return(
        <div className={styles.main}>
            <img src={bot} alt="" />
        </div>
    );
}

export default Bot;