import { compose, withState } from 'recompose'
import withProduct from '../../containers/withProduct'
import { HideOnDesktop, HideOnMobile } from '../HideOn'
import Price from '../Price'
import ProductImage from './ProductImage'
import ProductForm from './ProductForm'
import ProductPrice from 'components/store/ProductPrice'

const ProductVariantImage = ({ variant }) =>
  <ProductImage
    src={variant.node && variant.node.image.src}
  />

const ProductImageGallery = ({ product }) =>
  <div className='ProductImageGallery'>
    { product.images && product.images.edges.map((image, i) =>
      !product.variants.edges.find(variant => image.node.src === variant.node.image.src) &&
        <ProductImage src={image.node.src} key={i} />
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
      { product.variants && <ProductVariantImage variant={selectedVariant ? selectedVariant.edges[0] : product.variants.edges[0]} /> }
      <HideOnMobile>
        <ProductImageGallery product={product} />
      </HideOnMobile>
    </div>
    <div>
      <h1>
        {product.title}
      </h1>
      <div className='price'>
        <ProductPrice
          product={product}
          variant={product.variants.edges.length === 1 ? product.variants.edges[0] : selectedVariant && selectedVariant.edges[0]}
          showInstallment
        />
      </div>
      <hr />
      <ProductForm
        product={product}
        selectedVariant={selectedVariant}
        onVariantSelect={setSelectedVariant}
      />
      <hr />
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />

      <HideOnDesktop>
        <ProductImageGallery product={product} />
      </HideOnDesktop>
    </div>
    <style jsx>{`
      .price {
        font-size: 1.25em;
      }
      @media only screen and (min-width: 768px) {
        .ProductInfo {
          display: flex;
        }
        .ProductInfo > div { flex: 1 }
        .ProductInfo > div:first-child { flex: 1.61; padding-right: 2em }
        .ProductInfo :global(.ProductImage) {
          margin-bottom: 2em;
        }
      }
    `}</style>
  </div>

export default compose(
  withState('selectedVariant', 'setSelectedVariant', null)
)(ProductInfo)
