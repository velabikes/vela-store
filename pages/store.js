import PropTypes from "prop-types";
import Head from "next/head";
import { withRouter } from "next/router";
import { compose } from "recompose";
import Main from "components/Main";
import MainHeader from "components/MainHeader";
import ProductList from "../components/store/ProductList";
import PaddedView from "../components/PaddedView";
import withCollectionByHandle from "../containers/withCollectionByHandle";
import { darkGray, velaGreen } from "../style/colors";
import { useState } from "react";

const Store = ({ collection, isCollectionLoading }) => {
  const [filter, setFilter] = useState(null);
  const onSelectedFilter = (selectedFilter) =>
    setFilter(filter === selectedFilter ? null : selectedFilter);
  const products = collection?.products?.edges;
  const filteredProducts = products?.filter((i) =>
    i.node.title.includes(filter)
  );

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
        <div className="filter-container">
          <div
            onClick={() => onSelectedFilter("Outlet")}
            className={filter === "outlet" && "selected"}
          >
            <h3>outlet</h3>
          </div>
          <div
            onClick={() => onSelectedFilter("Seminova")}
            className={filter === "seminova" && "selected"}
          >
            <h3>semi-nova</h3>
          </div>
          <div
            onClick={() => onSelectedFilter("Nova")}
            className={filter === "nova" && "selected"}
          >
            <h3>nova</h3>
          </div>
        </div>
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
            width: 100%;
          }
          .filter-container * {
            color: ${velaGreen} !important;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s ease;
          }
          .selected * {
            color: ${darkGray} !important;
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
