import celular from "../_assets/img/celular.png"
import person from "../_assets/img/icons/person.png"
import personWhite from "../_assets/img/icons/personWhite.png"
import setaDireita from "../_assets/img/icons/setaDireita.png"
import comida from "../_assets/img/icons/comida.png"
import bebida from "../_assets/img/icons/bebida-de-coquetel.png"
import logotipo from "../_assets/img/logo-logotipo/logotipo.png"
import "../_assets/css/index.css"
import "../_assets/css/menu.css"
import { useState } from "react"
import reload from "../_assets/img/icons/refresh.png"



function Index() {
    const [iniciado, setIniciado] = useState(false);
    const [divisiaoIniciada, setDivisaoIniciada] = useState(false)
    const [dividido, setDividido] = useState(false)
    const [divididoIg, setDivididoIg] = useState(false)
    const [divididoCons, setDivididoCons] = useState(false)

    function simular(){
        setIniciado(true);
    }

    function abrirDivisao(){
        setDivisaoIniciada(true);
        setIniciado(false);
    }

    function dividirIgualmente(){
        setDivididoIg(true);
        setDividido(true);
        setDivisaoIniciada(false)
    }

    function dividirCons(){
        setDivididoCons(true);
        setDividido(true);
        setDivisaoIniciada(false)

    }

    function limpar(){
        setDividido(false);
        setDivididoCons(false);
        setDivididoIg(false);
        setIniciado(false);
    }



    return (
        <div>
            <header>
                <div className="box">
                    <div className="logo">
                        <img src={logotipo} />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#banner">Home</a></li>
                            <li><a href="#container">Plataforma</a></li>
                            <li><a href="#simulador">Simulador</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="auth">
                    <a href="login"><div className="login-btn">Login</div></a>
                    <a href="cadastro"><div className="cadastro-btn">Se cadastrar</div></a>
                </div>
            </header>
            <br />
            <br />
            <br />
            <div className="banner" id="banner">
                <div className="left-side">
                    <h1>Seus clientes decidiram
                        <span>
                            <div className="line"></div>
                            dividir a conta?
                        </span>
                    </h1>
                    <p>Torne esse processo mais rápido e libere a mesa para os próximos</p>
                    <div className="btn">Fazer simulação</div>
                </div>
                <div className="right-side">
                    <div className="phone">
                        <img src={celular} />
                    </div>
                    <div className="details">
                        <div className="abs">
                            <div className="client">
                                <div className="profile">
                                    <img src={person} alt="" />
                                </div>
                                <div className="nome">Felipe</div>
                                <div className="valor">R$125,00</div>
                                <div className="seta">
                                    <img src={setaDireita} alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="client">
                            <div className="profile-ju">
                                <img src={person} alt="" />
                            </div>
                            <div className="nome">Juliana</div>
                            <div className="valor">R$44,00</div>
                            <div className="seta">
                                <img src={setaDireita} alt="" />

                            </div>
                        </div>

                        <br />

                        <div className="consum">
                            <div className="picture">
                                <img src={comida} alt="" /></div>
                            <div className="descricao">Porção batata frita</div>
                            <div className="preco">R$35,00</div>
                        </div>

                        <div className="consum">
                            <div className="picture">
                                <img src={bebida} alt="" /></div>
                            <div className="descricao">Suco de laranja</div>
                            <div className="preco">R$9,00</div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <div className="container" id="container">
                <div className="card">
                    <div className="card-head">
                        <div className="line1"></div>
                        <div className="titulo">Divisão de contas</div>
                    </div>
                    <div className="descricao">Divida a conta  do grupo de clientes que desejam rachar juntos</div>
                </div>

                <div className="card">
                    <div className="card-head">
                        <div className="line2"></div>
                        <div className="titulo">Monitoramento de pedidos</div>
                    </div>
                    <div className="descricao">Monitore a lista de pedidos em tempo real</div>
                </div>

                <div className="card">
                    <div className="card-head">
                        <div className="line3"></div>
                        <div className="titulo">Integração com pix</div>
                    </div>
                    <div className="descricao">Gere um QR code para pagamento via pix</div>
                </div>
            </div>

            <div className="simulador" id="simulador">
                <div className="left-side">
                    <h1>Temos uma mesa com 4 clientes</h1>
                    <p>Os clientes da mesa 5 terminaram de jantar e te chamaram para o fechamento da conta</p>
                    <p className="bot">Eles querem dividir a conta pelo o que cada um consumiu</p>
                </div>
                <div className="right-side">
                    <div className="txt">Aperte em “Iniciar” e <b>simule</b> uma divisão de conta</div>

                    <div className="mesa-off">
                        <div className="mesa">
                            <div className="top">
                                <div className="profile cor1">
                                    <img src={person} alt="" />
                                </div>
                                <div className={dividido ? "nome_valor_d" : "nome_valor" && iniciado ? "nome_valor" : "nome_valor_d" && divisiaoIniciada ? "nome_valor" : "nome_valor_d"}>Juliana <div className="dinheiro">R$70,00</div>
                                </div>

                                <div className={dividido ? "valorPagar" : "btn_d"}>Juliana irá pagar <p>{divididoIg ? "R$68,25" : "R$70,00"}</p></div>
                            </div>
                            <div className="mid">
                                <div className="profile cor2">
                                    <img src={personWhite} alt="" />
                                </div>

                                    <div className={dividido ? "nome_valor_d" : "nome_valor vic" && iniciado ? "nome_valor vic" : "nome_valor_d" && divisiaoIniciada ? "nome_valor vic" : "nome_valor_d"}>Victor <div className="dinheiro">R$ 60,00</div></div>
                                    <div className={dividido ? "valorPagar vict" : "btn_d"}>Victor irá pagar <p>{divididoIg ? "R$68,25" : "R$60,00"}</p></div>
                                    <img onClick={limpar} className={dividido ? "reload" : "btn_d"} src={reload} alt="" />
                                <div className={dividido ? "btn_d" : "btn" && iniciado ? "btn_d" : "btn" && divisiaoIniciada ? "btn_d" : "btn"} onClick={simular}>Iniciar</div>
                                <div className={iniciado ? "main_one" : "btn_d"}>
                                <div className="dindin">R$273,00</div>
                                <div onClick={abrirDivisao} className={iniciado ? "btn_dividir" : "btn_d"}>Dividir a conta</div>
                                </div>

                                

                               <div className={divisiaoIniciada ? "botoes" : "btn_d"}>
                               <div onClick={dividirIgualmente} className="btn_dividir">Dividir igualmente</div>
                                <p className="ou">ou</p>
                                <div onClick={dividirCons} className="btn_consumo">Dividir por consumo</div>
                               </div>

                                <div className={dividido ? "nome_valor_d" : "nome_valor mar" && iniciado ? "nome_valor mar" : "nome_valor_d mar" && divisiaoIniciada ? "nome_valor mar" : "nome_valor_d"}>Maria <div className="dinheiro">R$ 33,00</div></div>
                                <div className={dividido ? "valorPagar mari" : "btn_d"}>Maria irá pagar <p>{divididoIg ? "R$68,25" : "R$33,00"}</p></div>

                                <div className="profile cor3">
                                    <img src={person} alt="" />
                                </div>
                            </div>
                            <div className="bot">
                                <div className={dividido ? "nome_valor_d" : "nome_valor gab" && iniciado ? "nome_valor gab" : "nome_valor_d gab" && divisiaoIniciada ? "nome_valor gab" : "nome_valor_d"}>Gabriel <div className="dinheiro">R$ 50,00</div></div>
                                <div className={dividido ? "valorPagar gabr" : "btn_d"}>Gabriel irá pagar <p>{divididoIg ? "R$68,25" : "R$50,00"}</p></div>
                                <div className="profile cor4">
                                    <img src={person} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="left-side">
                    <div className="logo">
                        <img src={logotipo} alt="" />
                    </div>
                    <div className="titulo">
                        Vai querer deixar seus clientes passarem por estresse ao dividir a conta?
                    </div>
                    <div className="texto">
                        Cadastre-se na nossa plataforma e tenha acesso a todas as ferramentar de divisão de conta, monitoramento de pedidos e mais...
                    </div>
                    <div className="menu-ft">
                        <span>HOME</span>
                        <span>PLATAFORMA</span>
                        <span>SIMULADOR</span>
                    </div>
                    <div className="arr">@2023 All rights reserved</div>
                </div>
                <div className="right-side">
                    <div className="titulo">Contate a gente!</div>
                    <div className="desc">Mande uma dúvida ou sugestão...</div>
                    <div className="form">
                        <p>Assunto:</p>
                        <input type="text" />
                        <p>Mensagem:</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <br />
                        <button>Enviar</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Index;