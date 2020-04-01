import Price from '../Price'

const data = [
  {
    sku: 'VEL-BD-20',
    title: 'Bagageiro Dianteiro',
    image: '',
    price: 389
  },
  {
    sku: 'VEL-BAT19',
    title: 'Bagageiro Traseiro',
    image: '',
    price: 169
  },
  {
    sku: 'VEL-RTV19',
    title: 'Retrovisor',
    image: '',
    price: 39
  }
]

const Item = ({ title, price, image }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <Price value={price} />
    </div>
  )
}

const ExtraSelector = () => {
  return (
    data.map(Item)
  )
}

export default ExtraSelector
