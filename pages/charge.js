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
import PaddedView from '../components/PaddedView'
import { offBlack } from '../style/colors'
import Player from '../components/charge/Player'

const ChargePage = () =>
  <div className='charge'>
    <Head>
      <title>Vela: Rede de recarga rápida.</title>
    </Head>
    <PaddedView>
      <h1 className='title'>Rede de recarga rápida</h1>
    </PaddedView>
    <Banner />
    <div style={{ background: offBlack }}>
      <PaddedView>
        <VelaPoint />
      </PaddedView>
    </div>
    <PaddedView>
      <HowWorks />
    </PaddedView>
    <About />
    <PaddedView>
      <BePartOf />
      <Features />
    </PaddedView>
    <Statistics />
    <HeatMap />

    <style jsx>{`
      .title {
        //padding: 4rem 2rem;
      }
      @media only screen and (min-width: 768px) {
        .title {
          //padding: 4rem;
        }
      }
    `}</style>
  </div>

export default compose(
)(ChargePage)
