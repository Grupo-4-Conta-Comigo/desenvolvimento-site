import LateralMenu from "../../components/Lateral_menu";
import styles from "../../_assets/css/modules/divisao modules/divisao_pers.module.css"
import voltar from "../../_assets/img/icons/setaVoltar.png"
import Card from "../../components/Card";
import ReactCardCarousel from 'react-card-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useEffect, useState } from "react";
import api from "../../config/api";
import food from "../../_assets/img/icons/hamburguer.png"
import mais from "../../_assets/img/icons/mais.png"
import ListaCardPessoas from "../../components/Listas/Lista_Card_Pessoas";
import Swal from "sweetalert2"
import ListaPessoasOption from "../../components/Listas/Lista_Pessoas_Option";



// function irPedidos() {
//     window.location.href = "http://localhost:3000/pedidos";
// }


function Divisao_personalizada() {

    const [item, setItens] = useState([])
    const [clientes, setClientes] = useState([])


    function getItens() {
        api.get("itens-comanda/todos/pedido/" + sessionStorage.pedidoAtual)
            .then((response) => {
                setItens(response.data)
                console.log(response.data)
                const i = 0;
                // while(i <= )
            }).catch((err) => {
                if (err.response.status === 404) {
                    console.log("Este endpoint não existe")
                } else {
                    console.error(err)
                }
            })
    }

    function getClientes() {
        api.get("comandas/todas/" + sessionStorage.pedidoAtual)
            .then((response) => {
                setClientes(response.data)
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
        getItens()
        getClientes()
    }, []);


    if (sessionStorage.length > 0) {

        // var infoAtv = 'infoAtv';
        return (

            <div className="fBody">
                <link rel="stylesheet" href="../../_assets/css/modules/divisao_pers.module.css"></link>
                <script src="../../_assets/js/carrossel.js"></script>
                <LateralMenu />
                <div className={styles.main}>
                    <div className={"voltar"}>
                        <img src={voltar} alt="" />
                        <p>voltar</p>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.container_head}>
                            <p>Divisão personalizada</p>
                            <div className={styles.passagem}>
                                <div className={styles.line}></div>
                            </div>

                        </div>
                        <div className={styles.container_right}>
                            <div className={styles.valor}>Valor total: </div>
                            <div className={styles.total}>R$150,00</div>
                        </div>
                        <div className={styles.container_main}>


                            <div className={styles.carrossel}>
                                <div className={styles.cards}>
                                    <ReactCardCarousel autoplay={false} autoplay_speed={2500} spread="medium" >
                                        {
                                            item ? (
                                                item.map((item) => {
                                                    return (
                                                        <Card item={item}/>
                                                    )
                                                })) : ""
                                        }
                                    </ReactCardCarousel>


                                    {/* <Carousel >
                                        <Card />
                                        <Card />
                                    </Carousel> */}


                                    {/* <AliceCarousel mouseTracking items={items} />
                                     */}


                                </div>
                            </div>

                            {/* <div class="wrapper" className={styles.wrapper}>
                        <i id="left" className="fa-solid fa-angle-left"></i>
                        <ul   className={styles.carousel}>
                                <li  className={styles.card}>
                              <Card/>
                                </li>
                                <li  className={styles.card}>
                              <Card/>
                                   
                                </li>
                                <li className={styles.card}>
                              <Card/>
                                    
                                </li>
                                <li  className={styles.card}>
                              <Card/>
                                
                                </li>
                              
                            </ul>
                            <i id="right" className="fa-solid fa-angle-right"></i>
                        </div>	 */}


                            {/* <div className={styles.cards}>
                                <Card />
                                <Card />
                                <Card />
                                <Card />
                            </div> */}

                        </div>

                        <div className={styles.buttons}>
                            <button className={styles.btnSingular}>Voltar</button>
                            <button >Pagar</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    else {
        window.location.href = "http://localhost:3000/login";
    }
}

export default Divisao_personalizada;