import PaddedView from '../components/PaddedView'
import { velaGreen } from '../style/colors'

const Footer = () =>
  <footer>
    <PaddedView>
      <div>VELA BIKES © COPYRIGHT 2019</div>
      <div>CNPJ 20.430.806/0001-27</div>
      <div>TERMOS DE USO, GARANTIAS E POITICA DE DEVOLUÇÕES.</div>
    </PaddedView>
    <style jsx>{`
      footer {
        font-size: .8em
      }
    `}</style>
  </footer>

export default Footer
