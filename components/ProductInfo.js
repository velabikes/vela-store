import Price from '../components/Price'
import Image from '../components/Image'
import ProductForm from './ProductForm';

const ProductInfo = ({ product }) =>
  <div className='ProductInfo'>
    <div>
      {product.images && product.images.edges.map(edge =>
        <Image src={edge.node.src} key={edge.node.src} alt='' />
      )}
    </div>
    <div>
      <h1>{product.title}</h1>
      <h4><Price value={product.variants.edges[0].node.price} /></h4>
      <ProductForm product={product} />
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
    <style jsx>{`
      .ProductInfo :global(.Image) {
        margin-top: 1.5rem;
      }
      h1 {
        margin-bottom: 0
      }
      h4 {
        margin-top: 0;
        margin-bottom: 1em
      }
      @media only screen and (min-width: 768px) {
        .ProductInfo {
          display: flex;
        }
        .ProductInfo > div { flex: 1 }
        .ProductInfo > div:first-child { flex: 1.58; padding-right: 2em }
      }
    `}</style>
  </div>

export default ProductInfo
