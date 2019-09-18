import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import Main from 'components/Main'
import TestRideBanner from 'components/test-ride/TestRideBanner'
import TestRideForm from 'components/test-ride/TestRideForm'

const TestRide = () =>
  <PaddedView>
    <Main>
      <Head>
        <title>TestRide - Vela Bikes</title>
      </Head>
      <TestRideBanner />
      <TestRideForm />
    </Main>
  </PaddedView>

export default TestRide
