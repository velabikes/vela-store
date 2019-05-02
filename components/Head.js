import Head from 'next/head'
import { velaGreen } from '../style/colors'

const CustomHead = props =>
  <>
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
        font-family: neue-haas-grotesk-text, sans;
        width: 100%;
      }
      h1, h2, h3, h4, h5 {
        font-family: neue-haas-grotesk-display, sans;
        font-weight: 900;
        font-style: italic;
        color: ${velaGreen}
      }
      a, a:visited {
        color: ${velaGreen};
        text-decoration: none;
        cursor: pointer;
      }
      img {
        vertical-align: middle;
        width: 100%;
      }
    `}</style>
  </>

export default CustomHead
