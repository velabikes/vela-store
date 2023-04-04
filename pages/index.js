import Head from "next/head";
import { getPrismic, Predicates } from "lib/prismic";
import PropTypes from "prop-types";
import HomeVideo from "components/home/HomeVideo";
import HomeBanner from "components/home/HomeBanner";
import Highlight from "components/home/Highlight";
import PostHighlight from "components/blog/PostHighlight";
import PaddedView from "components/PaddedView";
import Button from "../components/Button";
import VelaPoint from "../components/charge/VelaPoint";
import {
  midGray,
  offBlack,
  offWhite,
  velaBlue,
  velaGreen,
  velaRed,
  white,
} from "../style/colors";
import HomeImage from "../components/home/HomeImage";

const HomePage = ({ highlight }) => (
  <div className="HomePage">
    <Head>
      <script
        id="mcjs"
        dangerouslySetInnerHTML={{
          __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,“script”,“https://chimpstatic.com/mcjs-connected/js/users/68a0cce7cc109d78a8b44d7a0/ceccec399fdedf3f455913279.js”);`,
        }}
      />
      <script
        async={1}
        src="https://chimpstatic.com/mcjs-connected/js/users/68a0cce7cc109d78a8b44d7a0/ceccec399fdedf3f455913279.js"
      />
      <meta httpEquiv="content-language" content="pt-br" />
      <meta name="application-name" content="Vela Bikes Store" />
      <meta
        name="description"
        content="Uma bicicleta elétrica & smart para quem busca eficiência, qualidade de vida e deslocamentos mais ágeis, sem abrir mão do estilo."
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@velabikes" />
      <meta
        name="twitter:title"
        content="Vela 2: A bicicleta elétrica smart do Brasil - Vela Bikes"
      />
      <meta
        name="twitter:description"
        content="Uma bicicleta elétrica & smart para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes, sem abrir mão do estilo."
      />
      <meta
        name="twitter:image"
        content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBike-Eletrica-Smart-Vela-Bikes.jpg?alt=media&token=83330a4b-06f4-4931-8b4f-e8afbff476c9"
      />
      <meta property="og:url" content="https://velabikes.com.br" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Vela Bikes: bicicletas elétricas brasileiras."
      />
      <meta property="og:locale" content="pt_BR" />
      <meta
        property="og:description"
        content="Uma bicicleta elétrica & smart para quem busca eficiência, qualidade de vida e deslocamentos menos estressantes, sem abrir mão do estilo."
      />
      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FBike-Eletrica-Smart-Vela-Bikes.jpg?alt=media&token=83330a4b-06f4-4931-8b4f-e8afbff476c9"
      />
    </Head>
    <div className="cover">
      <HomeImage />
      <div className="cta-bf">
        <div className="slogan">
          <h1>
            Bicicletas <br></br> Elétricas<br></br> Brasileiras.
          </h1>
          <a href="/vela">
            <Button primary>Conheça</Button>
          </a>
        </div>
      </div>
    </div>
    <div className="cover">
      <HomeVideo />
      <div className="cta">
        <div className="slogan">
          <h2>
            Feita com cuidado.
            <br /> No Brasil.
          </h2>
          <h5>
            Nascida na capital paulista, a Vela desenvolve e produz bicicletas
            elétricas para cidades mais saudáveis desde 2012.
          </h5>

          <a href="/vela">
            <Button primary>Saiba mais</Button>
          </a>
        </div>
      </div>
    </div>
    <Highlight />
    <br />
    <PaddedView style={{ backgroundColor: offWhite }}>
      {/* {images && <HomeAlbum images={images} />} */}
      <PostHighlight post={highlight} />
      <HomeBanner />
    </PaddedView>
    <PaddedView style={{ backgroundColor: offWhite }}>
      <VelaPoint />
    </PaddedView>
    <style jsx>{`
      .HomePage {
        background-color: ${offWhite};
      }
      .cover {
        position: relative;
        background-color: ${offWhite};
        width: 100%;
      }
      .cta-bf {
        text-align: center;
        padding: 1rem 3rem 2rem 3rem;
        background-color: ${offWhite};
      }
      .cta-bf h3 {
        color: ${offWhite};
      }
      .cta-bf h5 {
        color: ${offBlack};
      }
      .cta-bf h4 {
        color: ${offWhite};
      }
      .cta {
        text-align: center;
        padding: 2rem 3rem 2rem 3rem;
        background-color: ${white};
      }
      .cta h2 {
        color: ${velaGreen};
      }
      .cta h3,
      .cta h4,
      .cta small,
      .cta p {
        color: ${offWhite};
      }
      h1 {
        font-size: 1.8rem;
        color: ${offBlack};
      }
      h2 {
        color: ${offBlack};
      }
      h4 {
        color: ${offWhite};
      }
      .home-store {
        background-color: ${offWhite};
        display: flex;
        justify-content: center;
        margin-bottom: 3em;
      }
      .store-title {
        background-color: ${offWhite};
        padding: 1em 2em 0.5em 2em;
        margin-bottom: -2em;
      }
      .cta :global(button),
      .cta-bf :global(button) {
        margin: 1em 0em 1em 0;
      }
      @media only screen and (min-width: 768px) {
        .cover {
          display: flex;
          justify-content: center;
        }
        h1 {
          color: ${offWhite};
          font-size: 2rem;
          font-weight: 700;
        }
        .cta h3,
        .cta h2,
        .cta small,
        .cta h4,
        .cta p {
          color: ${offBlack};
        }
        .cta h2 {
          font-size: 2rem;
        }
        .cta-bf h3,
        .cta-bf h4,
        .cta-bf p {
          color: ${offWhite};
        }
        .cta {
          position: absolute;
          justify-content: center;
          max-width: 23em;
          left: 2em;
          top: 19em;
          text-align: left;
          background-color: ${offWhite};
          padding: 2em;
          z-index: 2;
        }
        .cta-bf {
          position: absolute;
          justify-content: right;
          max-width: 25em;
          padding-top: 2.5em;
          text-align: right;
          top: 4em;
          right: 4em;
          background-color: rgba(25, 25, 25, 0.8);

          z-index: 2;
        }
        @media only screen and (min-width: 1300px) {
          .cta {
            left: 4em;
            top: 4em;
          }
        }
      }
    `}</style>
  </div>
);

HomePage.propTypes = {
  highlight: PropTypes.object,
};

HomePage.getInitialProps = async ({ req }) => {
  const api = await getPrismic(req);
  const { results } = await api.query(
    Predicates.at("document.type", "blog_post"),
    { pageSize: 30, orderings: "[my.blog_post.post_date desc]" }
  );

  return { highlight: results[0] };
};

/* HomePage.getInitialProps = async ({ req }) => {
  try {
    const baseUrl = req
      ? process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : `https://${req.headers.host}`
      : ''
    const response = await fetch(`${baseUrl}/api/instagram`)
    const data = await response.json()

    return { images: data }
  } catch (error) {
    console.log('error', error)

    return { images: [], from: 'error' }
  }
} */

export default HomePage;
