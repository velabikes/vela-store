import { compose } from 'recompose'
import PaddedView from '../components/PaddedView'
import withCustomerAccessToken from '../containers/withCustomerAccessToken'
import UserAuth from '../components/user/UserAuth'

const UserPage = ({ customerCreate, customerAccessTokenCreate, customerAccessToken, dispatch }) =>
  <PaddedView>
    {customerAccessToken && customerAccessToken.accessToken}
    <UserAuth />
  </PaddedView>

export default compose(
  withCustomerAccessToken
)(UserPage)
