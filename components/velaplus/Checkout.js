import { offWhite } from "../../style/colors";

const Checkout = () => {
  return (
    <div className="root">
      <div className="limiter">
        <div className="box">
          <div className="list">
            <ul>
              <li>proteção</li>
              <li>rastreamento</li>
              <li>10%</li>
              <li>20%</li>
              <li>30%</li>
              <li>L&T</li>
              <li>promoção</li>
              <li>frete</li>
              <li>reserva</li>
            </ul>
          </div>
          <div className="buy">
            <p>TÍTULO AQUI SERIA BOM</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .root {
          background: linear-gradient(221.51deg, #8ecec9 1.22%, #8acca8 100%);
        }
        .limiter {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
          padding: 128px 0px;
        }
        .box {
          background: #f5f1ec;
          padding: 16px;
        }
      `}</style>
    </div>
  );
};

export default Checkout;
