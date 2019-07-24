import PropTypes from 'prop-types'
import Link from 'next/link'
import ProductPrice from 'components/store/ProductPrice'
import ProductImage from './ProductImage'

const ProductTeaser = ({ product }) =>
  <div className='ProductTeaser'>
    <Link href={'/store/product?handle=' + product.handle} as={'/loja/produto/' + product.handle}><a>
      <ProductImage src={product.images && product.images.edges[0].node.src} />
      <h3>
        {product.title}
      </h3>
      <ProductPrice
        product={product}
        variant={product.variants.edges.length === 1 && product.variants.edges[0]}
      />
    </a></Link>
    <style jsx>{`
      h3 {
        margin-top: 1rem
      }
    `}</style>
  </div>

ProductTeaser.propTypes = {
  product: PropTypes.object
}

export default ProductTeaser
