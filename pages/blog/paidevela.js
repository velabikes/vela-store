import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import Grid from 'components/Grid'

const post = [
  {
    title: '#PAIDEVELA',
    tagline: 'Bruno vê o futuro com uma maior cultura de ciclismo para seus filhos',
    date: 'Quarta-feira, 14 de agosto de 2019',
    image: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/85a5d446-ae08-421c-9991-05d3f8775f7b.jpg',
    content: `<p>Levei um tempo até adquirir minha Vela, quando decidi a Lavínia tinha um ano mais ou menos. Então, quando comprei, foi com a cadeirinha, pensando nela, pensando que eu iria ter mais filhos. Agora, com os dois, por enquanto, a bicicleta é muito mais lazer. Eu vou aos domingos na Paulista, eles adoram, acabo indo mais com ela que é maior, mas o Dante foi pela primeira vez semana passada também.</p>
    <p>Pra mim é tranquilo, ir ao trabalho de Vela, com os dois quero inserir com o tempo. No começo eu sentia um pouco de receio, é diferente andar de bike elétrica, ela é mais rápida e você tem que aprender a controlar a velocidade. Hoje, consigo imaginar eu os levando para escola de bike, é perto de casa e vamos ganhando mais confiança, né? Quando estou andando com eles, principalmente, sempre rola um cuidado e um respeito maior no trânsito. De certa forma, até uma admiração, as pessoas olham e ficam “Que legal, ele está andando com o filho de bicicleta”.</p>
    <p>Nos últimos 5 ou 6 anos, São Paulo vem criando uma consciência maior, que está bem longe de ser a ideal, mas foi uma mudança rápida. Com a constante ampliação das redes sociais, as pessoas acabam discutindo mais questões e a bicicleta como meio de transporte é uma delas.</p>
    <p>Como ciclista, se a gente quer respeito, nós temos que ser os mais conscientes no trânsito e propagar isso. A consciência tem que existir de todos os lados, mas quem tá de bike tem que conhecer seu espaço, tem que mostrar respeito e os benefícios para as pessoas no geral. Quem não respeita, furando faróis ou passando por pedestres, queima o filme de todos os ciclistas.</p>
    <p>Como pai, quando eles crescerem, sei que vão crescer em um meio totalmente diferente. Eu digo que a evolução vai ser rápida porque mesmo tendo demorado para essa consciência começar a ser criada, em pouco tempo, ela já é muito maior. Estamos bem longe ainda das cidades com a cultura de ciclismo, mas estamos no caminho certo. O sonho seria ter ciclofaixas espalhadas pela cidade inteira, antes vem as ciclofaixas, depois vem a consciência.</p>
    <p>Bruno Bianchini <a href="https://instagram.com/brunobcsb">@brunobcsb</a> - Pai, publicitário e Velejador </p>`
  }
]

const BlogPostPaideVela = () =>
  <PaddedView>
    <Main>
      <Head>
        <title>Blog - Vela Bikes</title>
      </Head>
      <MainHeader
        title={post[0].title}
        tagline={<div>
          <div>{post[0].tagline}</div>
          <div><small>{post[0].date}</small></div>
        </div>}
      />
    </Main>
    
    <Grid template="1fr 1fr">
      <div className='PostImage'>
        <img src={post[0].image}/>
      </div>
      <div className="SectionBody" dangerouslySetInnerHTML={{ __html: post[0].content}} />
    </Grid>

    <style jsx>{`
        .SectionBody {
        margin-bottom: 3em;
      }
    `}</style>
  </PaddedView>
  
export default BlogPostPaideVela
