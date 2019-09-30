import Section from 'components/Section'

const TestRideBanner = () =>
  <Section>
    <div className='TestRideBanner'>
      <div className='BannerTitle'>
        <h1 className='title'>Test-ride</h1>
        <p>
          Nós temos diversos Amigos
          pelo Brasil pra você
          conhecer a Vela de perto.
        </p>
        <p>
          Quer testar?
          É gratuito, sem compromisso e
          você ainda ganha benefícios!
        </p>
      </div>
      <div className='BannerImage'>
        <img src='/static/testride.png' alt='' />
      </div>
      <style jsx>{`
      .TestRideBanner {
        font-size: 1.2em;
        line-height: 1.2;
        position: relative;
        display: flex;
        flex-direction: column-reverse;
      }

      .title {
        font-size: 2.5em;
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
