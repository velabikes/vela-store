import PropTypes from 'prop-types'
import Card from 'components/Card'
import Button from 'components/Button'
import { NextIcon } from 'components/Icons'

const PostHightlight = ({ post: { data: { cover, title, teaser }, uid } }) =>
  <Card
    horizontal
    media={<a href={`/blog/${uid}`}><img src={cover.url} alt={cover.alt} /></a>}
  >
    <div className='content'>
      <div className='text'>
        <a href={`/blog/${uid}`}>
          <h2>{title[0].text}</h2>
        </a>
        <p>{teaser[0].text}</p>
      </div>
      <div className='actions'>
        <Button
          onClick={() => null}
          primary
        >
            Ler mais <NextIcon fill='#FFFFFF' />
        </Button>
      </div>
    </div>
    <style jsx>{`
      img {
        object-fit: cover;
        min-height: 100%;
      }
      h2 {
        min-width: 25vw;
      }
      .content {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .content > div:first-child {
        flex: 1;
      }
    `}</style>
  </Card>

PostHightlight.propTypes = {
  post: PropTypes.object
}

export default PostHightlight
