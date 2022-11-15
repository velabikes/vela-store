import { BackIcon } from "components/Icons";
import PropTypes from "prop-types";
import { white } from "../style/colors";

const Card = ({ children, onBackClick, media, horizontal }) => (
  <div className="Card">
    {media && <div className="media">{media}</div>}
    {children && <div className="content">{children}</div>}
    {onBackClick && (
      <a href="#" onClick={onBackClick}>
        <BackIcon />
      </a>
    )}
    <style jsx>{`
      .Card {
        box-shadow: 0px 0.75rem 1rem -1.25rem rgba(20, 20, 20, 0.8);
        position: relative;
        background: ${white};
        text-align: center;
      }
      .content {
        padding: 2rem;
      }
      .content :global(h1),
      .content :global(h2),
      .content :global(h3) {
        font-weight: 700;
        text-transform: initial;
        font-style: normal;
      }
      a {
        position: absolute;
        right: 0;
        top: 0;
        padding: 1rem;
      }
      @media only screen and (min-width: 768px) {
        .Card {
          display: flex;
          flex-direction: ${horizontal ? "row" : "column"};
          text-align: left;
          margin-bottom: 10rem;
        }
      }
    `}</style>
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  media: PropTypes.node,
  onBackClick: PropTypes.func,
  horizontal: PropTypes.bool,
};

export default Card;
