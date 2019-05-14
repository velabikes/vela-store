
import PropTypes from 'prop-types'
import Link from 'next/link'
import Price from './Price'
import Image from './Image'

const ProductTeaser = ({ product }) =>
  <div className='ProductTeaser'>
    <Link href={'/store/product?handle=' + product.handle}><a>
      <Image src={product.images && product.images.edges[0].node.src} />
      <h3>
        {product.title}
      </h3>
      <h4>
        <Price value={product.variants.edges.map(v => v.node.price)} />
      </h4>
    </a></Link>
    <style jsx>{`
      .ProductTeaser {
        margin-top: 2rem
      }
      h3 {
        margin-top: 1rem;
        margin-bottom: 0.5em
      }
      h4 {
        margin-top: 0
      }
    `}</style>
  </div>

ProductTeaser.propTypes = {
  product: PropTypes.object
}

export default ProductTeaser
