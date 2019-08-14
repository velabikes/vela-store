import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'

const BlogPostPaidevela = () =>
  <PaddedView>
    <Main>
      <Head>
        <title>Blog - Vela Bikes</title>
      </Head>
      <MainHeader
        title='#PAIDEVELA'
      />
    </Main>
  </PaddedView>

export default BlogPostPaidevela
