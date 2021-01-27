import Link from 'next/link'
import { useState } from 'react'
import { offWhite, offBlack, velaYellow, velaGreen } from '../../style/colors'
import Button from '../Button'
import { CloseIcon } from '../Icons'

const Pop = () => {
  const [closed, setClosed] = useState(false)
  if (closed) return false

  return (
    <div className='Pop'>
      <div className='close'>
        <CloseIcon background={offWhite} onClick={() => setClosed(true)} />
      </div>
      <h3>Aviso loja de São Paulo!</h3>
      <p>Por conta da segunda onda do COVID-19, nossa loja está funcionando apenas com horário agendado. Mande uma mensagem no chat.</p>
      <p><small>O <b>atendimento online</b> e <b>serviço Leva & Traz</b> seguem normais de seg à sex das 10h às 18h!</small></p>
      <style jsx>{`
    .Pop {
        background-color: ${velaYellow};
        padding: 2em;
        position: fixed;
        right: 2em;
        bottom: 3em;
        z-index: 3;
        max-width: 15em;
    }
    h3 {
      color: ${offBlack};
    }
    p {
      color: ${offBlack};
    }
    small {
      color: ${offBlack};
    }
    .close {
      width: 1.2em;
      position: absolute;
      right: 1.2em;
      top: 1.2em;
      cursor: pointer;
    }
    .action {
      margin-top: 1em;
    }
    `}
      </style>
    </div>
  )
}

export default Pop
