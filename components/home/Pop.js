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
      <div className='close' onClick={() => setClosed(true)}>
        <CloseIcon color={offBlack} />
      </div>
      <h3>Comunicado!</h3>
      <br />
      <h6>Em razão das festividades de final de ano nossos produtos serão enviados a partir de Janeiro e nossa loja estará fechada até 04/01.</h6>
      <br />
      <p><small>O <b>atendimento online</b> segue de seg à sex das 10h às 17h.</small></p>
      <h2>Boas Festas!</h2>
      <style jsx>{`
    .Pop {
        background-color: ${'white'};
        padding: 2em;
        position: fixed;
        left: 3em;
        bottom: 3em;
        z-index: 3;
        max-width: 14em;
    }
    h2 {
      color: ${velaGreen};
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
