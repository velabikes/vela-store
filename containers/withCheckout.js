
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose, withHandlers, withProps, branch } from 'recompose'
import { setCheckoutId } from '../lib/redux'
import withCheckoutId from './withCheckoutId'
import withCheckoutCreate from './withCheckoutCreate'
import CheckoutFragment from './inc/CheckoutFragment'

const checkout = gql`
  query checkoutQuery($id: ID!, $withShippingRates: Boolean!) {
    node(id:$id) {
      id
      ... on Checkout{
        ...CheckoutFragment
        availableShippingRates @include(if: $withShippingRates) {
          ready
          shippingRates {
            handle
            priceV2 {
              amount
            }
          }
        }
      }
    }
  }
  ${CheckoutFragment}
`

const withCheckoutHoC = graphql(checkout, {
  alias: 'withCheckout',

  options (props) {
    return {
      variables: {
        id: props.checkoutId || props.handleCheckoutCreation(),
        withShippingRates: !props.withShippingRates ? false : true
      }
    }
  },

  props ({ data: { node, loading, error }}) {
    return { checkout: node, isCheckoutLoading: loading }
  }
})

export default compose(
  withCheckoutId,
  withCheckoutCreate,
  withHandlers({
    handleCheckoutCreation: ({ checkoutCreate, dispatch }) => async () => {
      const mutationResponse = await checkoutCreate({
        variables: {
          input: {
            allowPartialAddresses: true,
            shippingAddress: { city: 'Sao Paulo', province: 'SP', country: 'Brazil' }
          }
        }
      })
      const checkoutId = mutationResponse.data.checkoutCreate.checkout.id
      dispatch(setCheckoutId(checkoutId))
    }
  }),
  branch(
    ({ isCheckoutIdLoading }) => !isCheckoutIdLoading,
    withCheckoutHoC
  ),
  withProps(({ checkout, isCheckoutLoading }) => ({ withShippingRates: checkout && checkout.requiresShipping })),
  branch(
    ({ withShippingRates }) => withShippingRates,
    withCheckoutHoC
  )
)
