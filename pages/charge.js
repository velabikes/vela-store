import Head from 'next/head'
import { compose } from 'recompose'
import Banner from '../components/charge/Banner'
import VelaPoint from '../components/charge/VelaPoint'
import HowWorks from '../components/charge/HowWorks'
import About from '../components/charge/About'
import BePartOf from '../components/charge/BePartOf'
import Features from '../components/charge/Features'
import Statistics from '../components/charge/Statistics'
import HeatMap from '../components/charge/HeatMap'

const ChargePage = () =>
  <div className='charge'>
    <Head>
      <title>Vela: Rede de recarga rápida.</title>
    </Head>

    <h1 className='title'>Rede de recarga rápida</h1>
    <Banner />
    <VelaPoint />
    <HowWorks />
    <About />
    <BePartOf />
    <Features />
    <Statistics />
    <HeatMap />

    <style jsx>{`
      .title {
        padding: 4rem 2rem;
      }
      @media only screen and (min-width: 768px) {
        .title {
          padding: 4rem;
        }
      }
    `}</style>
  </div>

export default compose(
)(ChargePage)
