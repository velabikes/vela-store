import PropTypes from "prop-types";
import Head from "next/head";
import { withRouter } from "next/router";
import { compose } from "recompose";
import Main from "components/Main";
import MainHeader from "components/MainHeader";
import ProductList from "../components/store/ProductList";
import PaddedView from "../components/PaddedView";
import withCollectionByHandle from "../containers/withCollectionByHandle";
import { midGray, velaRed, white } from "../style/colors";
import { useState } from "react";
import Button from "../components/Button";

const Store = ({ collection, isCollectionLoading, router }) => {
  const [filter, setFilter] = useState(null);
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
          <>
            <div className="filter-wrapper">
              <div className="filter-container">
                <Button
                  onClick={() => setFilter(null)}
                  secondary={filter === null}
                  outline
                >
                  Todas
                </Button>
                <Button
                  onClick={() => setFilter("Outlet")}
                  secondary={filter === "Outlet"}
                  outline
                >
                  Outlet
                </Button>
                <Button
                  onClick={() => setFilter("Seminova")}
                  secondary={filter === "Seminova"}
                  outline
                >
                  Seminovas
                </Button>
                <Button
                  onClick={() => setFilter("Nova")}
                  secondary={filter === "Nova"}
                  outline
                >
                  Novas
                </Button>
              </div>
              <div className="filter-description">
                {descriptionDictionary[filter]}
              </div>
            </div>
          </>
        )}
        <div />
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
          .filter-description {
            margin: 1rem 0;
            font-size: 0.8rem;
            max-width: 700px;
          }
        `}
      </style>
    </PaddedView>
  );
};

const descriptionDictionary = {
  [null]:
    "As unidades da Black Friday, incluindo as unidades de Outlet e Seminovas. serão entregues com baterias e acessórios novos e protegidas sob garantia completa fornecida pela própria Vela: 1 ano para todos os componentes, 2 anos para a bateria, 3 anos para o motor e 5 anos para o quadro.",
  Outlet:
    "Unidades novas que podem possuir algum detalhe cosmético, normalmente um arranhão na pintura ou marca gerada durante alguma etapa da montagem. Elas não atendem nosso padrão de qualidade para serem vendidas como novas, mas tem perfeitas condições de funcionamento.",
  Seminova:
    "Unidades que já rodaram alguns quilômetros além do teste padrão da Vela. A origem delas pode variar desde bikes que eram da nossa frota de experimentação, test-ride, vitrine até unidades da Vela 1 que recebemos como base de troca na compra de uma Vela 2, por exemplo.",
  Nova: "Poucas unidades 100% novas que finalizamos nas últimas semanas. Não possuem detalhes ou marcas, mas também querem participar dessa grande festa.",
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
