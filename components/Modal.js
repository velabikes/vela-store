import React, { useEffect } from "react";
import { getCurrentScrollPosition } from '../lib/scroll';
import SubscribeForm from 'components/SubscribeForm'
import { white } from 'style/colors'
import { offBlack, velaGreen } from "../style/colors"
import { CloseIcon } from './Icons'

const Modal = ({ show, onClose }) => {
  if (!show) return <></>;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className='close' onClick={onClose}>
          <CloseIcon color={velaGreen} />
        </div>
        <div className="modalContent">
          <div className="modalPic">
            <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FPrimeira-Compra-Vela.jpg?alt=media&token=bb00c666-4910-438c-acf2-c75d54716d90" alt="Primeira compra Vela Bikes" />
          </div>
          <div className="modalText">
            <div>
              <h2>Seja bem-vindo à Vela</h2>
              <h3>Inscreva-se e ganhe 5% de desconto no seu primeiro pedido em todo o nosso site!</h3>
              <p>Fique por dentro das novidades e seja o(a) primeiro(a) a saber sobre nossas promoções. Vamos velejar?</p>
            </div>
            <div className="form">
              <SubscribeForm />
              <br />
              <p><small>Ao me inscrever, concordo com a <a href="/legal">Política de Privacidade</a> da Vela Bikes e entendo que posso cancelar a minha inscrição a qualquer momento.</small></p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .modalBackground {
          position: absolute;
          top: ${getCurrentScrollPosition()}px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(45, 45, 45, 0.8);
          display: flex;
          justify-content: center;
          align-items: flex-start;
          height: 100vh;
          width: 100%;
          min-height: 100vh;
          z-index: 200;
        }
        .modalContainer {
          position: relative;
          margin: auto 1em;
          z-index: 3;
          width: 90%;
        }
        .modalContent {
          display: flex;
          flex-direction: column;
          background-color: ${white};
        }
        .modalText {
          padding: 2em;
          color: ${offBlack}
        }
        .modalPic img {
          display: none;
        }
        .modalText h3 {
          color: ${offBlack}
        }
        small {
          color: ${offBlack};
          line-height: 0.5em;
        }
        .close {
          width: 1.2em;
          position: absolute;
          right: 1.2em;
          top: 1.2em;
          cursor: pointer;
          z-index: 5;
        }
        @media only screen and (min-width: 768px) {
          .modalContainer {
            width: auto;
            padding-bottom: 1em;
          }
          .modalContent {
            flex-direction: row-reverse;
          }
          .modalPic img {
            display: block;
            max-width: 20em;
            min-width: 20em;
          }
          .modalText {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-width: 20em;
            max-width: 20em;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
