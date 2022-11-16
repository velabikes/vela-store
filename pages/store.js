import PropTypes from "prop-types";
import Head from "next/head";
import { withRouter } from "next/router";
import { compose } from "recompose";
import Main from "components/Main";
import MainHeader from "components/MainHeader";
import ProductList from "../components/store/ProductList";
import PaddedView from "../components/PaddedView";
import withCollectionByHandle from "../containers/withCollectionByHandle";
import {
  darkGray,
  lightGray,
  lightGreen,
  midGray,
  offBlack,
  offWhite,
  velaGreen,
  velaRed,
  white,
} from "../style/colors";
import { useState } from "react";

const Store = ({ collection, isCollectionLoading, router }) => {
  const [filter, setFilter] = useState(null);
  const onSelectedFilter = (selectedFilter) =>
    setFilter(filter === selectedFilter ? null : selectedFilter);
  const products = collection?.products?.edges;
  const filteredProducts = products?.filter((i) =>
    i.node.title.includes(filter)
  );
  const isBf22 = router.asPath == "/loja/bf22";

  return (
    <PaddedView>
      <Main>
        <Head>
          <title>{collection && collection.title} - Vela Bikes</title>
        </Head>
        <div className="title">
          <MainHeader title={collection && collection.title} />
          <h2>{collection && collection.descriptionHtml}</h2>
        </div>
        {isBf22 && (
          <div className="filter-container">
            <div
              onClick={() => onSelectedFilter("Outlet")}
              className={filter === "Outlet" && "selected"}
            >
              <h3>Outlet</h3>
            </div>
            <div
              onClick={() => onSelectedFilter("Seminova")}
              className={filter === "Seminova" && "selected"}
            >
              <h3>Seminovas</h3>
            </div>
            <div
              onClick={() => onSelectedFilter("Nova")}
              className={filter === "Nova" && "selected"}
            >
              <h3>Novas</h3>
            </div>
          </div>
        )}
        <br />
        <ProductList
          products={filter ? filteredProducts : products}
          loading={isCollectionLoading}
        />
      </Main>
      <style jsx>
        {`
          .title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .title p {
            margin-top: 0.8em;
          }
          .filter-container {
            display: flex;
            flex-direction: row;
            width: 80%;
          }
          .filter-container * {
            color: ${white} !important;
            background-color: ${midGray};
            width: 60%;
            border-radius: 0.5em;
            margin-top: 0.5rem;
            margin-left: 2em;
            margin-right: 2em;

            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
          }
          .selected * {
            color: ${velaRed} !important;
          }
        `}
      </style>
    </PaddedView>
  );
};

export default compose(
  withRouter,
  withCollectionByHandle(({ router }) => router.query.handle || "acessorios", {
    filterUnavailable: false,
  })
)(Store);
Store.propTypes = {
  collection: PropTypes.object,
  isCollectionLoading: PropTypes.bool,
};
