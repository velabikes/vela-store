
import PropTypes from 'prop-types'
import Link from 'next/link'
import Price from './Price'
import Image from './Image'

const ProductTeaser = ({ product }) =>
  <Link href={'/store/product?handle=' + product.handle}><a>
    <Image src={product.images[0].src} />
    <h2>
      {product.title}
    </h2>
    <h4>
      <Price value={product.price} />
    </h4>
    <style jsx>{`
      h2, h4 {
        margin: 0
      }
    `}</style>
  </a></Link>

ProductTeaser.propTypes = {
  product: PropTypes.object
}

// Header.defaultProps = {
//  product: {}
// }

export default ProductTeaser
