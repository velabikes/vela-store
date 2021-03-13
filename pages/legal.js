import { useState } from 'react'
import PaddedView from '../components/PaddedView'
import Main from '../components/Main'
import Head from '../components/Head'
import Tab from '../components/legal/Tab'
import TermsOfService from '../components/legal/TermsOfService'
import TermsOfRent from '../components/legal/TermsOfRent'
import TermsOfVelaPlus from '../components/legal/TermsOfVelaPlus'
import PrivacyPolicy from '../components/legal/PrivacyPolicy'
import ShippingPolicy from '../components/legal/ShippingPolicy'
import Returns from '../components/legal/Returns'
import Warranty from '../components/legal/Warranty'

const LegalPage = () => {
  const [step, setStep] = useState(1);
  return (
    <>
      <Head>
        <title>Informações Legais - Vela Bikes</title>
      </Head>
      <Main className='legal'>
        <PaddedView>
          <h1>Informações Legais</h1>
          <Tab step={step} onStep={setStep}>
            <TermsOfService />
            <ShippingPolicy />
            <Returns />
            <Warranty />
            <PrivacyPolicy />
            <TermsOfRent />
            <TermsOfVelaPlus />
          </Tab>
        </PaddedView>
      </Main>
    </>
  )
}

export default LegalPage