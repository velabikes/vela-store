import LazyLoad from 'react-lazyload'
import { lightGray } from '../style/colors'

const ImagePlaceholder = () =>
  <div>carregando...</div>

const Image = props =>
  <div className='Image'>
    <div className='content'>
      <LazyLoad height={200} placeholder={<ImagePlaceholder />}>
        <img {...props} />
      </LazyLoad>
    </div>
    <style jsx>{`
      .Image {
        position: relative;
        padding-top: 100%;
      }
      .content {
        position: absolute;
        top: 0px; bottom: 0px; right: 0px; left: 0px;
        background: #e2e3e3;
        justify-content: center;
        align-items: center;
        display: flex;
        z-index: 0;
      }
    `}</style>
  </div>

export default Image
