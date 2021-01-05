import PropTypes from "prop-types";
import Card from "components/Card";
import Button from "components/Button";
import { NextIcon } from "components/Icons";
import Link from "next/link";

const PostHightlight = ({
  post: {
    data: { cover, title, teaser },
    uid,
  },
}) => (
  <Card
    horizontal
    media={
      <Link href={`/blog/${uid}`}>
        <img src={cover.url} alt={cover.alt} />
      </Link>
    }
  >
    <Link href={`/blog/${uid}`}>
      <div className="content">
        <div className="text">
          <h2>{title[0].text}</h2>
          <p>{teaser[0].text}</p>
        </div>
        <div className="actions">
          <Button onClick={() => null} primary>
            Ler mais <NextIcon fill="#FFFFFF" />
          </Button>
        </div>
      </div>
    </Link>
    <style jsx>{`
      img {
        object-fit: cover;
        min-height: 100%;
        cursor: pointer;
      }
      h2 {
        min-width: 20vw;
      }
      .content {
        display: flex;
        flex-direction: column;
        height: 100%;
        text-align: center;
      }
      .content > div:first-child {
        flex: 1;
      }
      @media only screen and (min-width: 768px) {
        .content {
          text-align: left;
        }
      }
    `}</style>
  </Card>
);

PostHightlight.propTypes = {
  post: PropTypes.object,
};

export default PostHightlight;
