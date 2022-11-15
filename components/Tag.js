import PropTypes from "prop-types";
import { offWhite, velaBlue } from "style/colors";

/* eslint-disable */
const Tag = ({ label, icon, selected, onClick, ...props }) => (
  <span className="Tag" onClick={onClick} {...props}>
    {icon && <span className="icon">{icon}</span>}
    <span className="label">{label}</span>
    <style jsx>{`
      .Tag {
        background: ${offWhite};
        position: relative;
        font-size: 1em;
        font-weight: 500;
        border-radius: 2em;
        padding: 0.5em 1em;
        margin-right: 0.25rem;
        display: inline-block;
        transition: 0.2s box-shadow ease-in;
        ${selected ? `box-shadow: 0 0 0 2px ${velaBlue};` : ""}
        ${onClick ? "cursor: pointer;" : ""}
      }
      .Tag:last-child {
        margin-right: 0.25em;
      }
      .icon > :global(*) {
        font-size: 1em;
        position: absolute;
        width: 32px;
        left: 0em;
        bottom: -1px;
        margin-right: 1em;
      }
      .label {
        margin-left: 1.5em;
      }
    `}</style>
  </span>
);
/* eslint-enable */

Tag.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.any,
  selected: PropTypes.any,
  onClick: PropTypes.any,
};

export default Tag;
