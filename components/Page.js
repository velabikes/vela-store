import Head from 'next/head'
import PropTypes from 'prop-types'
import { velaGreen } from '../style/colors'

const Page = props =>
  <div {...props}>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='https://use.typekit.net/sho3jmj.css' />
    </Head>
    <style jsx global>{`
      html, body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        position: relative;
        font-family: neue-haas-grotesk-text, serif;
        width: 100%;
      }
      a, a:visited {
        color: ${velaGreen}
      }
      img {
        max-width: 100%;
      }
    `}</style>
    { props.children }
  </div>

Page.propTypes = {
  children: PropTypes.node.isRequired
}

export default Page
