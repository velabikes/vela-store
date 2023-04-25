import Head from "next/head";
import Link from "next/link";
import LandingImage from "components/vela/LandingImage vx";
import Button from "../components/Button";
import PaddedView from "../components/PaddedView";
import {
  offWhite,
  darkGray,
  offBlack,
  white,
  lightGray,
} from "../style/colors";
import { Assist, Boost } from "../components/Icons";

const Vela = () => (
  <div className="HomePage">
    <Head>
      <title>Vela X - Em Breve.</title>
      <meta httpEquiv="content-language" content="pt-br" />
      <link
        rel="alternate"
        hrefLang="pt-br"
        href="https://velabikes.com.br/velax"
      />
      <meta name="application-name" content="Vela Bikes Store" />
      <meta name="description" content="Conheça a Vela X." />
      <meta property="og:url" content="https://velabikes.com.br/velax" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Vela X" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:description" content="Conheça a Vela X." />
      <meta property="og:image" content="/images/vxdt.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@velabikes" />
      <meta name="twitter:title" content="Vela X" />
      <meta name="twitter:description" content="Conheça a Vela X." />
      <meta name="twitter:image" content="/images/vxdt.png" />
    </Head>
    <div className="cover">
      <LandingImage />
      <div className="cta">
        <div className="slogan">
          <h1>VX</h1>
          <h3>Em breve.</h3>
        </div>
      </div>
    </div>
    <style jsx>{`
      .cover {
        position: relative;
      }
      .cta {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
      }
      .slogan h1 {
        font-size: 6em;
        font-weight: 900;
        color: ${offBlack};
        line-height: 1em;
        margin-left: 0em;
      }
      .slogan h3 {
        color: ${offBlack};
        margin-left: 0em;
      }
      .slogan {
        max-width: 13em;
        text-align: center
      }
      .slogan h4 {
        color: ${offBlack};
        padding-bottom: 0em;
      }
      .section {
        display: flex;
        flex-direction: column;
        padding-top: 1em;
      }

      .section img {
        height: 35vh;
        object-fit: cover;
      }
      .left {
        display: flex;
        flex-direction: column;
        margin: 1em 0;
      }
      .left-content {
        padding: 2em 2em 1em 2em;
        text-align: center;
      }
      .right {
        margin: 1em 0;
        display: flex;
        flex-direction: column-reverse;
      }
      .right-content {
        padding: 2em 2em 1em 2em;
        text-align: center;
      }
      .image-cut {
        width: 100%;
        overflow: hidden;
      }
      .image-cut img {
        height: 45vh;
        object-fit: cover;
        max-width: 100%;
        object-position: 50% 50%;
      }
      .tagline {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        padding: 2em 4em 3em 4em;
      }
      .tagline h2 {
        margin-bottom: 1em;
        color: ${offBlack};          
      }
      .app-content{
        background-color: ${offWhite};
      }
      .app-content .section {
        padding: 0em;
      }
      .app-content .section .right .right-content{
        padding: 1em 2em;
        margin: 0;
      }
      .app-features {
        display: flex;
        flex-direction: row;
        justify-content: center;
      }
      .bfunction-content {
        background-color: ${offWhite};
        max-width: 45em;
        padding: 3em 0 0 0;
        margin: 1em auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .bfunction-content h4{
        max-width: 15em;
        text-align: center;
      }
      .bfunctions {
        display: flex;
        flex-direction: column;
        padding: 0em 2em 1em 2em;
        justify-content: center;
      }
      .bfunctions h3{
        color: ${offBlack};
      }
      .bleft, .bright, .bcenter {
        padding: 2em;
        text-align: center;
        max-width: 15em;
      }
      .plans {
        background-color: ${offWhite};
        display: flex;
        padding: 3em 0em 0em 0em;
        justify-content: center;
        text-align: center;
        flex-direction: column;
      }
      .plans h4 {
        max-width: 16em;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
      }
      .plans-content {
        display: flex;
        flex-direction: column;
      }
      .basic {
        padding: 2em;
        background-color: ${white};
        display: flex;
        flex-direction: column;
      }
      .free {
        padding: 2em;
        background-color: ${lightGray};
        display: flex;
        flex-direction: column;
      }
      .full {
        padding: 2em;
        background-color: ${offBlack};
        display: flex;
        flex-direction: column;
      }
      .plans-price {
        margin-top: auto;
      }
      .specs {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .specs-tech-content h2 {
        color: ${offWhite}
      }
      .specs img {
        max-width: 100%;
        height: 45vh;
        object-fit: cover;
      }
      .specs-content {
        background-color: ${white};
        text-align: left;
        align-self: center;
        display: flex;
        padding: 1em 0.5em 0 0.5em;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
      .specs-tech-content {
        background-color: ${offBlack};
        text-align: left;
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 2em 0.5em 0 0.5em;
      }
      .table-specs {
        border-collapse: collapse;
        margin: 2em 0;
        font-size: 1em;
      }
    
      .th-specs {
        background: ${lightGray};
        text-align: left;
        color: ${offBlack};
      }
    
      .th-specs, .td-specs {
        padding: 1em;
        font-size: 1em;
        color: ${offBlack};
      }
    
      .tr-specs:nth-child(even) {
        background: ${white};
      }
    
      table {
        border-collapse: collapse;
        margin: 1em 0;
        font-size: 1em;
      }

      .specs-tech-content h2, .specs-content h2 {
        margin: 0 1em;
      }
    
      th {
        background: ${darkGray};
        text-align: left;
        color: ${offWhite};
      }
      table tr td:last-child {
        text-align: left;
      }
      td {
        padding: 1em;
        font-size: 1em;
        color: ${offWhite};
        text-align: left;
        width: 90%;
      }

      tr {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-tart;
        padding: 1em;
      }
    
      tr:nth-child(even) {
        background: ${offBlack};
      }
      .specs-content table tr td:first-child {
        font-weight: 500;
      }
      .specs-tech-content table tr td:first-child {
        font-weight: 500;
      }
      .actions :global(button) {
        margin: 1em 0 0 0;
      }
      @media only screen and (min-width: 768px) {
        .slogan h1 {
          font-size: 8em;
          font-weight: 900;
          marging-left: 1em;
          color: ${darkGray};

        }
      .slogan h3 {
        color: ${darkGray};
        margin-left: 0em;
      }
        .cta {
          position: absolute;
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
          right: 4em;
          top: 4em;
          padding: 1em 2em 2em 2em;
          background-color: transparent;
        }
        .cta .actions {
          margin-top: 0em;
          align-self: flex-end;
         }
        .slogan {
          background-color: transparent;
          padding: 0;
          max-width: 12em;
          text-align: right;
          text-color: ${offWhite};
        }
        .cta .slogan h4 {
          padding: 0;
        }
        .section {
          flex-direction: column;
          align-items: center;
          padding: 0;
        }
        .left {
          flex-direction: row-reverse;
          margin-top: 1em;
          margin-bottom: 1em;
        }
        .section img {
          width: 22em;
          height: 22em;
          object-fit: cover;
        }
        .section p, .section h4 {
          width: 16em;
        }
        .right {
          flex-direction: row-reverse;
        }
        .left-content {
          padding: 3em 4em 2em 2em;
          text-align: right;
          display: flex; 
          flex-direction: column;
          align-items: flex-end;
        }
        .right-content {
          padding: 3em 2em 2em 4em;
          text-align: left;
        }
        .image-cut img {
          width: 100%;
          height: 100vh;
          object-fit: cover;
        }
        .image-cut {
          position: relative;
        }
        .tagline {
          justify-content: flex-start;
          align-items: flex-start;
          top: 4em;
          left: 4em;
          text-align: left;
          position: absolute;
          max-width: 23em;
          padding: 2em;
          background-color: ${white};
        }
        .tagline h2 {
          margin-bottom: 1em;
          color: ${offBlack};          
        }
        .tagline h4 {
          font-weight: 500;
          color: ${offBlack};    
        }
        .app-img {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
        }
        .app-content img {
          max-width: 40em;
          position: relative;
          margin: -6em 0 -6em 0;
        }
        .app-content .section {
          align-items: flex-start;
        }
        .app-bottom {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: flex-end;
        }
        .app-features {
          flex-direction: column;
        }
        .app-content .section .right .right-content{
          padding: 2em 0 2em 1em;
          margin: 0;
        }
        .app-content .section .left .left-content{
          padding: 2em 1em 0 1em; 
          margin: 0;
        }
        .bfunctions {
          flex-direction: row;
          padding: 2em
          justify-content: space-between;
          margin-top: 2em;
        }
        .plans {
          padding: 3em 4em 4em 4em;
        }
        .plans-content {
          flex-direction: column;
          margin-top: 2em;
        }
        .basic, .free, .full {
          padding: 4em;
        }
        .specs {
          margin: 0 auto 0 auto;
        }
        .specs img {
          height: 50vh;
          object-fit: contain;
          background-color: #D5D5D5;
          padding: 2em 0;
        }
        .specs-content, .specs-tech-content {
          width: 100%;
          padding: 4em;
        }
        table, .table-specs {
          width: 100%;
          margin: 0 auto;
        }
        tr {
          flex-direction: row;
        }
        .specs-content table tr td:first-child {
          width: 25%;
        }
        .specs-content table tr td:last-child {
          width: 75%;
        }
        .specs-tech-content table tr td:first-child {
          width: 25%;
        }
        .specs-tech-content table tr td:last-child {
          width: 75%;
        }
        @media only screen and (min-width: 1200px) {
          .section {
            padding-top: 2em;
            align-items: stretch;
          }
          .right {
            align-self: start;
          }
          .bfunction-content {
            margin-top: 3em;
          }
          .section img {
            width: 32em;
            height: 25em;
          }
          .app-content img {
            max-width: 50em;
            position: relative;
            margin: -12em 0 -12em 0;
          }
          .plans-content{
            flex-direction: row;
            justify-content: space-between;
          }
          .basic {
            margin: 0 2em;
            padding: 2em;
          }
          .full, .free {
            padding: 2em;
          }
          .specs img {
            height: 80vh;
          }
          
          @media only screen and (min-width: 1800px) {
            table, .table-specs {
              width: 75%;
              margin: 0 auto;
            }
          }
        }
      }
    `}</style>
  </div>
);

export default Vela;
