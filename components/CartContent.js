import { compose, branch, renderComponent } from 'recompose'
import CartItem from '../components/CartItem'
import CartPrice from '../components/CartPrice'

const CartContent = ({ checkout }) =>
  <div className='CartContent'>
    <div className='items'>
      <table>
        <tbody>
          {checkout && checkout.lineItems.edges.map(item => <CartItem key={item.node.variant.id} item={item} />)}
        </tbody>
      </table>
    </div>
    <div className='price'>
      <CartPrice checkout={checkout} />
    </div>
    <div className='footer'>
      <small></small>
      <button type='button' onClick={() => window.location.replace(checkout.webUrl)}>Finalizar</button>
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
    renderComponent(props => <div>Nao ha itens para exibir.</div>)
  ),
  branch(
    ({ checkout, loading }) => !checkout,
    renderComponent(props => <div>Carregando...</div>)
  )
)(CartContent)
