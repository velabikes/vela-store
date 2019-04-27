import { compose } from 'recompose'
import withShopify from '../lib/shopify'
import Page from '../components/Page'
import PaddedView from '../components/PaddedView'
import UserLoginForm from '../components/UserLoginForm'
import UserRegisterForm from '../components/UserRegisterForm'
import withCustomerCreate from '../containers/withCustomerCreate'
import withCustomerAccessTokenCreate from '../containers/withCustomerAccessTokenCreate'

const UserPage = ({ customerCreate, userAccessTokenCreate }) =>
  <Page>
    <PaddedView>
      <UserLoginForm />
      <UserRegisterForm
        onSubmit={async (input) => {
          try {
            const createMutationResult = await customerCreate({ variables: { input } })
            console.log(createMutationResult)
            const tokenMutationResult = await customerAccessTokenCreate({ variables: { input } })
          } catch (error) {
            console.log('error')
            console.log(error)
          }

          console.log(mutationResult)
        }}
      />
    </PaddedView>
  </Page>

export default compose(
  withShopify,
  withCustomerCreate,
  withCustomerAccessTokenCreate
)(UserPage)
