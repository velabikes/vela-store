import Image from '../Image'
import { midGray } from '../../style/colors'

const ProductImage = props =>
  <div className='ProductImage'>
    <div className='content'>
      <Image {...props} />
    </div>
    <style jsx>{`
      .ProductImage {
        position: relative;
        padding-top: 100%;
      }
      .content {
        position: absolute;
        top: 0px; bottom: 0px; right: 0px; left: 0px;
        background-color: ${midGray};
        justify-content: center;
        align-items: center;
        display: flex;
        z-index: 0;
      }
      .content :global(img) {
        max-height: 100%;
        object-fit: contain;
      }
    `}</style>
  </div>

export default ProductImage
