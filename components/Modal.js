import React, { useEffect } from "react";
import SubscribeForm from 'components/SubscribeForm'
import { white } from 'style/colors'
import { offBlack, offWhite } from "../style/colors"
import { CloseIcon } from './Icons'

const Modal = ({ show, onClose }) => {
  if (!show) return <></>;

  return (
    <div className="modalBackground" onClick={onClose} >
      <div className="modalContainer">
        <div className='close'>
          <CloseIcon color={offWhite} onClick={onClose} />
        </div>
        <div className="modalContent">
          <div className="modalPic">
            <img src="https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FPrimeira-Compra-Vela.jpg?alt=media&token=bb00c666-4910-438c-acf2-c75d54716d90" alt="Primeira compra Vela Bikes" />
          </div>
          <div className="modalText">
            <div>
              <h2>Seja bem-vindo à Vela</h2>
              <h3>Inscreva-se e ganhe R$ 500 de desconto na sua Vela 2!</h3>
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
          top: 0;
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
          z-index: 4;
        }
        .modalContainer {
          position: relative;
          margin: auto 1em;
          z-index: 3;
          width: 90%;
        }
        .modalContent {
          display: flex;
          flex-direction: row-reverse;
          background-color: ${white};
        }
        .modalText {
          padding: 2em;
          color: ${offBlack}
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
        }
        @media only screen and (min-width: 768px) {
          .modalContainer {
            width: 50vw;
            padding-bottom: 5em;
          }
          .modalText {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;
