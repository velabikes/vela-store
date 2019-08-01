import { compose, withState, withProps } from 'recompose'
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

const ProductInfo = ({ product, setAvailableVariants, availableVariants, selectedVariant }) =>
  <div className='ProductInfo'>
    <div>
      { product.variants && <ProductVariantImage variant={availableVariants ? availableVariants.edges[0] : product.variants.edges[0]} /> }
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
          variant={selectedVariant}
          showInstallment
        />
      </div>
      <hr />
      <ProductForm
        product={product}
        selectedVariant={availableVariants}
        onVariantSelect={setAvailableVariants}
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
  withState('availableVariants', 'setAvailableVariants', ({ product }) => product.variants),
  withProps(({ product, availableVariants }) => ({
    selectedVariant: product.variants.edges.length === 1
      ? product.variants.edges[0]
      : availableVariants && availableVariants.edges.length === 1 && availableVariants.edges[0]
  }))
)(ProductInfo)
