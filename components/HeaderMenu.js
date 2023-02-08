import PropTypes from "prop-types";
import { compose, withHandlers } from "recompose";
import { toggleDrawer } from "../lib/redux";
import withOpenDrawer from "../containers/withOpenDrawer";
import { MenuIcon, CartIcon } from "./Icons";

/* eslint-disable */
const HeaderMenu = ({ handleCartClick, handleMenuClick }) => (
  <>
    <div className="menu">
      <a onClick={handleMenuClick}>
        <MenuIcon />
      </a>
    </div>
    <div>
      <a onClick={handleCartClick}>
        <CartIcon />
      </a>
    </div>
    <style jsx>
      {`
      @media only screen and (min-width: 768px) {
        .menu {
          display: none;
        }
    `}
    </style>
  </>
);

/* eslint-enable */
HeaderMenu.propTypes = {
  handleCartClick: PropTypes.func,
  handleMenuClick: PropTypes.func,
};

export default compose(
  withOpenDrawer,
  withHandlers({
    handleMenuClick:
      ({ dispatch }) =>
      (e) =>
        dispatch(toggleDrawer("MENU")),
    handleCartClick:
      ({ dispatch }) =>
      (e) =>
        dispatch(toggleDrawer("CART")),
  })
)(HeaderMenu);
