import { compose } from 'recompose'
import withCheckout from '../../containers/withCheckout'
import CartItem from '../store/Cart/Item'
import Button from '../Button'
import { velaBlue } from '../../style/colors'

const AddedToCart = ({ checkout, onStep }) => {
  return (
    <div>
      <p><b>Items adicionados ao carrinho!</b></p>
      <p>Finalize seu pedido ou confira mais acessórios, como bolsas e alforges, e continue comprando em nossa <a href='/loja'>loja</a>.</p>
      <p>Aceitamos pagamentos via PayPal, com opção de 12x sem juros no cartão de crédito, cartão de débito ou boleto bancário.</p>
      <div className='another' onClick={() => onStep(1)}>Adicionar outra unidade</div>
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
      .another {
        color: ${velaBlue};
        cursor: pointer;
      }
      `}</style>
    </div>
  )
}

export default compose(
  withCheckout
)(AddedToCart)
