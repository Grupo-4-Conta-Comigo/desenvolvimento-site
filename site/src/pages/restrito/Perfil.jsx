import Menu from "../../components/Lateral_menu"
import styles from "../../_assets/css/modules/core modules/perfil.module.css"
import cadeado from "../../_assets/img/icons/cadeado.png"
import add from "../../_assets/img/icons/mais.png"
import seta from "../../_assets/img/icons/setaDireita.png"
import { useNavigate } from "react-router-dom";
import api from "../../config/api"
import { useEffect, useState } from "react"
import download from "../../_assets/img/icons/download.png"
import importar from "../../_assets/img/icons/importar.png"
import Swal from "sweetalert2"





function Perfil() {
    const navigate = useNavigate()
    const [relatorio, setRelatorio] = useState()

    const [restaurante, setRestaurante] = useState()

    function getRestaurante() {
        api.get("/restaurantes/" + sessionStorage.userId)
            .then((response) => {
                console.log(response.data)
                setRestaurante(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })
    }

    function baixarRelatorio() {
        api.get("/arquivos-pagamento/exportar-relatorio/" + sessionStorage.userId,
            {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/plain'
                }
            })
            .then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'relatorio.txt'); //or any other extension
                document.body.appendChild(link);
                link.click();
                console.log(response.data)
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })
    }



    useEffect(() => {
        getRestaurante()
    }, []);

    // const [popup, setPopup] = useState(false)

    return (
        <div className="fBody">
            <Menu />
            {/* <div className="botSuporte">
                <Bot />
            </div> */}
            <div className={styles.main}>
                <div className={styles.container}>
                    {/* <button onClick={() => {
                        api.get("/arquivos-pagamento/exportar-relatorio/" + sessionStorage.userId)
                            .then((response) => {
                                console.log(response)
                                setRelatorio(response.data)
                            }).catch((err) => {
                                if (err.response.status === 404) {
                                    console.log("Este endpoint não existe")
                                } else {
                                    console.error(err)
                                }
                            })
                    }}>gerar</button> */}
                    <div className={styles.up}>
                        <div className={styles.card}>
                            <div className={styles.lineRed}></div>
                            <div className={styles.card_main}>
                                <div className={styles.card_header}>
                                    <div className={styles.card_titulo}>Detalhes restaurante</div>

                                </div>
                                <div className={styles.card_dados}>
                                    <p><b>Nome: </b>{restaurante ? restaurante.nome : "nome"}</p>
                                    <p><b>CNPJ: </b>{restaurante ? restaurante.registro : "cnpj"}</p>
                                </div>
                            </div>

                        </div>
                        <div className={styles.card}>
                            <div className={styles.lineYellow}></div>
                            <div className={styles.card_main}>
                                <div className={styles.card_header}>
                                    <div className={styles.card_titulo}>Credenciais</div>
                                    <div className={styles.card_editar}></div>
                                </div>
                                <div className={styles.card_dados}>
                                    <p><b>Email: </b>{restaurante ? restaurante.email : "email"}</p>
                                    <p><b>Senha: </b>********</p>
                                </div>
                            </div>
                            <div className={styles.btn}>


                            </div>
                        </div>
                    </div>
                    <div className={styles.mid}>
                        <div className={styles.card}>
                            <div className={styles.lineBlack}></div>
                            <div className={styles.cadeado}>
                                <img src={cadeado} alt="" />
                            </div>
                            <div className={styles.leftSide}>
                                <div className={styles.titulo}>Níveis de Acesso</div>
                                <p>Você - Administrador</p>
                            </div>
                            <div onClick={() => { navigate("/funcionarios") }} className={styles.rightSide}>
                                <div className={styles.add_func}>
                                    <div className={styles.valor}>Adicionar novo</div>
                                    <button className={styles.add_cliente}>
                                        <img src={add} alt="" />
                                    </button>
                                </div>

                                <div className={styles.listar}>Ver lista de acesso
                                    <img src={seta} alt="" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.up}>
                        <div className={styles.card}>
                            <div className={styles.lineGreen}></div>
                            <div className={styles.card_main}>
                                <div className={styles.card_header}>
                                    <div className={styles.card_titulo}>Dados Transacionais</div>
                                    <p>Cadastre aqui sua chave PIX</p>
                                </div>
                                <div className={styles.card_dados}>
                                    <div className={styles.cadastrar} onClick={()=>{navigate("/CadastrarPix")}}>

                                        <div className={styles.chave}>Adicionar chave PIX</div>
                                        <button className={styles.add_pix}>
                                            <img src={add} alt="" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.card}>
                            <div className={styles.lineGreen}></div>
                            <div className={styles.card_main}>
                                <div className={styles.card_header}>
                                    <div className={styles.card_titulo}>Relatório</div>

                                </div>
                                <div className={styles.card_dados2}>
                                    <div className={styles.baixar} onClick={baixarRelatorio}>
                                        <p>Baixar Relatório</p>
                                        <img src={download} />
                                    </div>
                                    <div className={styles.importacao} onClick={
                                        async () => {
                                            const { value: file } = await Swal.fire({
                                                title: "Select image",
                                                input: "file",
                                                inputAttributes: {
                                                    accept: "*",
                                                    "aria-label": "Adicione o certificado",
                                                },
                                            });

                                            if (file) {
                                                let data = new FormData();
                                                data.append("arquivoTxt", file);
                                                api.post(
                                                    `/arquivos-pagamento/ler-arquivo/${sessionStorage.userId}`,
                                                    data,
                                                    {
                                                        headers: {
                                                            "Content-Type": "multipart/form-data",
                                                        },
                                                    }
                                                )
                                                .then((response) => {
                                                    console.log("RESPONSE: ", response);
                                                    Swal.fire("Documento adicionado!", "", "success");
                                                    // getPedidos();
                                                })
                                                .catch((err) => {
                                                    console.log("TINHA QUE ENTRAR AQUI");
                                                    console.log(err);
                                                });
                                            }
                                        }
                                    }>
                                        <p>Importar Relatório</p>
                                        <img src={importar} />
                                    </div>


                                </div>
                            </div>
                            <div className={styles.btn}>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil;