import PropTypes from "prop-types";
import { getPrismic, Predicates } from "lib/prismic";
import Head from "next/head";
import PaddedView from "components/PaddedView";
import Main from "components/Main";
import Grid from "components/Grid";
import Card from "components/Card";
import { NextIcon } from "components/Icons";
import PostHighlight from "components/blog/PostHighlight";
import Link from "next/link";
import { offWhite, velaGreen } from "../../style/colors";

const Blog = ({ posts, highlight }) => (
  <div className="blog" style={{ background: `${offWhite}` }}>
    <PostHighlight post={highlight} />
    <PaddedView>
      <Main>
        <Head>
          <title>Blog - Vela Bikes</title>
          <link
            rel="alternate"
            hrefLang="pt-br"
            href="https://velabikes.com.br/blog"
          />
          <meta httpEquiv="content-language" content="pt-br" />
          <meta name="application-name" content="Vela Bikes Store" />
          <meta
            name="description"
            content="Saiba mais sobre o mundo das bicicletas elétricas e descubra todos os motivos para ir de Vela."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@velabikes" />
          <meta name="twitter:title" content="Blog - Vela  Bikes" />
          <meta
            name="twitter:description"
            content="Saiba mais sobre o mundo das bicicletas elétricas e descubra todos os motivos para ir de Vela."
          />
          <meta
            name="twitter:image"
            content="https://images.prismic.io/velabikes/3b2541d4-3894-48fa-8f84-76c3d064daa0_e03.jpg?auto=compress,format&rect=0,0,1333,889&w=3000&h=2000"
          />
          <meta property="og:url" content="https://velabikes.com.br/blog" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Blog - Vela  Bikes" />
          <meta property="og:locale" content="pt_BR" />
          <meta
            property="og:description"
            content="Saiba mais sobre o mundo das bicicletas elétricas e descubra todos os motivos para ir de Vela."
          />
          <meta
            property="og:image"
            content="https://images.prismic.io/velabikes/3b2541d4-3894-48fa-8f84-76c3d064daa0_e03.jpg?auto=compress,format&rect=0,0,1333,889&w=3000&h=2000"
          />
          <meta
            name="facebook-domain-verification"
            content="nbpc6vpjkbfrcrdtbxxdksupxy3l3b"
          />
        </Head>
        <section>
          <br />
          <Grid template="repeat(auto-fit, minmax(320px, 1fr))">
            {posts.map(({ data: { cover, title, teaser }, uid }) => (
              <Card
                key={uid}
                media={
                  <Link href={`/blog/${uid}`}>
                    <img src={cover.url} alt={cover.alt} />
                  </Link>
                }
              >
                <Link href={`/blog/${uid}`}>
                  <div>
                    <h3>{title[0].text}</h3>
                    <p>{teaser[0].text}</p>
                    <br />
                    <div className="actions">
                      <a>
                        Ler mais <NextIcon fill={velaGreen} />
                      </a>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </Grid>
        </section>
      </Main>
      <style jsx>{`
        .actions {
          position: relative;
          bottom: 24px;
          right: 24px;
          display: flex;
        }
        img {
          cursor: pointer;
        }
      `}</style>
    </PaddedView>
  </div>
);

Blog.getInitialProps = async ({ req }) => {
  const api = await getPrismic(req);
  const { results } = await api.query(
    Predicates.at("document.type", "blog_post"),
    { pageSize: 16, orderings: "[my.blog_post.post_date desc]" }
  );
  const posts = results.slice();
  posts.shift();
  return { posts: posts, highlight: results[0] };
};

Blog.propTypes = {
  highlight: PropTypes.object,
  posts: PropTypes.Array,
};

export default Blog;
