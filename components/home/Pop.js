import Link from 'next/link'
import { useState } from 'react'
import { offWhite, offBlack } from '../../style/colors'
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
      <h3>BATERIA EM DOBRO</h3>
      <p>Na compra de duas unidades da Vela 2 você ganha duas baterias extras!</p>
      <small>Para participar da promoção, monte as duas bikes e inclua as baterias extras na hora de escolher os acessórios. O desconto estará automaticamente aplicado ao finalizar.</small>
      <div className='action'>
        <Link href='/vela2'><a><Button primary>Participar</Button></a></Link>
      </div>
      <style jsx>{`
    .Pop {
        background-color: ${offBlack};
        padding: 2em;
        position: fixed;
        left: 1.5em;
        bottom: 1.5em;
        z-index: 3;
        max-width: 16.4em;
    }
    h3 {
      color: ${offWhite};
    }
    p {
      color: ${offWhite};
    }
    small {
      color: ${offWhite};
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
