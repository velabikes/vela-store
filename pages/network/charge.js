import Head from 'next/head'
import { compose } from 'recompose'
import Banner from 'components/charge/Banner'
import VelaPoint from 'components/charge/VelaPoint'
import HowWorks from 'components/charge/HowWorks'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'

const ChargePage = () =>
  <>
    <Banner />
    <Main className='charge'>
      <Head>
        <title>Recarga Rápida - Vela Bikes</title>
      </Head>
      <PaddedView>
        <VelaPoint />
      </PaddedView>
      <PaddedView>
        <HowWorks />
      </PaddedView>
    </Main>
  </>
export default compose(
)(ChargePage)
