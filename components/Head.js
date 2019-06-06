import Head from 'next/head'
import { velaGreen, velaBlue, offBlack, offWhite, lightGray } from '../style/colors'

const CustomHead = props =>
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='https://use.typekit.net/sho3jmj.css' />
      <link rel='icon' type='image/png' sizes='32x32' href='/static/fav/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='96x96' href='/static/fav/favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/static/fav/favicon-16x16.png' />
      <link rel='icon' type='image/x-icon' href='/static/fav/favicon.ico' />
      <meta name='theme-color' content='#ffffff' />
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
        font-family: neue-haas-grotesk-display, sans-serif;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: neue-haas-grotesk-display, sans-serif;
        margin: 0.61em 0;
      }
  	  h1 {
        font-size: 1.75rem;
      }
      h1, h2, h3 {
        font-weight: 800;
        color: ${velaGreen};
        text-transform: uppercase;
        font-style: italic;
      }
      h1:first-child,
      h2:first-child,
      h3:first-child {
        margin-top: 0;
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
        font-family: neue-haas-grotesk-text, sans-serif;
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
        font-family: neue-haas-grotesk-text, sans-serif;
      }
      table {
        width: 100%;
        border-spacing: 0 .372em;
      }

      // FORMS

      fieldset {
        margin-bottom: 1em;
        padding: 0;
        border: none;
      }
      legend {
        margin-bottom: 0.61em;
      }
      label {
        font-weight: 600;
        color: ${offBlack}
      }
      input:not([type='checkbox']):not([type='radio']) {
        width: 100%;
        border: 0;
        padding: 10px;	        
        margin-bottom: 0.61em;
        margin-top: 0.61em;
        border-radius: 5px;
        display: block;
        font-size: 1rem;
        font-family: neue-haas-grotesk-display, sans-serif;
        box-sizing: border-box;
        background: ${lightGray};
        box-shadow: 0 2px 3px rgba(0,0,0,0.05), 0 2px 3px rgba(0,0,0,0.05);
      }
      input[type='radio'] {
        margin: 0.61em;
      }

      // PAGE TRANSITION

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
