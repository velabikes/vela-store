import Head from 'next/head'
import Display from '../components/vela2/Display'
import Bar from '../components/vela2/Bar'

const Vela2 = () =>
  <div className='vela2'>
    <Head>
      <title>Vela 2 - Vela Bikes</title>
    </Head>
    <Display />
    <Bar />
  </div>
export default Vela2
