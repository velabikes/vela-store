import React, {useState} from 'react'
import { compose } from 'recompose'
import withCheckout from '../../containers/withCheckout'
import CartItem from '../store/Cart/Item'
import { velaBlue } from '../../style/colors'
import Checkbox from '../Checkbox'

const AddedToCart = ({ checkout, checked, onCheck, toggleButton, activeButton }) => {
  return (
    <div>
      <h3>Itens adicionados ao carrinho!</h3>
      <p>Finalize o pedido do seu Pacote Aluguel Anual da Vela 2.</p>
      <p><b>Os acessórios adicionados ao pedido não serão alugados e sim vendidos.</b></p>
      <p>Aceitamos pagamentos via PayPal em até 12x de R$ 289/mês no cartão de crédito.</p>
      {checkout && !checkout.lineItems.edges.length ? 
      <p>Seu carrinho está vazio!</p> : 
      <h5>Revise os itens do pedido para finalizar:</h5>
      }
      <div className='items'>
        <table>
          <tbody>
            {checkout.lineItems.edges.map(item => <CartItem key={item.node.variant.id} item={item} />)}
          </tbody>
        </table>
      </div>
      <div>
        <label>
          <Checkbox
            onChange={() => onCheck(!checked) + toggleButton(!activeButton)}
          />
          <span>Eu concordo com os <a href='/termosdealuguel' target='_blank'>Termos de Serviço de Aluguel</a> da Vela 2.</span>
          <br/><small style={{color: 'red'}}> A contratação do aluguel está fechada. Aguarde nova disponibilidade.</small>
        </label>
        <h6>Após pagamento, a contratação será concluída mediante análise de crédito. As informações para análise serão requeridas por e-mail.</h6>
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
      h5 {
        padding-bottom: 0;
      }
      h6 {
        padding-top: 1em;
        line-height: 1.5;
        padding-bottom: 0;
      }
      `}</style>
    </div>
  )
}

export default compose(
  withCheckout
)(AddedToCart)
