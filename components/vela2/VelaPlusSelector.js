import Price from '../Price'
import withCollectionByHandle from '../../containers/withCollectionByHandle'
import { offWhite, lightGreen, white, velaRed, velaGreen } from '../../style/colors'
import { AddIcon, CloseIcon } from '../Icons'

const ServiceItem = ({ node: { title, images, variants, handle, sku }, onSelect, selected }) => {
  const isSelected = selected.includes(variants.edges[0].node)

  return (
    <div onClick={() => onSelect(variants.edges[0].node)}>
      <div className='selector'>
        {isSelected === false && <AddIcon fill={white} />}
        {isSelected === true && <CloseIcon color={white} />}
      </div>
      <img src={images && images.edges[0].node.src} alt={title} />
      <h4>{title}</h4>
      <Price value={variants.edges[0].node.priceV2.amount} />
      <style jsx>{`
        div {
          max-width: 100%;
          margin: 0.7em 0;
          display: flex;
          flex-direction: column;
        }
        img {
          width: 100%;
          height: 10em;
          object-fit: cover;
          background-color: ${offWhite};
        }
        h4 {
          margin: 0;
          padding: 0.5em 0 0 0;
          line-height: 1.25em;
        }
        .selector {
          z-index: 1;
          align-self: flex-end;
          width: 1.5em;
          transition: 0.5s;
          cursor: pointer;
          border-radius: 2em;
          padding: 0.2em;
          margin-bottom: -1em;
          margin-right: -0.5em;
          background-color: ${lightGreen};
          ${isSelected === true &&
            `
          background-color: ${velaRed};
        `}
        }
      `}</style>
    </div>
  )
}

const VelaPlusSelector = ({ collection, onSelect, selected }) => {
  if (!collection) return <p />
  if (!collection.products) return <p />

  return (
    <>
      <h4>Proteja sua bike:</h4>
      <p>Assine o pacote anual do <a href="/velamais" target="_blank">Plano Vela+</a> em 12 parcelas mensais pra ter uma expecirência ainda melhor.</p>
      <div className="add">
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Proteção contra roubo e furto
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Notificações remotas
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Rastreamento GPS
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Descontos em produtos e serviços
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Funções e atualizações exclusivas
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Desconto em novas baterias
          </p>
          <p>
            <AddIcon style={{ width: "1.2em" }} />
            Benefícios com parceiros
          </p>
        </div>
      <div className='extraitems'>
      {collection.products.edges
          .map(product => (
            <ServiceItem
              onSelect={onSelect}
              selected={selected}
              {...product}
            />
          ))}
        </div>
        <style jsx>{`
          .core {
            background-color: ${offWhite};
            padding: 1em;
            margin-bottom: 1em;
          }
          .core p {
            font-size: 0.9em;
          }
          .extraitems {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            max-width: 100%;
            flex-wrap: wrap;
          }
          .add {
            padding: 1em 1em 0.5em 1em;
            border-radius: 10px;
            border: solid 2px ${velaGreen};
            margin-top: 1em;
            z-index: 2;
          }
          .add p {
            display: flex;
            flex-direction: row;
            align-items: center;
            font-size: 0.8em;
          }
        `}</style>
    </>
  )
}

export default withCollectionByHandle('velaplus', {
  filterUnavailable: false
})(VelaPlusSelector)
