import { compose } from 'recompose'
import withCheckout from '../../containers/withCheckout'
import CartItem from '../store/Cart/Item'
import { offWhite, velaBlue } from '../../style/colors'

const AddedToCart = ({ checkout }) => {
  return (
    <div>
      <h3>Itens adicionados ao carrinho!</h3>
      <h4>Reserve sua Vela 2 e pague o restante quando recebê-la.</h4>
      <div className='conditions'>
        <p>1. Pague agora R$ 100,00 adiantados (mais quaisquer acessórios e/ou custos de frete).</p>
        <p>2. Cobraremos os <b>R$ 7.490,00</b> restantes apenas quando sua bike for entregue.</p>
        <p>3. Sem taxas adicionais - <i>o valor total é o mesmo.</i></p>
        <p>4. A reserva é reembolsável a qualquer momento antes da entrega.</p>
      </div>
      <p>Aceitamos pagamentos via PayPal em até 12x sem juros no cartão de crédito.</p>
      {checkout && !checkout.lineItems.edges.length ? 
      <p>Seu carrinho está vazio.</p> : 
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
      .conditions {
        background-color: ${offWhite};
        padding: 1em;
        margin-bottom: 1em;
      }
      .conditions p{
        font-size: 0.9em;
      }
      `}</style>
    </div>
  )
}

export default compose(
  withCheckout
)(AddedToCart)
