import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/core modules/suporte.module.css"
function Suporte() {
    return (
        <div className="fBody">
            <LateralMenu />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.container_head}>Ajuda, dúvida ou sugestão?
                        <div className={styles.line}></div></div>

                    <iframe width='560' height='580'
                        src='https://app.pipefy.com/public/form/oIG9s064?embedded=true'
                        frameborder='0'
                    />
                </div>
            </div>
        </div>
    );
}
export default Suporte