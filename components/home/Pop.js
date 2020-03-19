import Link from 'next/link'
import { useState } from 'react'
import { offBlack, velaYellow } from '../../style/colors'
import Button from '../Button'
import { CloseIcon } from '../Icons'

const Pop = () => {
  const [closed, setClosed] = useState(false)
  if (closed) return false

  return (
    <div className='Pop'>
      <div className='close'>
        <CloseIcon onClick={() => setClosed(true)} />
      </div>
      <h3>Fique em casa</h3>
      <p>Alteração de funcionamento e medidas adotadas em prevenção ao COVID-19</p>
      <div className='action'>
        <Link href='https://velabikes.com.br/blog/medidas-preventivas-contra-o-coronavirus'><Button secundary>Saiba mais</Button></Link>
      </div>
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
    .close {
      width: 1.2em;
      position: absolute;
      right: 1.2em;
      top: 1.2em;
      cursor: pointer;
    }
    `}
      </style>
    </div>
  )
}

export default Pop
