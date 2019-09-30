import Head from 'next/head'
import PaddedView from 'components/PaddedView'
import TestRideBanner from 'components/test-ride/TestRideBanner'
import TestRideForm from 'components/test-ride/TestRideForm'

const TestRide = () =>
  <div>
    <Head>
      <title>TestRide - Vela Bikes</title>
    </Head>
    <PaddedView>
      <TestRideBanner />
    </PaddedView>
    <div className='divider'>
      <PaddedView>
        <TestRideForm />
      </PaddedView>
    </div>
    <style jsx>{`
      .divider {
        background: rgba(231,232,232,1);
        background: -moz-linear-gradient(left, rgba(231,232,232,1) 0%, rgba(231,232,232,1) 50%, rgba(66,79,82,1) 50%, rgba(66,79,82,1) 100%);
        background: -webkit-gradient(left top, right top, color-stop(0%, rgba(231,232,232,1)), color-stop(50%, rgba(231,232,232,1)), color-stop(50%, rgba(66,79,82,1)), color-stop(100%, rgba(66,79,82,1)));
        background: -webkit-linear-gradient(left, rgba(231,232,232,1) 0%, rgba(231,232,232,1) 50%, rgba(66,79,82,1) 50%, rgba(66,79,82,1) 100%);
        background: -o-linear-gradient(left, rgba(231,232,232,1) 0%, rgba(231,232,232,1) 50%, rgba(66,79,82,1) 50%, rgba(66,79,82,1) 100%);
        background: -ms-linear-gradient(left, rgba(231,232,232,1) 0%, rgba(231,232,232,1) 50%, rgba(66,79,82,1) 50%, rgba(66,79,82,1) 100%);
        background: linear-gradient(to right, rgba(231,232,232,1) 0%, rgba(231,232,232,1) 50%, rgba(66,79,82,1) 50%, rgba(66,79,82,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e7e8e8', endColorstr='#424f52', GradientType=1 );
      }
    `}</style>
  </div>

export default TestRide
