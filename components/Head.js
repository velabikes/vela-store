import Head from 'next/head'
import { velaGreen, darkGray, offWhite } from '../style/colors'

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
        color: #3e5052;
        background-color: ${offWhite}
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: neue-haas-grotesk-display, sans;
        text-transform: uppercase;
      }
      h1, h2, h3 {
        font-style: italic;
        font-weight: 900;
        color: ${velaGreen};
      }
      h4, h5, h6 {
        font-weight: 600;
        margin: .5em 0;
        color: ${darkGray};
      }
      div {
        box-sizing: border-box;
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
      input:not([type='checkbox']) {
        border: 0;
        border-bottom: 1px solid ${velaGreen};
        border-radius: 0;
        display: block;
        font-size: 1rem;
      }
      button {
        padding: 1em;
        //border-radius: 10px;
        background-color: ${velaGreen};
        color: white;
        border: 0px solid transparent;
        font-family: neue-haas-grotesk-display, sans;
        font-weight: 900;
        font-style: italic;
        text-transform: uppercase;
        font-size: 1em;
        cursor: pointer;
      }
    `}</style>
  </>

export default CustomHead
