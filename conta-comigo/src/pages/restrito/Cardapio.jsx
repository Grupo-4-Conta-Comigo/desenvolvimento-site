import Menu from "../../components/Lateral_menu"
import styles from "../../_assets/css/modules/core modules/cardapio.module.css";
import Lista_itens from "../../components/Listas/Lista_itens";
import { useEffect, useState } from "react";
import api from "../../config/api";
import Swal from "sweetalert2";
import add from "../../_assets/img/icons/mais.png"


function Cardapio() {

    const [itens, setItens] = useState([])

    const [cadastroAberto, setCadastroAberto] = useState(false);

    const [nomeIpt, setNome] = useState();
    const [categoriaIpt, setCategoria] = useState('comida');
    const [precoIpt, setPreco] = useState();

    const changePreco = (event) => {
        setPreco(event.target.value);
    };

    const changeNome = (event) => {
        setNome(event.target.value);
    };

    function cadastrarItem() {
        if (!nomeIpt) {
            Swal.fire({
                icon: 'error',
                title: 'Campos vazios!',
                text: 'Insira todos os campos e tente novamente'
            })
        } else {
            if (precoIpt % precoIpt === 0) {


                api.post("/produtos/criar/" + sessionStorage.userId, {
                    nome: nomeIpt,
                    categoria: categoriaIpt,
                    preco: precoIpt
                })
                    .then((response) => {
                        console.log("RESPONSE: ", response)
                        Swal.fire(
                            'Item cadastrado!',
                            '',
                            'success'
                        ).then((value) => {
                            getItens();
                            setCadastroAberto(false)
                        })
                    }).catch((err) => {
                        console.log(err.response.data.errors[0].defaultMessage)
                    })




            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Valor inválido!',
                    text: 'Insira um preço válido'
                })
            }
        }
    }

    function getItens() {
        api.get("/produtos/todos/" + sessionStorage.userId)
            .then((response) => {
                console.log("RESPONSE: ", response)
                console.log("PEDIDOS: ", response.data)
                setItens(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })

    }

    useEffect(() => {
        getItens()
    }, []);


    return (
        <div className={styles.fBody}>
            <Menu />
            <div className={cadastroAberto ? styles.cadastrarItem : "btn_d"}>
                <div className={styles.popup}>
                    <div className={styles.header_popup}>
                        <div className={styles.line}></div>
                        <div className={styles.titulo}>Cadastrar novo item ao cardápio</div>
                    </div>

                    <div className={styles.inputs}>
                        <select name="format" id="format">
                            <option selected disabled>Categoria</option>
                            <option value="comida">Comida</option>
                            <option value="bebida">Bebida</option>
                            <option value="outro">Outro</option>
                        </select>

                        <input type="text" placeholder="Nome do item:" onChange={changeNome} />

                        <input type="number" placeholder="Preço" step="0.01" min="0.01" onChange={changePreco} />
                    </div>

                    <button onClick={cadastrarItem}>Cadastrar</button>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.containerHead}>
                        <div className={styles.titulo}>Itens
                            <div className={styles.line}></div></div>
                        <div className={styles.cadastrar} onClick={() => { setCadastroAberto(true) }}>
                            {/* <button onClick={getItens}> teste</button> */}

                            <div className={styles.valor}>Adicionar produto</div>
                            <button className={styles.add_cliente}>
                                <img src={add} alt="" />
                            </button>
                        </div>
                    </div>

                    <div className={styles.filtro}>
                        <div className={itens ? styles.radioGroup : "btn_d"}>
                            <div><input type="radio" value="Male" name="gender" color="red" /> Comida</div>
                            <div><input type="radio" value="Male" name="gender" /> Bebida</div>
                            <div><input type="radio" value="Male" name="gender" /> Outro</div>
                        </div>
                    </div>

                    <div className={styles.tabela}>
                        <table>
                            <tr className={itens ? "" : "btn_d"}>
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

                            {
                                itens ? (
                                    itens.map((item) => {
                                        // console.log("TESTANDO: " + item.nome);
                                        return (
                                            <Lista_itens item={item} key={item.id} />
                                        )
                                    })
                                ) : <div className={styles.msg}>Não há itens cadastrados</div>

                            }

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Cardapio;