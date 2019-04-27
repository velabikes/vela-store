import { compose, withHandlers, withState } from 'recompose'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../containers/withCheckoutId'

const ProductInfo = ({ product, isLoading, onAddToCartClick, isAddToCartLoading }) =>
  <div className='ProductInfo'>
    <div>
      <img src={product.images && product.images.edges[0].node.src} alt='' />
    </div>
    <div>
      <h1>{product.title}</h1>
      <button type='button' onClick={onAddToCartClick} disabled={isLoading}>comprar</button>
      {isAddToCartLoading ? 'asdf' : 'cu'}
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
    <style jsx>{`
      .ProductInfo {
        display: flex;
      }
    `}</style>
  </div>

export default compose(
  withState('isAddToCartLoading', 'setAddToCartLoading', false),
  withCheckoutLineItemsAdd,
  withCheckoutId,
  withHandlers({
    onAddToCartClick: ({
      checkoutLineItemsAdd,
      checkoutId,
      setAddToCartLoading,
      product
    }) => async e => {
      setAddToCartLoading(true)
      const mutationResult = await checkoutLineItemsAdd({
        variables: {
          checkoutId: checkoutId,
          lineItems: [
            { variantId: product.variants.edges[0].node.id, quantity: 1 }
          ]
        }
      })
      console.log(mutationResult)
      setAddToCartLoading(false)
    }
  })
)(ProductInfo)
