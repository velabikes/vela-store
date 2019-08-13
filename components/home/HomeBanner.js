import Card from 'components/Card'
import { HideOnMobile, HideOnDesktop } from 'components/HideOn';

const HomeBikes = () =>
  <>
    <HideOnMobile>
      <Card
        media={
          <img
            src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/8085d34e-0742-43b6-9c8d-170c6199cf3e.jpg'
            alt='Promoção: Agosto #PAIDEVELA Frete grátis na compra a sua Vela'
          />
        }
      />
    </HideOnMobile>
    <HideOnDesktop>
      <Card
        media={
          <img
            src='https://gallery.mailchimp.com/68a0cce7cc109d78a8b44d7a0/images/a587fe26-0597-414e-9045-1811ab39567f.png'
            alt='Promoção: Agosto #PAIDEVELA Frete grátis na compra a sua Vela'
          />
        }
      />
    </HideOnDesktop>
  </>

export default HomeBikes
