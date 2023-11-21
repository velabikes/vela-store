import { velaRed } from "../../style/colors";
import withCheckoutLineItemsAdd from "../../containers/withCheckoutLineItemsAdd";
import withCheckout from "../../containers/withCheckout";
import { useState, useEffect } from "react";
import { compose } from "recompose";

const Checkout = ({
  checkout,
  checkoutLineItemsAdd,
  handleCheckoutCreation,
}) => {
  const [mustRedirect, setMustRedirect] = useState(false);
  useEffect(() => {
    if (mustRedirect) {
      window.location.replace(checkout.webUrl);
    }
  }, [mustRedirect, checkout]);
  const handleVelaPlusCta = async () => {
    const checkoutId = await handleCheckoutCreation();
    await checkoutLineItemsAdd({
      variables: {
        checkoutId,
        lineItems: {
          variantId:
            "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI3ODk3OTc0Mzc5OQ==",
          quantity: 1,
        },
      },
    });
    setMustRedirect(true);
  };

  return (
    <div className="root">
      <div className="limiter">
        <div className="box">
          <div className="list">
            <h2 className="mobile">Tudo que sua Vela precisa:</h2>
            <ul>
              <li>+ Proteção contra roubo e furto</li>
              <li>+ Proteção contra acidentes</li>
              <li>+ Rastreamento AirTag ou SmartTag</li>
              <li>+ 10% OFF em novas bikes</li>
              <li>+ 20% OFF em serviços e acessórios</li>
              <li>+ 30% OFF em cadeados e baterias</li>
              <li>+ Serviços Leva&Traz gratuitos*</li>
              <li>+ Promoções exclusivas</li>
              <li>+ Frete grátis no site Vela</li>
              <li>+ Vela reserva de reposição*</li>
            </ul>
            <small>*Consulte a disponibilidade na sua região.</small>
          </div>
          <div className="buy">
            <h2 className="desktop">Tudo que sua Vela precisa está aqui.</h2>
            <div className="button-action">
              <h3>
                Apenas <p>R$ 79/mês</p>
              </h3>
              <p>Pacote anual parcelado em até 12x sem juros no cartão.</p>
              <div className="button-svg">
                <img onClick={handleVelaPlusCta} src="/plus/button.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .root {
          background: linear-gradient(221.51deg, #8ecec9 1.22%, #8acca8 180%);
        }
        .limiter {
          max-width: 1200px;
          margin: 0 auto;
          padding: 128px 0px;
        }
        .box {
          background: #f5f1ec;
          padding: 16px;
        }
        .list li {
          list-style-type: none;
          font-size: 16px;
          padding-top: 12px;
          padding-bottom: 12px;
          font-weight: 700;
          border-bottom: 1px solid #d2c9bd;
         
        }

        small {
          margin-left: 5%;
          font-style: italic;
        }

        h2 {
       
          font-size: 40px;
          font-weight: 700;
          line-height: 48px;
        
          margin-top: 30%;
          padding: 16px;
          margin-bottom: 10%;
        }

        .mobile {
          display: none;
        }

        h3 {
          color: ${velaRed};
          font-size: 24px;
          font-weight: 700;
          line-height: 28.8px;
        }
        .button-action {
          padding: 16px;
          border: 2px solid #d2c9bd;
          font-weight: 700;
          font-size: 20px;
        }
        .price {
          text-decoration: line-through;
          color: ${velaRed};
          font-size: 24px;
          font-weight: 700;
          line-height: 28.8px;
        }
        .button-action img {
          width: 25%;
          height: auto;
          margin-left: 0px;
        }

        .button-svg {
          cursor: pointer;
        }

        @media (min-width: 880px) {
          .box {
            display: flex;
            justify-content: space-between;
          }

          .list,
          .buy {
            width: 45%;
          }
        }

        @media (max-width: 880px) {
          .limiter {
            padding: 32px 32px;
          }

          h2 {
            padding: 0px;
          }

          .list {
            padding-top: 50px;
          
          }

          ul {
            padding-top: 30px;
            padding-left: 0px;
          }

          .mobile {
            display: initial;
          }

          .desktop {
            display: none;
          }

          .buy {
            margin-top: 15%;
          }

          .button-action img {
          width: 25%;
          height: auto;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default compose(withCheckout, withCheckoutLineItemsAdd)(Checkout);
