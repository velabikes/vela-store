import Link from 'next/link'
import PropTypes from 'prop-types'
import { offBlack, velaGreen } from '../../style/colors'
import Button from '../Button'

const bikes = [
  {
    title: 'Vela 1',
    href: '/store/product?handle=vela-1',
    hrefAs: '/loja/produto/vela-1',
    action: 'Saiba +',
    src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png'
  }, {
    title: 'Vela S',
    href: '/store/product?handle=vela-s',
    hrefAs: '/loja/produto/vela-s',
    action: 'Saiba +',
    src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/df50619a-f3bd-4a54-9b44-b4b5da38ac36.png'
  }
]

const BikeCard = ({ title, href, hrefAs, action, src, index }) =>
  <section className='BikeCard'>
    <div className='CardHeader'>
      <h1>{title}</h1>

      <div className='CardsHome'>
        <Link href={href} as={hrefAs}>
          <Button secondary={index % 2 && true}>{action}</Button>
        </Link>
      </div>
    </div>

    <img alt={title} src={src} />

    <style jsx>{`
      .BikeCard {
        position: relative;
        font-size: .61rem;
      }
      .CardHeader {
        position: absolute;
        left: 1.61rem;
        top: 1.61rem;
        right: 1.61rem;
        display: flex;
        justify-content: space-between;
      }
      h1 {
        color: ${offBlack};
        font-size: 2.63em;
      }
      .CardsHome > :global(.btn) {
        font-size: 1.29em;
      }
      @media only screen and (min-width: 768px) {
        font-size: 1rem;
      }
    `}</style>
  </section>

BikeCard.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  hrefAs: PropTypes.string,
  action: PropTypes.string,
  src: PropTypes.string,
  index: PropTypes.number
}

const HomeBikes = () =>
  <section className='HomeBikes'>
    <h1>Nossas Bikes</h1>
    <div className='BikeCards'>
      {bikes.map((bike, index) => <BikeCard key={bike.title} {...bike} index={index} />)}
    </div>

    <style jsx>{`
      .HomeBikes {
        margin: 4rem auto 4rem;
      }
      .BikeCards {
        display: grid;
        grid-row-gap: 2rem;
      }
      @media only screen and (min-width: 768px) {
        .BikeCards {
          grid-template-columns: 1fr 1fr;
          grid-column-gap: 1rem;
        }
      }
    `}</style>
  </section>
export default HomeBikes
