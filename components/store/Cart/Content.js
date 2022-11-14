import PropTypes from 'prop-types'
import { compose, branch, renderComponent } from 'recompose'
import CartItem from 'components/store/Cart/Item'
import CartPrice from 'components/store/Cart/Price'
import Button from 'components/Button'

const CartContent = ({ checkout }) =>
  <section className='CartContent'>
    <h1>Carrinho</h1>
      <div className='items'>
          {checkout && checkout.lineItems.edges.map(item => <CartItem key={item.node.variant.id} item={item} />)}
      </div>
      <hr />
      <div className='price'>
        <CartPrice checkout={checkout} />
    </div>
    <div className='footer'>
      <small />
      <Button primary onClick={() => window.location.replace(checkout.webUrl)}>Finalizar compra</Button>
    </div>
    <style jsx>{`
      .CartContent {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
      .items {
        flex: 1;
        overflow: auto;
        min-height: 0;
        max-width: 100%;
        margin-top: 1em;
        text-align:right;
      }
      .items table {
        border-spacing: 0 1rem;
      }
      .footer {
        padding-top: 1em;
        align-self: center;
      }
    `}</style>
  </section>

CartContent.propTypes = {
  checkout: PropTypes.object
}

export default compose(
  branch(
    ({ checkout }) => checkout && !checkout.lineItems.edges.length,
    renderComponent(props => <div>O carrinho de compras está vazio.</div>)
  ),
  branch(
    ({ checkout, loading }) => !checkout,
    renderComponent(props => <div>Carregando...</div>)
  )
)(CartContent)
