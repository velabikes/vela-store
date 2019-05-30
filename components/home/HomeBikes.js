import Link from 'next/link'
import PropTypes from 'prop-types'
import { offBlack, velaGreen } from '../../style/colors'

const bikes = [
  {
    title: 'Vela 1',
    href: '#',
    hrefAs: '#',
    action: 'Saiba +',
    src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/37675488-67a3-4fac-b384-dfd235e23f96.png'
  }, {
    title: 'Vela S',
    href: '#',
    hrefAs: '#',
    action: 'Saiba +',
    src: 'https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/df50619a-f3bd-4a54-9b44-b4b5da38ac36.png'
  }
]

const BikeCard = ({ title, href, hrefAs, action, src, index }) =>
  <div className='Card'>
    <div className='CardHeader'>
      <h1 className='CardTitle'>{title}</h1>

      <Link href={href} as={hrefAs}>
        <button className={`Button ${index % 2 ? 'odd' : 'even'}`}>{action}</button>
      </Link>
    </div>

    <img alt={title} src={src} />

    <style>{`
      .Card {
        position: relative;
        margin: 0 2rem;
      }
      .CardHeader {
        position: absolute;
        width: 100%;
        height: 1.29em;
        padding-left: 3rem;
        padding-top: 3rem;
      }
      .CardTitle {
        display: inline;
        color: ${offBlack};
      }
      .Button {
        position: absolute;
        right: 3rem;
        display: inline;
        vertical-align: middle;
        font-size: 1.29em;
      }
      .odd {
        background-color: transparent;
        color: ${offBlack};
        border: 1px solid ${offBlack};
      }
      .even {
        background-color: ${velaGreen};
      }
    `}</style>
  </div>

BikeCard.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  hrefAs: PropTypes.string,
  action: PropTypes.string,
  src: PropTypes.string,
  index: PropTypes.number
}

const HomeBikes = () =>
  <div className='HomeBikes'>
    <h1>Nossas Bikes</h1>
    <div className='BikeCards'>
      {bikes.map((bike, index) => <BikeCard key={bike.title} {...bike} index={index} />)}
    </div>

    <style jsx>{`
      .HomeBikes {
        margin: 4rem auto 4rem;
      }
      .BikeCards {
        margin-right: 2rem;
      }
      h1 {
        margin-left: 2rem;
        margin-bottom: 4rem;
      }
      @media only screen and (min-width: 768px) {
        .BikeCards {
          display: grid;
          grid-template-columns: 1fr;
          grid-column-gap: 1rem;
          grid-row-gap: 1rem;
        }
      }
      @media only screen and (min-width: 1200px) {
        .BikeCards {
          grid-template-columns: 1fr 1fr;
        }
      }
    `}</style>
  </div>

export default HomeBikes
