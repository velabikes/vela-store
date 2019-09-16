import PropTypes from 'prop-types'
import { compose, withHandlers } from 'recompose'
import { setCustomerAccessToken } from '../../lib/redux'
import withCustomerCreate from '../../containers/withCustomerCreate'
import withCustomerAccessTokenCreate from '../../containers/withCustomerAccessTokenCreate'
import UserLoginForm from './UserLoginForm'
import UserRegisterForm from './UserRegisterForm'

const UserAuth = ({ handleLoginSubmit, handleRegisterSubmit }) =>
  <div className='UserAuth'>
    <UserLoginForm onSubmit={handleLoginSubmit} />
    <UserRegisterForm onSubmit={handleRegisterSubmit} />
  </div>

UserAuth.propTypes = {
  handleLoginSubmit: PropTypes.func,
  handleRegisterSubmit: PropTypes.func
}

export default compose(
  withCustomerCreate,
  withCustomerAccessTokenCreate,
  withHandlers({
    handleLoginSubmit: props => async input => {
      try {
        const tokenMutationResult = await customerAccessTokenCreate({ variables: { input } })
        dispatch(setCustomerAccessToken(tokenMutationResult.data.customerAccessTokenCreate.customerAccessToken))
      } catch (error) {
        alert(error)
      }
    },
    handleRegisterSubmit: props => async input => {
      try {
        const createMutationResult = await customerCreate({ variables: { input } })
        const tokenMutationResult = await customerAccessTokenCreate({ variables: { input } })
        dispatch(setCustomerAccessToken(tokenMutationResult.data.customerAccessTokenCreate.customerAccessToken))
      } catch (error) {
        alert(error)
      }
    }
  })
)(UserAuth)
