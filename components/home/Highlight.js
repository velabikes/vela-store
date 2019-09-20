import Grid from 'components/Grid'
import Section from 'components/Section'
import Button from 'components/Button'

const Highlight = () => {
  return (
    <Section>
      <Grid template='1fr 1fr'>
        <div>
          <Grid template='1fr 1fr'>
            <h1>Vela 1</h1>
            <Button>Saiba +</Button>
          </Grid>
          <div style={{fontSize: '1.25em'}}>asdfasdf</div>
          <div>asdfasdf</div>
        </div>
        <div>
          <img src='/static/home/vela-1-frente.png' />
        </div>
      </Grid>
    </Section>
  )
}

export default Highlight