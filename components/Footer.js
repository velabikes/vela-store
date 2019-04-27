import { velaGreen } from '../style/colors'
import PaddedView from '../components/PaddedView'

const Footer = () =>
  <footer>
    <PaddedView>
      footer
    </PaddedView>
    <style jsx>{`
      footer {
        background-color: ${velaGreen};
        padding: 1em 0;
        color: white;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        transform: translateY(99%);
      }
    `}</style>
  </footer>

export default Footer
