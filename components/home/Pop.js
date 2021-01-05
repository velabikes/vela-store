import Link from 'next/link'
import { useState } from 'react'
import { offWhite, offBlack, velaYellow } from '../../style/colors'
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
      <h3>AVISO</h3>
      <p>Loja de São Paulo fechada!</p>
      <small>Por conta da segunda onda do COVID-19, nossa loja está fechada até 20/01/2021. Prezamos pela saúde da nossa equipe e de todos os Velejadores.</small>
      <style jsx>{`
    .Pop {
        background-color: ${velaYellow};
        padding: 2em;
        position: fixed;
        right: 2.5em;
        bottom: 3em;
        z-index: 3;
        max-width: 16.4em;
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
