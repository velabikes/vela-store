// Footer do site, localizado dentro do menu
// Os textos internos ustilizanm do componente <small>
// com estilo localizado dentro do components/Head.js

import Link from 'next/link'
import PaddedView from '../components/PaddedView'
import { velaGreen } from '../style/colors'

const Footer = () =>
  <PaddedView>
    <footer>
      <small>
        <div>CNPJ 20.430.806/0001-27</div>
        <div><Link href='/legal'><a>TERMOS DE USO, GARANTIAS E POITICA DE DEVOLUÇÕES.</a></Link></div>
      </small>
    </footer>
  </PaddedView>

export default Footer
