import Head from 'next/head'
import { compose, lifecycle } from 'recompose'
import { velaGreen, offBlack, darkGray, offWhite, white } from 'style/colors'
import FacebookPixel from 'components/head/FacebookPixel'
import Freshchat from 'components/head/Freshchat'
import Heatmap from 'components/head/Heatmap'

const CustomHead = props =>
  <>
    <Head>
      <script dangerouslySetInnerHTML={{ __html: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K9555FS');" }} />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' />
      <meta charSet='utf-8' />
      <link rel='stylesheet' href='https://use.typekit.net/sho3jmj.css' />
      <link rel='icon' type='image/png' sizes='32x32' href='/static/fav/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='96x96' href='/static/fav/favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/static/fav/favicon-16x16.png' />
      <link rel='icon' type='image/x-icon' href='/static/fav/favicon.ico' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
    <FacebookPixel />
    <Freshchat />
    <Heatmap />
    <style jsx global>{`
      body * {
        //outline: 1px solid rgba(200,0,0,0.1)
      }
      html, body {
        margin: 0;
        padding: 0;
        position: relative;
        width: 100%;
        color: ${offBlack};
        background-color: ${offWhite};
        font-family: neue-haas-grotesk-text, sans-serif;
      }
      h1, h2, h3, h4, h5, h6 {
        font-family: neue-haas-grotesk-display, sans-serif;
        margin-top: 0;
        margin-bottom: .5rem;
      }
      h1, h2, h3 {
        font-weight: 900;
        color: ${velaGreen};
        text-transform: uppercase;
        font-style: italic;
        line-height: 1.25em;
      }
      h4, h5, h6 {
        font-weight: 500;
        color: ${offBlack};
        text-transform: none;
        font-style: normal;
        line-height: 1.5em;
        margin-bottom: 1.5rem;
      }
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 1.75rem;
      }
      h3 {
        font-size: 1.5rem;
      }
      h4 {
        font-size: 1.25rem;
      }
      h5 {
        font-size: 1rem;
      }
      section h1, nav h1 {
        font-size: 2rem;
      }
      hr {
        margin: 1.3rem 0;
        border: 1px solid #e2e2e2;
      }
      div {
        box-sizing: border-box;
      }
      small {
        font-size: 0.8em;
        color: ${darkGray};
      }
      a, a:visited {
        color: ${velaGreen};
        text-decoration: none;
        cursor: pointer;
      }
      p {
        line-height: 1.5em;
        font-family: neue-haas-grotesk-text, sans-serif;
        margin-top: 0;
        margin-bottom: .8em;
      }
      img {
        vertical-align: middle;
        width: 100%;
      }
      ul {
        padding-left: 1.5em;
      }
      li {
        line-height: 1.5em;
        color: ${offBlack};
        margin: 0.37em;
        font-family: neue-haas-grotesk-text, sans-serif;
      }
      table {
        width: 100%;
        border-spacing: 0 .372em;
      }
      table tr td:last-child {
        text-align: right;
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
        background: ${white};
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

export default compose(
  lifecycle({
    componentDidMount() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }
  })
)(CustomHead)
