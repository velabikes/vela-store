const ProductInfo = ({ product }) =>
  <div className='ProductInfo'>
    <div>
      <img src={product.images && product.images.edges[0].node.src} />
    </div>
    <div>
      <h1>{product.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
    </div>
    <style jsx>{`
      .ProductInfo {
        display: flex;
      }
    `}</style>
  </div>

export default ProductInfo
