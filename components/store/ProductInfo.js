import { compose, withState } from 'recompose'
import withProduct from '../../containers/withProduct'
import Price from '../Price'
import ProductImage from './ProductImage'
import ProductForm from './ProductForm'

const ProductVariantImage = ({ variant }) =>
  <ProductImage
    src={variant.node && variant.node.image.src}
  />

const ProductImageGallery = ({ product }) =>
  <div className='ProductImageGallery'>
    { product.images && product.images.edges.map((image, i) =>
      !product.variants.edges.find(variant => image.node.src === variant.node.image.src) &&
        <ProductImage src={image.node.src} />
    )}
    <style jsx>{`
      .ProductImageGallery :global(.ProductImage) {
        margin-bottom: 2em;
      }
    `}</style>
  </div>

const ProductInfo = ({ product, setSelectedVariant, selectedVariant }) =>
  <div className='ProductInfo'>
    <div>
      { product.variants && <ProductVariantImage variant={selectedVariant || product.variants.edges[0]} /> }
      <ProductImageGallery product={product} />
    </div>
    <div>
      <h1>{product.title}</h1>
      <h4>
        <Price value={selectedVariant && selectedVariant.node ? selectedVariant.node.price : product.variants && product.variants.edges.map(v => v.node.price)} />
      </h4>
      <hr />
      { product.options && <ProductForm product={product} selectedVariant={selectedVariant} onVariantSelect={setSelectedVariant} /> }
      <hr />
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
    <style jsx>{`
      @media only screen and (min-width: 768px) {
        .ProductInfo {
          display: flex;
        }
        .ProductInfo > div { flex: 1 }
        .ProductInfo > div:first-child { flex: 1.61; padding-right: 2em }
        h1 {
          margin: 0;
        }
        .ProductInfo :global(.ProductImage) {
          margin-bottom: 2em;
        }
      }
    `}</style>
  </div>

export default compose(
  withState('selectedVariant', 'setSelectedVariant', null)
)(ProductInfo)
