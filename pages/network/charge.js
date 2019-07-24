import Head from 'next/head'
import { compose } from 'recompose'
import Inverter from 'components/Inverter'
import Section from 'components/Section'
import Banner from 'components/charge/Banner'
import VelaPoint from 'components/charge/VelaPoint'
import HowWorks from 'components/charge/HowWorks'
import About from 'components/charge/About'
import BePartOf from 'components/charge/BePartOf'
import Features from 'components/charge/Features'
import Statistics from 'components/charge/Statistics'
import HeatMap from 'components/charge/HeatMap'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import MainHeader from 'components/MainHeader'

const ChargePage = () =>
  <Main className='charge'>
    <Head>
      <title>Vela: Rede de recarga rápida.</title>
    </Head>
    <PaddedView>
      <MainHeader title='Rede de recarga rápida' />
    </PaddedView>
    <Banner />
    <Inverter>
      <Section>
        <PaddedView>
          <VelaPoint />
        </PaddedView>
      </Section>
    </Inverter>
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
  </Main>

export default compose(
)(ChargePage)
