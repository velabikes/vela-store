import { compose } from 'recompose'
import withCheckout from '../../containers/withCheckout'
import CartItem from '../store/Cart/Item'
import { velaBlue } from '../../style/colors'

const AddedToCart = ({ checkout }) => {
  return (
    <div>
      <h3>Itens adicionados ao carrinho!</h3>
      <p>Finalize o pedido de seu Pacote Anual de Aluguel.</p>
      <p><b>Os acessórios adicionados ao pedido não serão alugados e sim vendidos.</b></p>
      <p>Aceitamos pagamentos via PayPal em até 12x sem juros no cartão de crédito.</p>
      {checkout && !checkout.lineItems.edges.length ? 
      <p>Seu carrinho está vazio!</p> : 
      <h5>Confira e revise os itens do pedido para finalizar:</h5>
      }
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
