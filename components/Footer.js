// Footer do site, localizado dentro do menu
// Os textos internos ustilizanm do componente <small>
// com estilo localizado dentro do components/Head.js

import Link from 'next/link'

const Footer = () =>
  <footer>
    <small>
      <div>CNPJ 20.430.806/0001-27</div>
      <div><Link href='/legal'><a>Termos de uso, garantia e política de devoluções</a></Link></div>
    </small>
  </footer>

export default Footer
