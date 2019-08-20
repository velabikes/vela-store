import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'
import Grid from 'components/Grid'

const post = {
  paidevela: {
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
}

const post = {
  velanashimano19: {
    title: 'De bicicleta elétrica na Shimano Fest 2019 #vadevela',
    tagline: 'A Vela vai participar da Shimano Fest e você é nosso convidado especial',
    date: 'Terça-feira, 20 de agosto de 2019',
    image: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/b78ef600-f60c-45d7-b39a-7abdf7d363d9.jpg',
    content: `<p>A décima edição do evento vai rolar essa semana, no Memorial da América Latina em São Paulo. A Shimano acontece anualmente, reúne milhares de amantes de bicicletas e tem a intenção de levar o mundo do ciclismo para mais pessoas. São dois dias, 22 e 23 de agosto, dedicados ao mercado de bicicletas e os outros dois, 24 e 25, abertos ao público geral.</p>
    <p>Convidamos todos: Velejadores, ciclistas e curiosos a conhecer o stand da Vela (nº 124) e acompanhar a gente nesse encontro incrível. Durante a feira, apresentaremos nossos modelos de bikes elétricas, além de contar mais sobre nossa história, valores e o que vem por aí!</p>
    <p>A melhor parte é: você poderá realizar um test-ride com a Vela no cenário único do Memorial da América Latina e ainda concorrer a um GRUDI! Aproveite a programação e se encante ainda mais com o mundo das bicicletas. Vá na Shimano Fest 2019 e #vadevela</p>
    <p><b>Horários:</b><br>
    Quinta à sábado (22, 23 e 24/08) - 10h às 20h<br>
    Domingo (25/08) - 10h às 17h
    </p>
    <p><b>Horários de test-ride:</b><br>
    Quinta e sexta (22 e 23/08) - 10h às 17h30<br>
    Sábado (24/08) - 12h30 às 15h e das 16h30 às 17h30<br>
    Domingo (25/08) - 10h às 16h
    </p>
    <p>O stand da Vela fica no Lado A - Área Lojas (Cinza) e o local de testes no Lado A - Área Test-ride (Roxo). Confira o <a href="http://shimanofest.com.br/mapa/">mapa</a> da Shimano Fest 2019.</p>`
  }
}

const BlogPostPage = ({postContent}) =>
  <PaddedView>
    <Main>
      <Head>
        <title>Blog - Vela Bikes</title>
      </Head>
      <MainHeader
        title={postContent.title}
        tagline={<div>
          <div>{postContent.tagline}</div>
          <div><small>{postContent.date}</small></div>
        </div>}
      />
    </Main>
    
    <Grid template="1fr 1fr">
      <div className='PostImage'>
        <img src={postContent.image}/>
      </div>
      <div className="SectionBody" dangerouslySetInnerHTML={{ __html: postContent.content}} />
    </Grid>

    <style jsx>{`
        .SectionBody {
        margin-bottom: 3em;
      }
    `}</style>
  </PaddedView>
  
  BlogPostPage.getInitialProps = ({ query }) => {
    const { slug } = query  
    const postContent = post[slug]  
    
    return { postContent }
   }

export default BlogPostPage
