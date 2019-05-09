import PaddedView from '../components/PaddedView'
import ContactMap from '../components/ContactMap'

const Contact = () =>
  <>
  <PaddedView>
    <h1>Ajuda e Contato</h1>
     <div>
       <h2>Encontre uma centro Vela</h2>
       <h5>Conheça a Vela, faça test-rides, tome um cafe</h5>
     </div>
  </PaddedView>
  <ContactMap />
  <PaddedView>
     <div>
       <h2>Fale com a gente</h2>
       <div>contato@velabikes.com.br</div>
       <div>4200-4950</div>
     </div>
  </PaddedView>
  </>
export default Contact
