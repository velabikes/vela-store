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

const Store = ({
  collection,
  isCollectionLoading,
  collectionError,
  router,
}) => {
  const [filter, setFilter] = useState(null);
  const products = collection?.products?.edges;
  const filteredProducts = products?.filter((i) =>
    i.node.title.includes(filter)
  );
  const isLiquidacao = router.asPath == "/loja/liquidacao";

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
        {isLiquidacao && (
          <>
            <div className="banner">
              <img src="/images/banner-liquidacao.png" alt="Banner da página" />
            </div>
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
          className="list"
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
            margin-top: 1em;
            margin-bottom: 3em;
            margin-left: 1em;
            font-size: 1rem;
          }
          .banner {
            margin-bottom: 2em;
          }
          .list {
            margin-top: 2em;
          }
        `}
      </style>
    </PaddedView>
  );
};

const descriptionDictionary = {
  [null]:
    "As unidades da Liquidação, incluindo as unidades de Outlet e Seminovas, serão entregues atualizadas para Vela 2 modeo 2024, com 50% mais potêcnia (550W), velocidade final de 32km/h com baterias novas, acessórios novos e protegidas sob garantia completa fornecida pela própria Vela: 1 ano para todos os componentes, 2 anos para a bateria e motor, 3 anos para o quadro.",
  Outlet:
    "Unidades novas que podem possuir algum detalhe estético irregular, normalmente um arranhão na pintura ou marca gerada durante alguma etapa da montagem. Elas não atendem nosso padrão de qualidade para serem vendidas como novas, mas tem perfeitas condições de funcionamento e incluem todas as atualização 2024 e garantia completa fornecida pela própria Vela: 1 ano para todos os componentes, 2 anos para a bateria e motor, 3 anos para o quadro.",
  Seminova:
    "Unidades que já rodaram alguns quilômetros além do teste padrão da Vela. A origem delas pode variar desde bikes que eram da nossa frota de experimentação, test-ride, vitrine, até unidades que recebemos como base de troca na compra de uma nova uniadde, por exemplo. Também incluem todas as atualizações 2024 e garantia completa fornecida pela própria Vela: 1 ano para todos os componentes, 2 anos para a bateria e motor, 3 anos para o quadro.",
  Nova: "Poucas unidades 100% novas que finalizamos nas últimas semanas. Não possuem detalhes ou marcas estéticas irregulares, mas também querem participar dessa grande festa! Incluem garantia completa fornecida pela própria Vela: 1 ano para todos os componentes, 2 anos para a bateria e motor, 3 anos para o quadro.",
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
