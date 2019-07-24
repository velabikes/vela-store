import Link from 'next/link'
import PropTypes from 'prop-types'
import { offBlack, velaGreen } from '../../style/colors'
import Button from '../Button'
import Grid from 'components/Grid'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'

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
  <article className='BikeCard'>
    <div className='CardHeader'>
      <h1>{title}</h1>

      <div className='CardsHome'>
        <Link href={href} as={hrefAs}>
          <Button big secondary={true}>{action}</Button>
        </Link>
      </div>
    </div>

    <img alt={title} src={src} />

    <style jsx>{`
      .BikeCard {
        position: relative;
      }
      .CardHeader {
        position: absolute;
        left: 2rem;
        top: 2rem;
        right: 2rem;
        display: flex;
        justify-content: space-between;
      }
      h1 {
        color: ${offBlack};
        margin-top: 0;
      }
      @media only screen and (min-width: 768px) {
      }
    `}</style>
  </article>

BikeCard.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
  hrefAs: PropTypes.string,
  action: PropTypes.string,
  src: PropTypes.string,
  index: PropTypes.number
}

const HomeBikes = () =>
  <Section className='HomeBikes'>
    <SectionHeader title='Nossas Bikes' />
    <Grid template='1fr 1fr'>
      {bikes.map((bike, index) => <BikeCard key={bike.title} {...bike} index={index} />)}
    </Grid>
  </Section>
export default HomeBikes
