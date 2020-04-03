import { compose } from 'recompose'
import withCheckout from '../../containers/withCheckout'
import CartItem from '../store/Cart/Item'
import Button from '../Button'

const AddedToCart = ({ checkout, onStep }) => {
  return (
    <div>
      <p>Items adicionados ao carrinho. Finalize seu pedido ou confira mais acessórios, como bolsas e alforges, e continue comprando em nossa <a href='/loja'>loja</a>.</p>
      <p>Aceitamos pagamentos via PayPal, com opção de 12x sem juros no cartão de crédito, cartão de débito ou boleto bancário.</p>
      <Button onClick={() => onStep(1)}>Configurar novamente</Button>
      <div className='items'>
        <table>
          <tbody>
            {checkout.lineItems.edges.map(item => <CartItem key={item.node.variant.id} item={item} />)}
          </tbody>
        </table>
      </div>
      <style jsx>{`
      .items {
        flex: 1;
        overflow: auto;
        min-height: 0;
        max-width: 100%;
      }
      .items table {
        border-spacing: 0 1rem;
      }
      `}</style>
    </div>
  )
}

export default compose(
  withCheckout
)(AddedToCart)
