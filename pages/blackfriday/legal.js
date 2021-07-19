import PaddedView from '../../components/PaddedView'
import Main from '../../components/Main'
import Head from '../../components/Head'
import TermsOfRentBlackFriday from '../../components/blackfriday/TermsOfRentBlackFriday'

const TermsOfRentBF = () => {
  return (
    <>
      <Head>
        <title>Termos de Aluguel 12 Meses - Vela Bikes</title>
      </Head>
      <Main className='legal'>
        <PaddedView>
          <h1>Condições especiais exclusivas da Black Friday 2020</h1>
            <TermsOfRentBlackFriday />
        </PaddedView>
      </Main>
    </>
  )
}

export default TermsOfRentBF