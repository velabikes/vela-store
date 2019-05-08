import { compose, withHandlers, withState } from 'recompose'
import withCheckoutLineItemsAdd from '../containers/withCheckoutLineItemsAdd'
import withCheckoutId from '../containers/withCheckoutId'
import Price from '../components/Price'
import Image from '../components/Image'

const ProductInfo = ({ product, isLoading, onAddToCartClick, isAddToCartLoading }) =>
  <div className='ProductInfo'>
    <div>
      {product.images && product.images.edges.map(edge =>
        <Image src={edge.node.src} key={edge.node.src} alt='' />
      )}
    </div>
    <div>
      <h1>{product.title}</h1>
      <h4><Price value={product.variants.edges[0].node.price} /></h4>
      <button type='button' onClick={onAddToCartClick} disabled={isLoading}>comprar</button>
      {isAddToCartLoading && 'carregando'}
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
    <style jsx>{`
      .ProductInfo {
        display: flex;
      }
      .ProductInfo > div { flex: 1 }
      .ProductInfo > div:first-child { flex: 1.58; padding-right: 2em }
      .ProductInfo :global(.Image) {
        margin-top: 1rem;
      }
      h1 {
        margin-bottom: 0
      }
      h4 {
        margin-top: 0
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
