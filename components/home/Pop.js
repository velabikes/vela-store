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
      <p>Agenda de serviços 2020 fechada. Novos agendamentos serão feitos para janeiro.</p>
      <small>Os horários de atendimento são: de segunda à sexta, das 10h às 18h (menos nos dias 24, 25, 30 e 01).</small>
      <style jsx>{`
    .Pop {
        background-color: ${velaYellow};
        padding: 2em;
        position: fixed;
        left: 1.5em;
        bottom: 1.5em;
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
