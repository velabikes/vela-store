import PaddedView from '../components/PaddedView'
import Button from '../components/Button'
import { offBlack, darkGray } from '../style/colors'
import { withState } from 'recompose';
import { compose } from 'redux';

const style = ({
  loadingDefault, setLoadingDefault, loadingPrimary, setLoadingPrimary, loadingSecondary, setLoadingSecondary,
  loadingDefaultInverted, setLoadingDefaultInverted, loadingPrimaryInverted, setLoadingPrimaryInverted, loadingSecondaryInverted, setLoadingSecondaryInverted
}) => 
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

    <h2>Buttons</h2>
    <p>
      <Button>Default</Button>
      <Button loading={loadingDefault} onClick={() => setLoadingDefault(!loadingDefault)}>Toggle load</Button>
    </p>
    <p>
      <Button primary>Primary</Button>
      <Button primary loading={loadingPrimary} onClick={() => setLoadingPrimary(!loadingPrimary)}>Toggle load</Button>
    </p>
    <p>
      <Button secondary>Secondary</Button>
      <Button secondary loading={loadingSecondary} onClick={() => setLoadingSecondary(!loadingSecondary)}>Toggle load</Button>
    </p>
    <p><Button disabled>Disabled</Button></p>

    <hr />

    <h2>Inverted Buttons</h2>
    <div style={{
      backgroundColor: darkGray,
      padding: '2rem',
    }}>
      <p>
        <Button inverted>Default Inverted</Button>
        <Button inverted loading={loadingDefaultInverted} onClick={() => setLoadingDefaultInverted(!loadingDefaultInverted)}>Toggle load</Button>
      </p>
      <p>
        <Button primary inverted>Primary Inverted</Button>
      <Button primary inverted loading={loadingPrimaryInverted} onClick={() => setLoadingPrimaryInverted(!loadingPrimaryInverted)}>Toggle load</Button>
      </p>
      <p>
        <Button secondary inverted>Secondary Inverted</Button>
      <Button secondary inverted loading={loadingSecondaryInverted} onClick={() => setLoadingSecondaryInverted(!loadingSecondaryInverted)}>Toggle load</Button>
      </p>
    </div>
  </PaddedView>

export default compose(
  withState('loadingDefault', 'setLoadingDefault', false),
  withState('loadingPrimary', 'setLoadingPrimary', false),
  withState('loadingSecondary', 'setLoadingSecondary', false),
  withState('loadingDefaultInverted', 'setLoadingDefaultInverted', false),
  withState('loadingPrimaryInverted', 'setLoadingPrimaryInverted', false),
  withState('loadingSecondaryInverted', 'setLoadingSecondaryInverted', false),
)(style)
