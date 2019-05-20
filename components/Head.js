import Head from 'next/head'
import { velaGreen, velaBlue, offBlack, offWhite, lightGray } from '../style/colors'

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
        width: 100%;
        color: ${offBlack};
        background-color: ${offWhite};
        font-family: neue-haas-grotesk-display, sans;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: neue-haas-grotesk-display, sans;
        margin: 0.61em 0;
        font-style: italic;
      }
      h1, h2, h3 {
        font-weight: 800;
        color: ${velaGreen};
        text-transform: uppercase;
      }
      h1:first-child,
      h2:first-child,
      h3:first-child {
        margin-top: 0;
      }
      h4 ~ h1,
      h5 ~ h2,
      h6 ~ h3 {
        margin-bottom: 0;
      }
      h4, h5, h6 {
        font-weight: 500;
        color: ${offBlack};
      }
      hr {
        margin: 1.61rem 0;
        border: 1px solid #e2e2e2;
      }
      div {
        box-sizing: border-box;
      }
      small {
        font-size: 0.8rem;
        color: #777;
      }
      a, a:visited {
        color: ${velaGreen};
        text-decoration: none;
        cursor: pointer;
      }
      p {
        line-height: 1.37em;
        font-family: neue-haas-grotesk-text, sans;
      }
      p:last-child {
        margin-bottom: 0
      }
      img {
        vertical-align: middle;
        width: 100%;
      }
      ul {
        padding-left: 1.61em;
      }
      li {
        line-height: 1.37em;
        color: ${offBlack};
        margin: 0.37em;
        font-family: neue-haas-grotesk-text, sans;
      }
      table {
        width: 100%;
        border-spacing: 0 .372em;
      }
      label {
        font-weight: 600;
        color: ${offBlack}
      }
      label + input:not([type='checkbox']),
      input:not([type='checkbox']) + label,
      input:not([type='checkbox']) + button {
        margin-top: 0.61em;
        display: block;
      }
      input:not([type='checkbox']) {
        width: 100%;
        border: 0;
        border-bottom: 1px solid ${velaGreen};
        border-radius: 0;
        display: block;
        font-size: 1rem;
        font-family: neue-haas-grotesk-display, sans;
      }
      button {
        padding: .61em 1em;
        border-radius: 5px;
        background-color: ${velaBlue};
        color: white;
        border: 0px solid transparent;
        font-family: neue-haas-grotesk-display, sans;
        font-size: 1em;
        cursor: pointer;
        transition: .4s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
        text-transform: uppercase;
        font-style: italic;
        font-weight: 700;
        margin: 0;
      }
      button:disabled {
        opacity: 0.7;
        filter: saturate(0%);
        pointer-events: none;
        transform: translate3d(0,0,0)
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
