import Head from 'next/head'
import { velaGreen, velaBlue, darkGray, offWhite } from '../style/colors'

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
      small {
        //font-size: 0.4em;
        color: #707070;
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
      table {
        width: 100%;
      }
      label {
        font-weight: 600;
        display: block;
      }
      input:not([type='checkbox']) {
        border: 0;
        border-bottom: 1px solid ${velaGreen};
        border-radius: 0;
        display: block;
        font-size: 1rem;
      }
      button {
        padding: .5em .8em;
        border-radius: 5px;
        background-color: ${velaGreen};
        color: white;
        border: 0px solid transparent;
        font-family: neue-haas-grotesk-display, sans;
        font-weight: 900;
        font-style: italic;
        text-transform: uppercase;
        font-size: 1.25rem;
        cursor: pointer;
        transition: .4s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      button:disabled {
        opacity: 0.7;
        filter: saturate(0%);
      }
      button:active {
        box-shadow: 0px 0px 18px -7px ${velaBlue}
      }
      .page-transition-enter {
        opacity: 0;
      }
      .page-transition-enter-active {
        opacity: 1;
        transition: opacity 300ms;
      }
      .page-transition-exit {
        opacity: 1;
      }
      .page-transition-exit-active {
        opacity: 0;
        transition: opacity 300ms;
      }
    `}</style>
  </>

export default CustomHead
