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

const Range = () => {
  const [imagemVisivel, setImagemVisivel] = useState("/velax/sp.png");

  const imagens = [
    "/velax/sp.png",
    "/velax/rj.png",
    "/velax/bh.png",
    "/velax/bsb.png",
    "/velax/gyn.png",
    "/velax/cwb.png",
    "/velax/cpq.png",
    "/velax/ssa.png",
    "/velax/poa.png",
    "/velax/fln.png",
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

  return (
    <div className="container">
      <div className="buttons-container">
        {imagens.map((imagem, index) => (
          <button
            key={index}
            onClick={() => exibirImagem(index)}
            className={imagemVisivel === imagem ? "selecionado" : ""}
            style={{
              zIndex: 2,
              position: "absolute",
              left: `${(index / imagens.length) * 100}%`,
            }}
          >
            {obterTextoBotao(imagem)}
          </button>
        ))}
      </div>
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
        <div className="text-container">
          <h2>Título do Texto</h2>
          <p>Este é um exemplo de texto que será exibido ao lado da imagem.</p>
        </div>
      </div>

      <style jsx>{`
        .container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          height: 80vh;
          margin-top: 5vh;
          margin-left: 5vw;
          margin-bottom: 7vh;
        }

        .buttons-container {
          position: absolute;
          display: flex;
          margin-right: 30vw;
          width: 45vw;
          top: 75vh;
        }

        button {
          padding: 0.6vw;
          margin: 0 0.1vw;
          background-color: ${lightGray};
          border: none;
          border-radius: 5px;
          color: ${darkGray};
          font-size: 1vw;
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
          height: 100%;
        }

        .image-container {
          margin-top: 3vh;
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
          transition: opacity 0.5s ease-in-out;
        }

        img.active {
          opacity: 1;
        }

        .text-container {
          margin-left: 4vw;
          margin-right: 4vw;
          width: 30vw;
        }
      `}</style>
    </div>
  );
};

export default Range;
