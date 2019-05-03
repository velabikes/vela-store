import { compose } from 'recompose'
import PaddedView from '../components/PaddedView'
import UserLoginForm from '../components/UserLoginForm'
import UserRegisterForm from '../components/UserRegisterForm'
import withCustomerCreate from '../containers/withCustomerCreate'
import withCustomerAccessTokenCreate from '../containers/withCustomerAccessTokenCreate'
import withCustomerAccessToken from '../containers/withCustomerAccessToken'
import { setCustomerAccessToken } from '../lib/redux'

const UserPage = ({ customerCreate, customerAccessTokenCreate, customerAccessToken, dispatch }) =>
  <PaddedView>
    {customerAccessToken && customerAccessToken.accessToken}
    <h2>Login</h2>
    <UserLoginForm
      onSubmit={async (input) => {
        try {
          const tokenMutationResult = await customerAccessTokenCreate({ variables: { input } })
          console.log(tokenMutationResult)
          dispatch(setCustomerAccessToken(tokenMutationResult.data.customerAccessTokenCreate.customerAccessToken))
        } catch (error) {
          console.log('error')
          console.log(error)
        }
      }}
    />
    <h2>Register</h2>
    <UserRegisterForm
      onSubmit={async (input) => {
        try {
          const createMutationResult = await customerCreate({ variables: { input } })
          console.log(createMutationResult)
          const tokenMutationResult = await customerAccessTokenCreate({ variables: { input } })
          console.log(tokenMutationResult)
          dispatch(setCustomerAccessToken(tokenMutationResult.data.customerAccessTokenCreate.customerAccessToken))
        } catch (error) {
          console.log('error')
          console.log(error)
        }
      }}
    />
  </PaddedView>

export default compose(
  withCustomerAccessToken,
  withCustomerCreate,
  withCustomerAccessTokenCreate
)(UserPage)
