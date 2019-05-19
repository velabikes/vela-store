import { compose, withState } from 'recompose'
import withProduct from '../../containers/withProduct'
import Price from '../Price'
import Image from '../Image'
import ProductForm from './ProductForm'

const ProductInfo = ({ product, setSelectedVariant, selectedVariant }) =>
  <div className='ProductInfo'>
    <div>
      <Image src={selectedVariant ? selectedVariant.node && selectedVariant.node.image.originalSrc : product.images && product.images.edges[0].node.src} alt='' />
    </div>
    <div>
      <h1>{product.title}</h1>
      <h4>
        <Price value={selectedVariant && selectedVariant.node ? selectedVariant.node.price : product.variants && product.variants.edges.map(v => v.node.price)} />
      </h4>
      <hr />
      {product.options && <ProductForm product={product} onVariantSelect={setSelectedVariant} />}
      <hr />
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
    <style jsx>{`
      .ProductInfo {
        padding-top: 1.61rem;
      }
      @media only screen and (min-width: 768px) {
        .ProductInfo {
          display: flex;
        }
        .ProductInfo > div { flex: 1 }
        .ProductInfo > div:first-child { flex: 1.58; padding-right: 2em }
        h1 {
          margin: 0;
        }
      }
    `}</style>
  </div>

export default compose(
  withState('selectedVariant', 'setSelectedVariant', null),
  withProduct(({ handle }) => handle)
)(ProductInfo)
