import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import TestRideBanner from 'components/test-ride/TestRideBanner'
import TestRideForm from 'components/test-ride/TestRideForm'

const TestRide = () =>
  <div>
    <Head>
      <title>Test-ride: Faça um teste com nossa bike elétrica na sua cidade - Vela Bikes</title>
    </Head>
    <PaddedView>
      <TestRideBanner />
    </PaddedView>
    <TestRideForm />
  </div>

export default TestRide
