
/*
  Query to get Checkout object
*/
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose, withHandlers, branch } from 'recompose'
import withCheckoutId from './withCheckoutId'
import withCheckoutCreate from './withCheckoutCreate'
import CheckoutFragment from './inc/CheckoutFragment'
import { setCheckoutId } from '../lib/redux'

const checkout = gql`
  query checkoutQuery($id: ID!) {
    node(id:$id) {
      id
      ... on Checkout{
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`

export default compose(
  withCheckoutId,
  withCheckoutCreate,
  withHandlers({
    handleCheckoutCreation: ({ checkoutCreate, dispatch }) => async () => {
      const mutationResponse = await checkoutCreate({
        variables: {
          input: {
            allowPartialAddresses: true,
            shippingAddress: {city: 'Sao Paulo', province: 'SP', country: 'Brazil'}
          }
        }
      })
      const checkoutId = mutationResponse.data.checkoutCreate.checkout.id
      dispatch(setCheckoutId(checkoutId))
      console.log('setCheckout!!!!!! ! ! ! ! ')
    }
  }),
  branch(
    ({ isCheckoutIdLoading }) => !isCheckoutIdLoading,
    graphql(checkout, {
      alias: 'withCheckout',

      options (props) {
        return {
          variables: {
            id: props.checkoutId || props.handleCheckoutCreation()
          }
        }
      },

      props ({ data: { node } }) {
        return { checkout: node }
      }
    })
  )
)
