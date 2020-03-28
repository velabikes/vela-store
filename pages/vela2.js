import Head from 'next/head'
import Display from '../components/vela2/Display'
import Bar from '../components/vela2/Bar'
import Configure from '../components/vela2/Configure'

const Vela2 = () =>
  <div className='vela2'>
    <Head>
      <title>Vela 2 - Vela Bikes</title>
    </Head>
    <Display />
    <Configure />
    <Bar />
  </div>
export default Vela2
