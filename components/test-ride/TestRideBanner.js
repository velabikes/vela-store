// import PropTypes from 'prop-types'
import Grid from 'components/Grid'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'

const TestRideBanner = () =>
  <div className='TestRideBanner'>
    <Section>
      <Grid template='1fr 4fr'>
        <div className='BannerTitle'>
          <SectionHeader title='Test-ride' />
          <p>Nós temos diversos Amigos da Vela pelo Brasil pra você conhecer a Vela de perto.</p>
          <p>Quer testar? <br /> É gratuito, sem compromisso e você ainda ganha benefícios!</p>
        </div>
      </Grid>
    </Section>
    <style jsx>{`
      .TestRideBanner {
        position: relative;
      }
      .BannerTitle {
        text-align: right;
      }
    `}</style>
  </div>

export default TestRideBanner
