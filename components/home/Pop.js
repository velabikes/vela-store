import Link from 'next/link'
import { useState } from 'react'
import { lightGray, offWhite, offBlack } from '../../style/colors'
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
        <Link href='https://velabikes.com.br/blog/medidas-preventivas-contra-o-coronavirus'><Button primary>Saiba mais</Button></Link>
      </div>
      <style jsx>{`
    .Pop {
        background-color: ${offBlack};
        padding: 2em;
        position: absolute;
        left: 2em;
        top: 55vh;
        z-index: 1;
        max-width: 16.4em;
    }
    h3 {
        color: ${lightGray};
    }
    p {
        color: ${offWhite};
    }
    .close {
      width: 1.5em;
      position: absolute;
      right: 1.5em;
      top: 1.5em;
      cursor: pointer;
    }
    `}
      </style>
    </div>
  )
}

export default Pop
