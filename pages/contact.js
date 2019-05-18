import PaddedView from '../components/PaddedView'
import Map from '../components/Map'

const Stores = () =>
  <>
    <PaddedView className='Stores'>
      <h1>Nossas Lojas</h1>
      <h5>
        Conheça a Vela, faça test-rides, tome um cafe, escreva um texto para aparecer no nosso site sobre nossas lojas. Aqui deveria ter algo legal escrito.
      </h5>
      <div className='store'>
        <div>
          <h2>Sao Paulo</h2>
          <address>Rua Cunha Gago, 169 - Pinheiros</address>
          <div className='hours'>
          </div>
        </div>
      </div>
    </PaddedView>
    <PaddedView>
      <div>
        <h2>Fale com a gente</h2>
        <div>contato@velabikes.com.br</div>
        <div>4200-4950</div>
      </div>
    </PaddedView>
  </>

export default Stores
