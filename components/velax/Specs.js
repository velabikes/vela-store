import React from "react";
import { offBlack, offWhite } from "../../style/colors";

const Specs = ({ maskSize }) => {
  return (
    <div className="Specscontainer">
      <div className="specs-content">
        <table className="table-specs">
          <tbody>
            <tr>
              <th colSpan="2">
                <h2>Mecânica</h2>
              </th>
            </tr>

            <tr className="tr-specs">
              <td className="td-specs">Quadro</td>
              <td className="td-specs">
                Diamante Vela X - Aço liga 4130 CrMo - Chromoly e Hi-Ten (SAE
                1040) em 3 tamanhos.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Garfo Amortecedor</td>
              <td className="td-specs">
                Hidráulica com calibragem pneumática, bengalas e crown em liga
                de alumínio, amortecimento com 100mm de curso e peso 1.730g.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Pintura</td>
              <td className="td-specs">
                Eletrostática com verniz fosco. Qualquer cor, desde que seja
                preto.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Tamanhos</td>
              <td className="td-specs">
                M: 1,64 à 1,75m | G: 1,75 à 1,85m | GG: 1,85 à 2,10m
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Peso</td>
              <td className="td-specs"> Bike: 21-23kg | Bateria: 2,1kg</td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Rodas</td>
              <td className="td-specs">
                Aros com parede dupla de alumínio 6061 com 36 raios. Raiação
                reforçada em inox trefilado.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Pneus</td>
              <td className="td-specs">
                Largura de 45mm, urbanos e com fitas antifuro de fábrica.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Luzes</td>
              <td className="td-specs">
                Farol dianteiro: LED de alto brilho CREE | Lanterna Traseira:
                LED com refletor. Ambos integrados com o sistema.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Relação</td>
              <td className="td-specs">Single speed: 44x18T.</td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Freios</td>
              <td className="td-specs">
                Disco 160mm Dianteiro e V-brake + Eletromagnético do motor na
                roda traseira.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Manoplas</td>
              <td className="td-specs">100% Silicone.</td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Corrente</td>
              <td className="td-specs">KMC, inoxidável com powerlink.</td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Selim</td>
              <td className="td-specs">
                Ergonômico com molas e revestimento vegano.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="specs-tech-content">
        <table className="table-specs">
          <tbody>
            <tr>
              <th colSpan="2">
                <h2>Eletrônica</h2>
              </th>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Velocidade</td>
              <td className="td-specs">Até 32 km/h no modo Boost.</td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Autonomia</td>
              <td className="td-specs">
                De 20 até 40km que varia de acordo com diversos fatores,
                incluindo modos de condução e uso do boost. A média global de
                autonomia dos nossos clientes é de 30km com uma recarga.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Bateria</td>
              <td className="td-specs">
                Integrada de lítio e removível | 378Wh de capacidade | 2.1kg |
                Projeto Vela com 2 anos de garantia.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Carregador</td>
              <td className="td-specs">
                75W | Recarga completa em até 4 horas | Compatível com recarga
                rápida: 50% em 30 minutos.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Conectividade</td>
              <td className="td-specs">Bluetooth 4.2, WiFi, GPS e GSM</td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Segurança</td>
              <td className="td-specs">
                Alarme com sensor de movimento | Bloqueio eletromagnético |
                Notificações no app | Rastreamento GPS com o plano Vela+.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Aplicativo</td>
              <td className="td-specs">
                Android e iOS| Configuração da Vela, mapa, modos de condução e
                atualizações de performance.
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Motor</td>
              <td className="td-specs">
                550W, traseiro e com frenagem eletromagnética. 45Nm de torque.{" "}
              </td>
            </tr>
            <tr className="tr-specs">
              <td className="td-specs">Garantia</td>
              <td className="td-specs">
                Contra defeitos de fabricação. Completa: 1 ano | Bateria: 2 anos
                | Quadro: 3 anos | Legal: 90 dias de acordo com o Código de
                Defesa do Consumidor (lei 8078/1990).
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .Specsdcontainer {
          maring-top: 100vh;
        }

        .specs-content,
        .specs-tech-content {
          background-color: #ede6de;
          text-align: left;
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 1em 0.5em 0 0.5em;
        }

        .Specsimage {
          z-index: 99;
        }
    
        }
        .table-specs {
          border-collapse: collapse;
          margin: 2em 0;
          font-size: 0.8em;
          font-weight: 200;
          width: 100%;
        }

        .th-specs {
          background: red;
          text-align: left;
          color: ${offWhite};
        }

        .th-specs,
        .td-specs {
          padding: 1em;
          font-size: 1em;
          color: ${offBlack};
        }

        .tr-specs:nth-child(even) {
          background: ${offWhite};
        }

        .specs-content h2,
        .specs-tech-content h2 {
          margin: 2 0em;
          font-size: 2em;
        }
      `}</style>
    </div>
  );
};

export default Specs;
