import { useState } from 'react'
import PaddedView from '../components/PaddedView'
import Main from '../components/Main'
import Head from '../components/Head'
import TermsOfRent6 from '../components/legal/TermsOfRent6'
import TabRent from '../components/legal/TabRent'
import TermsOfRent12 from '../components/legal/TermsOfRent12'

const TermsOfRentPage = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <Head>
        <title>Termos do Pacote de Aluguel - Vela Bikes</title>
      </Head>
      <Main className='legal'>
        <PaddedView>
          <h1>Termos do Pacote de Aluguel</h1>
          <TabRent step={step} onStep={setStep}>
            <TermsOfRent12 />
            <TermsOfRent6 />
          </TabRent>
        </PaddedView>
      </Main>
    </>
  )
}

export default TermsOfRentPage