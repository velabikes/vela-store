// import PropTypes from 'prop-types'
// import Grid from 'components/Grid'
import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'

const TestRideBanner = () =>
  <Section>
    <div className='TestRideBanner'>
      <div className='BannerTitle'>
        <SectionHeader title='Test-ride' />
        <p>
          Nós temos diversos Amigos da<br />
          Vela pelo Brasil pra você<br />
          conhecer a Vela de perto.
        </p>
        <p>
          Quer testar? <br />
          É gratuito, sem compromisso e <br />
          você ainda ganha benefícios!
        </p>
      </div>
      <div className='BannerImage'>
        <img src='/static/testride.png' alt='' />
      </div>
      <style jsx>{`
      .TestRideBanner {
        font-size: 20px;
        line-height: 1.2;
        position: relative;
        display: flex;
        flex-direction: column-reverse;
      }

      .TestRideBanner h1 {
        font-size: 2.5rem;
      }

      .BannerTitle {
        padding: 20px 0;
        text-align: center;
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
      }

      @media only screen and (min-width: 768px) {
        .TestRideBanner {
          flex-direction: row;
        }
        .BannerTitle {
          width: 50%;
          text-align: right;
        }
      }
    `}</style>
    </div>
  </Section>

export default TestRideBanner
