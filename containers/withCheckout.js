import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose, withHandlers, withProps, branch, withPropsOnChange } from 'recompose'
import dayjs from 'dayjs'
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

const withCheckout = graphql(checkout, {
  alias: 'withCheckout',

  options ({ checkout, checkoutId, handleCheckoutCreation }) {
    const hoursPastCreation = checkout && dayjs().diff(dayjs(checkout.createdAt), 'hours')
    const withShippingRates = checkout && checkout.requiresShipping && checkout.shippingAddress
    const isCheckoutExpired = hoursPastCreation > 72
    const isCheckoutCompleted = checkout && checkout.completedAt

    return {
      variables: {
        id: checkoutId && !isCheckoutExpired && !isCheckoutCompleted ? checkoutId : handleCheckoutCreation(),
        withShippingRates: !!withShippingRates
      }
    }
  },

  props ({ data: { node, loading, error, refetch } }) {
    return { checkout: node, isCheckoutLoading: loading, checkoutRefetch: refetch }
  }
})

export default compose(
  withCheckoutId,
  branch(
    ({ isCheckoutIdLoading }) => !isCheckoutIdLoading,
    compose(
      withCheckoutCreate,
      withHandlers({
        handleCheckoutCreation: ({ checkoutCreate, dispatch }) => async () => {
          const mutationResponse = await checkoutCreate({
            variables: {
              input: {}
            }
          })
          const checkoutId = mutationResponse.data.checkoutCreate.checkout.id
          dispatch(setCheckoutId(checkoutId))
        }
      }),
      withCheckout
    )
  ),
  branch(({ checkoutId }) => checkoutId, withCheckout)
)
