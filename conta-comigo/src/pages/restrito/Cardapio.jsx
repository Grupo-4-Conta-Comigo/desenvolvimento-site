import Menu from "../../components/Lateral_menu"
import styles from "../../_assets/css/modules/cardapio.module.css";
import Lista_itens from "../../components/Lista_itens";

function Cardapio() {
    return (
        <div className={styles.fBody}>
            <Menu />
            <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.containerHead}>
                    <div className={styles.titulo}>Itens</div>
                    <div className={styles.cadastrar}>
                        <p>Cadastrar novo item</p>
                        <div className={styles.btnMais}>
                            <p>+</p>
                        </div>
                    </div>
                </div>

                <div className={styles.filtro}>
                <div className={styles.radioGroup}>
                <div><input type="radio" value="Male" name="gender" color="red" /> Comida</div>
                <div><input type="radio" value="Male" name="gender" /> Bebida</div>
                <div><input type="radio" value="Male" name="gender" /> Outro</div>
                </div>
                </div>

                <div className={styles.tabela}>
                <table>
                    <tr>
                        <th className={styles.id}>ID</th>
                        <th className={styles.espaco}>{/* espaço */}</th>
                        <th className={styles.nome}>Nome</th>
                        <th className={styles.espaco}>{/* espaço */}</th>
                        <th className={styles.preco}>Preço</th>
                        <th className={styles.espaco}>{/* espaço */}</th>
                        <th className={styles.apagarEditar}></th>
                        <th className={styles.apagarEditar}></th>
                    </tr>

                    {/* dados */}

                    <Lista_itens />
                    <Lista_itens />
                    <Lista_itens />
                    <Lista_itens />
                    <Lista_itens />
                    <Lista_itens />
                    <Lista_itens />
                    <Lista_itens />
                    <Lista_itens />


                    
                </table>
                </div>
                </div>
            </div>
        </div>
    );
}


export default Cardapio;