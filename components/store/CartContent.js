import { compose, branch, renderComponent } from 'recompose'
import CartItem from './CartItem'
import CartPrice from './CartPrice'
import Button from '../Button'

const CartContent = ({ checkout }) =>
  <div className='CartContent'>
    <div className='items'>
      <table>
        <tbody>
          {checkout && checkout.lineItems.edges.map(item => <CartItem key={item.node.variant.id} item={item} />)}
        </tbody>
      </table>
    </div>
    <hr />
    <div className='price'>
      <CartPrice checkout={checkout} />
    </div>
    <div className='footer'>
      <small />
      <Button action onClick={() => window.location.replace(checkout.webUrl)}>Finalizar</Button>
    </div>
    <style jsx>{`
      .CartContent {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
      .items {
        flex: 1
      }
      .items table {
        border-spacing: 0 1rem;
      }
      .footer {
        padding-top: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `}</style>
  </div>

export default compose(
  branch(
    ({ checkout }) => checkout && !checkout.lineItems.edges.length,
    renderComponent(props => <div>Seu carrinho de compras está vazio.</div>)
  ),
  branch(
    ({ checkout, loading }) => !checkout,
    renderComponent(props => <div>Carregando...</div>)
  )
)(CartContent)
