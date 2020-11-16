import React, {useState, useEffect} from "react";
import { compose } from "recompose";
import Head from "next/head"
import Accordion from "../components/Accordion"
import { offBlack, offWhite } from "../style/colors"
import BFImage from "../components/blackfriday/BFImage"
import QuoteImage from "../components/blackfriday/QuoteImage"
import FooterImage from "../components/blackfriday/FooterImage"
import PaddedView from '../components/PaddedView'
import SubscribeForm from "../components/blackfriday/SubscribeForm";

var countDownDate = new Date("Nov 27, 2020 15:01:00 GMT").getTime();

function pad(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const BlackFriday = () => {
    const [timer, setTimer] = useState(countDownDate - (new Date().getTime()))

    useEffect(() => {
      let id = setInterval(() => {
        setTimer(countDownDate - (new Date().getTime()));
      }, 800);
      return () => clearInterval(id);
    }, []);
  
    const days = Math.floor(timer / (1000 * 60 * 60 * 24));
    const minutes = Math.floor( (timer/1000/60) % 60 );
    const hours = Math.floor( (timer/(1000*60*60)) % 24 );
    const seconds = Math.floor( (timer/1000) % 60 );
  
  

return (
    <div className="blackfriday">
      <Head>
        <title>Black Friday 2020 - Vela Bikes</title>
      </Head>
      <div className='cover'>
        <div className='cta'>
            <h2>Aluguel com opção de compra</h2>
            <h4>27/11 das 12h01 às 23h59</h4>
        </div>
        <BFImage />
      </div>
      <div className='howitworks'>
        <h2>Como funciona?</h2>
        <div className='steps'>
            <div className='step'>
                <img src='/static/step1.png'></img>
                <h4>Monte sua Vela na Black Friday!</h4>
                <h5>Escolha a geometria do quadro, o tamanho, a cor e a cor dos pneus.</h5>
                <p>Sua nova Vela 2 será feita sob medida e entregue a partir de fevereiro de 2021.</p>
            </div>
            <div className='step'>
                <img src='/static/step2.png'></img>
                <h4>Alugue a Vela 2 por 12 meses...</h4>
                <h5>Pague apenas R$ 289 por mês e conte com o Plano Vela+ Simples!</h5>
                <p>Rastreamento GPS e proteção contra roubo e furto inclusos.</p>
            </div>
            <div className='step'>
                <img src='/static/step3.png'></img>
                <h4>Após o 1º ano, ela pode ser sua.</h4>
                <h5>Por mais R$ 2.890 em até 12x. Você paga sua Vela em um total de 24 meses.</h5>
                <p>O melhor preço e o maior tempo de parcelamento, para você velejar.</p>
            </div>
        </div>
      </div>
      <div className='timer'>
          <h4>Para a promoção começar, faltam...</h4>
          <h2>{pad(days,2)} dias {pad(hours,2)} horas {pad(minutes,2)}min e {pad(seconds,2)}s </h2>
          <SubscribeForm />
      </div>
      <div className='image-cut'>
        <QuoteImage />
        <div className='tagline'>
            <h3>“Ir ao trabalho de Vela é o ‘novo normal’ para mim.</h3>
            <h3>Estou orgulhosa por ter feito uma escolha ecológica, que prioriza minha qualidade de vida, saúde e segurança.</h3> 
            <h3>O ‘novo normal’ é isso, né? Nossas novas escolhas...”</h3>
            <h4>- Clara, Velejadora há 2 meses</h4>
        </div>
      </div>
      <PaddedView>
        <div className='section'>
            <div className='right'>
                <div className='right-content'>
                    <h2>R$ 289 por mês</h2>
                    <h4>Pacote de aluguel anual<br/> em até 12x sem juros.</h4>
                    <p>Conte com <i>manutenções/revisões</i>*, <i>rastreamento GPS</i> + <i>proteção contra roubo e furto</i> inclusos.</p>
                    <small><p>* Válido apenas em São Paulo e Curitiba.</p></small>
                </div>
                <a href="/vela2">
                    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FAluguelCompraVelaBike.jpg?alt=media&token=d51fb99e-9fb5-4b9d-8c3c-47609ff03c98' alt='Black Friday Vela Bike Aluguel' />
                </a>
            </div>
            <div className='left'>
                <a href="/vela2">
                    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FAluguelVelaBikes.jpg?alt=media&token=e35602d0-5507-4d9b-aa37-ff7d84244585' alt='Aluguel Vela Bikes' />
                </a>
                <div className='left-content'>
                    <h2>Após 12 meses...</h2>
                    <h4>Você pode comprar por mais R$ 2.890, em até 12x sem juros!</h4>
                    <p>As melhores condições de aluguel + compra da Vela 2 unidas para você.<br/> É a sua chance de participar da maior promoção na história da Vela. </p>
                </div>
            </div>
            <div className='right'>
                <div className='right-content'>
                    <h2>Dois anos para pagar!</h2>
                    <h4>Aproveite para começar o ano de 2021 descobrindo uma nova forma de se deslocar pela cidade.</h4>
                    <p>Pense agora nas escolhas que você deseja para o seu 'novo normal'. Comece a criar novos hábitos mais saudáveis para você e para todos ao seu redor. </p>
                </div>
                <a href="/vela2">
                    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2Fblackfriday%2FBlackFridayAluguelBikeEl%C3%A9trica.jpg?alt=media&token=3106791e-b0db-4ff9-a5ce-688b7c58b32b' alt='Alugar bike elétrica' />
                </a>
            </div>
        </div>
        </PaddedView>
        <div className='questions'>
            <h2>Possui dúvidas?</h2>
            <Accordion 
                title='1. Qual o período que a promoção estará ativa?'
                content='Apenas na sexta-feira de Black Friday do dia 27 de novembro das 12:01 às 23:59.'
            />
            <Accordion 
                title='2. Reservando agora, quando recebo a minha Vela 2?'
                content='As primeiras entregas do plano anual de aluguel serão realizadas em fevereiro de 2021 na ordem dos pedidos. Como a expectativa é de receber muitos pedidos nessa promoção, o prazo pode ser maior para as pessoas que fizerem os pedidos por último. Portanto seja um(a) dos(as) primeiros(as)! Durante o mês de dezembro de 2020, nossa equipe deve entrar em contato com todos e passar uma data prevista para a produção da sua Vela 2.'
            />
            <Accordion 
                title='3. O que está incluso no pacote de aluguel?'
                content='12 meses de uma unidade da Vela 2, nova em folha, na cor, tamanho e geometria da sua preferência. Todas as unidades serão entregues com o Plano Vela+ Simples ativo por 12 meses que engloba a proteção contra roubo e furto, GPS, atualizações exclusivas e muito mais. Os serviços de revisão, manutenção e substituição de peças consumíveis não serão cobrados durante o período de locação, desde que realizados pela Vela nas cidades de São Paulo ou Curitiba.'
            />
            <Accordion 
                title='4. E se eu não optar pela compra após 1 ano?'
                content='Em 30 dias antes do término do período dos 12 meses de locação, nossa equipe vai entrar em contato para verificar o interesse na compra da Vela 2, caso não haja interesse, nesse mesmo contato agendaremos a retirada da sua bicicleta, sem custo para as cidades de São Paulo e Curitiba.'
            />
            <Accordion 
                title='5. Não moro em São Paulo ou Curitiba, ainda posso participar?'
                content='Claro! A promoção será válida para todo o Brasil, porém será cobrada uma taxa de R$ 180,00 por cada trecho de transporte, como: entrega inicial, manutenções e devoluções.'
            />
        </div>
        <div className='cover'>
            <FooterImage />
            <div className='cta-bottom'>
                <div className='slogan'>
                <h2>A Black Friday é apenas o começo de um novo caminho para você em <span style={{fontSize: '1.5em', color: '#FFAF2D'}}>2021</span>.</h2>
                </div>
            </div>
        </div>
      <style jsx>{`

        @media only screen and (max-width: 320px) {
            h2 {
                font-size: 1.2em;
            }
        }
        .section {
            display: flex;
            flex-direction: column;
            padding-top: 1em;
        }
        .section h2 {
            color: #FFAF2D;
        }
        .section img {
            min-width: 100%;
            min-height: 50vh;
            max-height: 50vh;
            object-fit: cover;
        }
        .left {
            display: flex;
            flex-direction: column;
            margin: 1em 0;
        }
        .left-content {
            padding: 2em 2em 1em 2em;
            text-align: center;
        }
        .right {
            margin: 1em 0;
            display: flex;
            flex-direction: column-reverse;
        }
        .right-content {
            padding: 2em 2em 1em 2em;
            text-align: center;
        }
        .questions {
            padding: 2em;
            background-color: #1A3546;    
        }
        .cta h2 {
            color: #FFAF2D;
        }
        .questions h2 {
            color: ${offWhite};
            margin-bottom: 1em;
        }
        .cta h4 {
            color: ${offWhite};
        }
        .cover {
            position: relative;
        }
        .cta {
            position: absolute;
            bottom: 0;
            width: 100%;
            text-align: center;
        }
        .cta-bottom {
            text-align: center;
            background-color: #1A3546;
            padding: 2rem 3rem 2rem 3rem;
        }
        .cta-bottom h2 {
            color: ${offWhite};
        }
        .howitworks {
            padding: 2em;
        }
        .howitworks h2{
            color: ${offBlack};
        }
        .timer {
            background-color: #1A3546;
            padding: 3em 2em;
            text-align: center;
        }
        .timer h2 {
            color: #FFAF2D;
            font-size: 2.5em;
            line-height: 1em;
        }
        .timer h4 {
            color: ${offWhite};
        }
        .steps {
            display: flex;
            flex-direction: column;
        }
        .step {
            padding: 2em 1em;
        }
        .step h4 {
            font-size: 1.2em;
        }
        .step img {
            max-width: 12em;
            margin-bottom: 1em;
        }
        .tagline {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            padding: 2em 4em 1em 4em;
            background-color:  #1A3546;
        }
        .tagline h3 {
            color: #FFAF2D;
            font-style: italic;
        }
        .tagline h4 {
            color: ${offWhite};
        }
        @media only screen and (min-width: 768px) {
                .questions {
                    padding: 3em;
                }
                .howitworks {
                    padding: 3em 3em 2em 3em;
                }
                .steps {
                    display: flex;
                    flex-direction: row;
                }
                .step {
                    padding: 2em 3em;
                    max-width: 33%;
                }
                .section {
                    padding: 3em 2em 1em 2em;
                    flex-direction: column;
                    align-items: stretch;
                }
                .left {
                    flex-direction: row-reverse;
                    margin-bottom: 2em;
                }
                .section img {
                    max-width: 32em;
                    min-width: 28em;
                    max-height: 25em;
                    min-height: 25em;
                    object-fit: cover;
                }
                .section p, .section h4 {
                    width: 16em;
                }
                .right {
                    flex-direction: row-reverse;
                    align-self: start;
                }
                .left-content {
                    padding: 3em 4em 2em 2em;
                    text-align: right;
                }
                .right-content {
                    padding: 3em 2em 2em 4em;
                    text-align: left;
                }
                .cta-bottom {
                    position: absolute;
                    justify-content: center;
                    left: 2em;
                    bottom: 2em;
                    text-align: left;
                    background-color: transparent;
                    margin-top: 0rem;
                    padding: 2em;
                    width: 30vw;
                }
                .tagline {
                    justify-content: flex-start;
                    align-items: flex-start;
                    bottom: 2em;
                    left: 2em;
                    text-align: left;
                    position: absolute;
                    max-width: 24em;
                    background-color: transparent;
                }
                .tagline h3{
                    color: ${offWhite};
                    font-style: italic;
                }
                .tagline h4{
                    color: ${offWhite};
                }
                .image-cut {
                    position: relative;
                }
                .timer h2 {
                    font-size: 3.5em;
                }
                .timer h4 {
                    font-size: 1.4em;
                }
        }
      `}</style>
    </div>
  )
}

export default compose()(BlackFriday)