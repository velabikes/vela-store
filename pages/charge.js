import Head from 'next/head'
import { compose } from 'recompose'
import Banner from '../components/charge/Banner'
import VelaPoint from '../components/charge/VelaPoint'
import HowWorks from '../components/charge/HowWorks'
import About from '../components/charge/About'
import Statistics from '../components/charge/Statistics'
import HeatMap from '../components/charge/HeatMap'
import Features from '../components/charge/Features'

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
    <Statistics />
    <HeatMap />
    <Features />

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
