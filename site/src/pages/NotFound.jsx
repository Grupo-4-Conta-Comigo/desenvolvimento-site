import styles from "../_assets/css/modules/notfound.module.css"

function NotFound(){
    return (
        <div className={styles.main}>
            <div className={styles.up}>
                <p>404</p>
            </div>
            <div className={styles.down}>
                <p>Opa, página não encontrada</p>
            </div>
        </div>
    );
}

export default NotFound;