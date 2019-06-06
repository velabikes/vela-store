import PaddedView from '../components/PaddedView'
import Button from '../components/Button'
import { offBlack, darkGray } from '../style/colors'
import { withState } from 'recompose';
import { compose } from 'redux';

const style = ({ loading, setLoading }) => 
  <PaddedView>
    <h1>This is a h1</h1>
    <h2>This is a h2</h2>
    <h3>This is a h3</h3>
    <h4>This is a h4</h4>
    <h5>This is a h5</h5>
    <h6>This is a h6</h6>
    <hr />
    <h1>This is a h1</h1>
    <h4>This is a h4 subtitle</h4>
    <p>
      This is a paragraph. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <h2>This is a h2</h2>
    <h5>This is a h5 subtitle</h5>
    <p>
      This is a paragraph. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <h3>This is a h3</h3>
    <h6>This is a h6 subtitle</h6>
    <p>
      This is a paragraph. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
    <hr />
    <label>Label:</label>
    <input type='text' />
    <small>Small text</small>
    <legend>Legend text</legend>
    <hr />

    <p><Button loading={loading} onClick={() => setLoading(!loading)}>Toggle load</Button></p>

    <hr />
    <p><Button>Default</Button></p>
    <p><Button primary>Primary</Button></p>
    <p><Button secondary>Secondary</Button></p>
    <p><Button disabled>Disabled</Button></p>

    <hr />
    <div style={{
      backgroundColor: darkGray,
      padding: '2rem',
    }}>
      <p style={{ marginTop: '0' }}><Button inverted>Default Inverted</Button></p>
      <p><Button primary inverted>Primary Inverted</Button></p>
      <p><Button secondary inverted>Secondary Inverted</Button></p>
    </div>
  </PaddedView>

export default compose(
  withState('loading', 'setLoading', false)
)(style)
