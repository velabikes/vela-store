import Link from 'next/link'
import { useState } from 'react'
import { offWhite, offBlack, velaYellow, velaGreen } from '../../style/colors'
import Button from '../Button'
import { CloseIcon } from '../Icons'

const Pop = () => {
  const [closed, setClosed] = useState(false)
  if (closed) return true

  return (
    <div className='Pop'>
      <div className='close'>
        <CloseIcon color={offBlack} onClick={() => setClosed(true)} />
      </div>
      <h3>Aviso!</h3>
      <h6>Por conta da segunda onda do COVID-19, nossas lojas estão fechadas até 30/03.</h6>
      <p><small>O <b>atendimento online</b> segue de seg à sex das 10h às 18h.</small></p>
      <style jsx>{`
    .Pop {
        background-color: ${velaYellow};
        padding: 2em;
        position: fixed;
        right: 2em;
        bottom: 2em;
        z-index: 3;
        max-width: 14em;
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
