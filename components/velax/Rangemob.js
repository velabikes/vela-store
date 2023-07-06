import React, { useState } from "react";
import {
  lightGreen,
  velaBlue,
  velaGreen,
  offWhite,
  offBlack,
  midGray,
  lightGray,
  darkGray,
} from "../../style/colors";

const Rangemob = () => {
  const [imagemVisivel, setImagemVisivel] = useState("/velax/sp.webp");

  const imagens = [
    "/velax/sp.webp",
    "/velax/rj.webp",
    "/velax/bh.webp",
    "/velax/bsb.webp",
    "/velax/gyn.webp",
    "/velax/cwb.webp",
    "/velax/cpq.webp",
    "/velax/ssa.webp",
    "/velax/poa.webp",
    "/velax/fln.webp",
  ];

  const exibirImagem = (index) => {
    const fadeElements = document.getElementsByClassName("fade");
    for (let i = 0; i < fadeElements.length; i++) {
      fadeElements[i].classList.remove("active");
    }
    fadeElements[index].classList.add("active");
    setImagemVisivel(imagens[index]);
  };

  const obterTextoBotao = (imagem) => {
    const nomeImagem = imagem.substring(
      imagem.lastIndexOf("/") + 1,
      imagem.lastIndexOf(".")
    );
    return nomeImagem.toUpperCase();
  };

  const larguraBotao = 100 / imagens.length;

  return (
    <div className="container">
      <div className="content-container">
        <div className="image-container">
          {imagens.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              alt="Imagem"
              className={`fade ${imagemVisivel === imagem ? "active" : ""}`}
            />
          ))}
        </div>
      </div>

      <div className="buttons-container">
        {imagens.map((imagem, index) => (
          <button
            key={index}
            onClick={() => exibirImagem(index)}
            className={imagemVisivel === imagem ? "selecionado" : ""}
            style={{
              zIndex: 2,
              position: "absolute",
              left: `${index * larguraBotao}%`,
              width: `${larguraBotao}%`,
            }}
          >
            {obterTextoBotao(imagem)}
          </button>
        ))}
      </div>

      <div className="text-container">
        <h2>Vai longe.</h2>
        <p>
          A bateria da Vela pesa apenas 2kg e tem autonomia de até 40km. Com
          apenas uma carga você pedala a cidade de ponta a ponta.
        </p>
      </div>

      <style jsx>{`
        .container {
          position: relative;
          flex-direction: collum;
          align-items: center;
          height: 95vh;
          margin-top: 0vh;
          margin-left: 0vh;
        }

        .buttons-container {
          justify-content: space-between;
          display: flex;
          margin-right: 3vw;
          margin-left: 3vw;
          width: 94vw;
          top: 65vh;
        }

        button {
          padding: 0.6vw;
          margin: 0 0.1vw;
          background-color: #ebbd99;
          border: none;
          border-radius: 0px;
          color: ${darkGray};
          font-size: 2.5vw;
          font-family: filson-pro;
          cursor: pointer;
        }

        button.selecionado {
          background-color: ${lightGreen};
          color: ${offBlack};
        }

        .content-container {
          position: relative;
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          height: 60vh;
        }

        .image-container {
          margin-top: 0vh;
          margin-right: 0;
          maring-bottom: 3vh;
          width: 100%;
          height: 100%;
          position: relative;
        }

        img {
          object-fit: cover;
          height: 100%;
          position: absolute;
          opacity: 0;
          transition: opacity 0.01s ease-in-out;
        }

        img.active {
          opacity: 1;
        }

        .text-container {
          margin-left: 10vw;
          margin-top: 8vh;
          margin-right: 4vw;
          width: 75vw;
          font-size: 4vw;
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default Rangemob;
