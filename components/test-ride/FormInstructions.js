import Section from 'components/Section'
import SectionHeader from 'components/SectionHeader'

const FormInstructions = () =>
  <Section>
    <SectionHeader align='center' title='Como funciona?' />
    <div className='items'>
      <div>
        <span>1</span>
        <p>
          Insira todas as informações nos
          campos ao lado e aguarde contato.
        </p>
      </div>
      <div>
        <span>2</span>
        <p>
          Combine com o Amigo da Vela um
          horário disponível para o test-ride.
        </p>
      </div>
      <div>
        <span>3</span>
        <p>
          Encontre o Amigo da Vela no dia
          e horário marcados. Ele irá te
          apresentar a bike elétrica
          pessoalmente, deixar você dar
          uma volta e trocar informações sobre
          a experiência na sua cidade!
        </p>
      </div>
    </div>
    <style jsx>{`
      .items > div {
        display: flex;
        margin-bottom: 2em;
      }
      span {
        font-size: 1.5em;
        line-height: 1;
        border-radius: 3px;
        font-weight: bold;
        padding: 14px;
        background-color: #51776B;
        display: inline-block;
        box-sizing: border-box;
        margin-right: 20px;
        height: 55px;
        text-align: center;
        min-width: 55px;
      }
    `}</style>
  </Section>

export default FormInstructions
