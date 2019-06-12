import PaddedView from '../components/PaddedView'
import Button from '../components/Button'
import { withState } from 'recompose'
import { compose } from 'redux'
import { velaGreen, offWhite } from '../style/colors'

const ButtonsExamples = ({
  loadingPrimary, loadingSecondary, loadingSecondaryInverted,
  setLoadingPrimary, setLoadingSecondary, setLoadingSecondaryInverted
}) =>
  <>
    <div className='buttons-wrapper'>
      <h2>Buttons</h2>
      <p>
        <Button small>Small</Button>
        <Button>Normal</Button>
        <Button big>Big</Button>
      </p>
      <p>
        <Button secondary small>Small</Button>
        <Button secondary>Normal</Button>
        <Button secondary big>Big</Button>
      </p>
      <p>
        <Button cta small>Small</Button>
        <Button cta>Normal</Button>
        <Button cta big>Big</Button>
      </p>

      <div className='inverted-area'>
        <p>
          <Button secondary inverted small>Small</Button>
          <Button secondary inverted>Normal</Button>
          <Button secondary inverted big>Big</Button>
        </p>
        <p>
          <Button cta inverted small>Small</Button>
          <Button cta inverted>Normal</Button>
          <Button cta inverted big>Big</Button>
        </p>
      </div>


      <p>
        <Button disabled small>Disabled</Button>
        <Button disabled>Disabled</Button>
        <Button disabled big>Disabled</Button>
      </p>

    </div>

    <hr />
    
    <div className='inverted-buttons-wrapper'>
      <h2>Loading Buttons</h2>
      <p>
        <Button
          small
          loadingBgColor={velaGreen}
          loadingTextColor={offWhite}
          loading={loadingPrimary}
          onClick={() => setLoadingPrimary(!loadingPrimary)}
        >
          Press to load
        </Button>
        <Button
          loadingBgColor={velaGreen}
          loadingTextColor={offWhite}
          loading={loadingPrimary}
          onClick={() => setLoadingPrimary(!loadingPrimary)}
        >
          Press to load
        </Button>
        <Button
          big
          loadingBgColor={velaGreen}
          loadingTextColor={offWhite}
          loading={loadingPrimary}
          onClick={() => setLoadingPrimary(!loadingPrimary)}
        >
          Press to load
        </Button>
      </p>
      <p>
        <Button
          small
          secondary
          loadingBgColor={velaGreen}
          loadingTextColor={offWhite}
          loading={loadingSecondary}
          onClick={() => setLoadingSecondary(!loadingSecondary)}
        >
          Press to load
        </Button>
        <Button
          secondary
          loadingBgColor={velaGreen}
          loadingTextColor={offWhite}
          loading={loadingSecondary}
          onClick={() => setLoadingSecondary(!loadingSecondary)}
        >
          Press to load
        </Button>
        <Button
          big
          secondary
          loadingBgColor={velaGreen}
          loadingTextColor={offWhite}
          loading={loadingSecondary}
          onClick={() => setLoadingSecondary(!loadingSecondary)}
        >
          Press to load
        </Button>
      </p>

      <div className='inverted-area'>
        <p>
          <Button
            small
            secondary
            inverted
            loadingBgColor={velaGreen}
            loadingTextColor={offWhite}
            loading={loadingSecondaryInverted}
            onClick={() => setLoadingSecondaryInverted(!loadingSecondaryInverted)}
          >
            Press to load
          </Button>
          <Button
            secondary
            inverted
            loadingBgColor={velaGreen}
            loadingTextColor={offWhite}
            loading={loadingSecondaryInverted}
            onClick={() => setLoadingSecondaryInverted(!loadingSecondaryInverted)}
          >
            Press to load
          </Button>
          <Button
            big
            secondary
            inverted
            loadingBgColor={velaGreen}
            loadingTextColor={offWhite}
            loading={loadingSecondaryInverted}
            onClick={() => setLoadingSecondaryInverted(!loadingSecondaryInverted)}
          >
            Press to load
          </Button>
        </p>
      </div>
    </div>
    <style jsx>{`
      .inverted-area {
        background-color: #a6b5a0;
        padding-bottom: .8rem;
      }
      .buttons-wrapper p > :global(.btn) {
        // width: 150px;
      }
      .inverted-buttons-wrapper p > :global(.btn) {
        // width: 200px;
      }
    `}</style>
  </>

const Buttons = compose(
  withState('loadingPrimary', 'setLoadingPrimary', false),
  withState('loadingSecondary', 'setLoadingSecondary', false),
  withState('loadingSecondaryInverted', 'setLoadingSecondaryInverted', false),
)(ButtonsExamples)

const style = () =>
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

    <Buttons />
  </PaddedView>

export default style
