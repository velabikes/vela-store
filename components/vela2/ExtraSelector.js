import Price from '../Price'

const ExtraData = [
  {
    sku: 'teste1',
    title: 'acessorio 1',
    image: 'http://asdf',
    price: 123123
  }
]

const Item = () => {
  return (
    <div>
      <img src="" />
      <h2>Titulo</h2>
      <Price value={123} />
    </div>
  )
}

const ExtraSelector = () => {
  return (
    <div>
      <Item />
    </div>
  )
}

export default ExtraSelector
