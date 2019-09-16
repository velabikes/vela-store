import PropTypes from 'prop-types'
import { compose } from 'recompose'
import PaddedView from '../components/PaddedView'
import withCustomerAccessToken from '../containers/withCustomerAccessToken'
import UserAuth from '../components/user/UserAuth'

const UserPage = ({ customerCreate, customerAccessTokenCreate, customerAccessToken, dispatch }) =>
  <PaddedView>
    {customerAccessToken && customerAccessToken.accessToken}
    <UserAuth />
  </PaddedView>

UserPage.propTypes = {
  customerCreate: PropTypes.any,
  customerAccessTokenCreate: PropTypes.any,
  customerAccessToken: PropTypes.any,
  dispatch: PropTypes.any
}

export default compose(
  withCustomerAccessToken
)(UserPage)
