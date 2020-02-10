
import { compose } from 'recompose'
import withCheckout from '../containers/withCheckout'
import { velaGreen, velaBlue } from '../style/colors'

export const UserIcon = props => (
  <svg viewBox='0 0 27.05 27.04' width='1em' height='1em' {...props}>
    <title>User Icon</title>
    <g id='prefix__Camada_2' data-name='Camada 2'>
      <g id='prefix__Camada_1-2' data-name='Camada 1'>
        <g id='prefix__Grupo_39' data-name='Grupo 39'>
          <circle
            id='prefix__Elipse_1'
            style={{ fill: '#51776b' }}
            cx={13.52}
            cy={6.76}
            r={6.76}
          />
          <path
            id='prefix__Caminho_35'
            d='M27.05 27H0v-2.21c0-4.51 9-7 13.52-7S27 20.28 27 24.79z'
            style='fill: #51776b'
          />
        </g>
      </g>
    </g>
  </svg>
)

export const BackIcon = props =>
  <svg width='1em' height='1em' viewBox='0 0 15.583 15.175' {...props}>
    <path
      d='M14.583 6.593H3.413l4.88-4.88a1.008 1.008 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-6.59 6.59a1 1 0 0 0 0 1.41l6.59 6.59a1 1 0 1 0 1.41-1.41l-4.88-4.88h11.17a1 1 0 0 0 0-2z'
      fill='#3e5052'
    />
  </svg>

export const NextIcon = props =>
  <div className='NextIcon'>
    <svg width='1em' height='1em' viewBox='0 0 15.583 15.175' {...props}>
      <path
        d='M14.583 6.593H3.413l4.88-4.88a1.008 1.008 0 0 0 0-1.42 1 1 0 0 0-1.41 0l-6.59 6.59a1 1 0 0 0 0 1.41l6.59 6.59a1 1 0 1 0 1.41-1.41l-4.88-4.88h11.17a1 1 0 0 0 0-2z'
      />
    </svg>
    <style jsx>{`
      .NextIcon {
        display: inline-block;
        transform: rotate(180deg);
      }
    `}</style>
  </div>

export const MenuIcon = ({ ...props }) => (
  <svg viewBox='0 0 28.44 20.07' width='1em' height='1em' {...props}>
    <title>Menu Icon</title>
    <g id='prefix__Camada_2' data-name='Camada 2'>
      <g id='prefix__Camada_1-2' data-name='Camada 1'>
        <g id='prefix__Grupo_2' data-name='Grupo 2'>
          <g id='prefix__Grupo_2-2' data-name='Grupo 2-2'>
            <path
              id='prefix__Caminho_5'
              data-name='Caminho 5'
              className='prefix__cls-1'
              style={{ fill: '#51776b' }}
              d='M27.58 2.2H.86A1.13 1.13 0 0 1 0 .82 1.12 1.12 0 0 1 .86 0h26.72a1.13 1.13 0 0 1 .82 1.38 1.12 1.12 0 0 1-.82.82z'
            />
          </g>
          <g id='prefix__Grupo_3' data-name='Grupo 3'>
            <path
              id='prefix__Caminho_6'
              data-name='Caminho 6'
              style={{ fill: '#51776b' }}
              d='M27.58 11.14H.86A1.13 1.13 0 0 1 0 9.76a1.1 1.1 0 0 1 .82-.82h26.76a1.14 1.14 0 0 1 0 2.2z'
            />
          </g>
          <g id='prefix__Grupo_4' data-name='Grupo 4'>
            <path
              id='prefix__Caminho_7'
              data-name='Caminho 7'
              style={{ fill: '#51776b' }}
              d='M27.58 20.07H.86A1.12 1.12 0 0 1 0 18.7a1.1 1.1 0 0 1 .82-.82h26.76a1.12 1.12 0 0 1 .82 1.37 1.1 1.1 0 0 1-.82.82z'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export const CartIcon = compose(
  withCheckout
)(({ checkout, width, height, ...props }) => (
  <div className='CartIcon'>
    <div className='count'>{checkout && checkout.lineItems.edges.length}</div>
    <svg viewBox='0 0 26.01 26' width={width || '1em'} height={height || '1em'}>
      <title>Cart Icon</title>
      <path
        d='M7.8 20.8a2.6 2.6 0 1 0 2.6 2.6 2.6 2.6 0 0 0-2.6-2.6zM0 1.3a1.31 1.31 0 0 0 1.3 1.3h1.3l4.68 9.87-1.75 3.17A2.6 2.6 0 0 0 7.8 19.5h14.3a1.3 1.3 0 0 0 0-2.6H7.8l1.43-2.6h9.69a2.58 2.58 0 0 0 2.27-1.3l4.65-8.44a1.29 1.29 0 0 0-1.13-1.96H5.47L4.6.74A1.29 1.29 0 0 0 3.43 0H1.3A1.31 1.31 0 0 0 0 1.3zm20.8 19.5a2.6 2.6 0 1 0 2.6 2.6 2.6 2.6 0 0 0-2.6-2.6z'
      />
    </svg>
    <style jsx>{`
      .CartIcon {
        transition: .3s all;
        position: relative;
        fill: ${checkout && checkout.lineItems.edges.length ? velaBlue : velaGreen};
      }
      .count {
        transition: .5s all;
        position: absolute;
        top: -1em;
        right: -1em;
        background: white;
        border-radius: 1em;
        width: 1.5em;
        height: 1.5em;
        line-height: 1.5em;
        text-align: center;
        font-size: 0.6em;
        font-weight: 700;
        color: ${velaBlue};
        opacity: ${checkout && checkout.lineItems.edges.length ? 1 : 0};
      }
    `}</style>
  </div>
))

export const Logo = props =>
  <div>
    <svg viewBox='0 0 149.77 184.66' width='1em' height='1em' className='Logo' {...props}>
      <title>{'Vela Logo'}</title>
      <g>
        <path id='logo'
          d='M130.66 111.65c-17.33 27.27-52 53.6-86.63 70.16-16.34 7.81-37.45-.53-38.92-23.87-.9-14.33 10.89-72.16 11.36-76.69.9-8.37-5.64-10.92-14.48-2.69l-2-3s39.59-38.14 43.28-41.84 18.94-17.23 25 2.09-4.55 60.24-6.62 70.12c-2.24 10.75-12.49 53.43 0 53.43 17.61 0 32.41-48.73 34.66-57.65 2.47-9.88 13-77.89-8.3-56.56l-2-2.88s31.59-30.61 39.54-35.72S144-7.37 148.28 11.66s-.29 72.71-17.62 100'
        />
      </g>
    </svg>
    <style jsx>{`
    .Logo {
      fill: ${velaGreen}
    }
    @keyframes colorchange {
      0%  { transform: scale(1) }
      50% { transform: scale(0.9) }
      100% { transform: scale(1) }
  }
`}</style>
  </div>

export const MarkerStoreIcon = props =>
  <svg viewBox='0 0 48 48' fill='none' {...props}>
    <path d='M0 0h48v48H0z' />
    <path
      d='M23.5 6C15.961 6 10 12.49 10 20.383c0 9.822 12.097 20.696 12.623 21.222.526.527 1.403.527 1.754 0C24.903 41.08 37 30.205 37 20.383 36.825 12.49 30.864 6 23.5 6z'
      fill='#43CD8B'
    />
    <path
      d='M28.354 22.694c-1.537 2.39-4.525 4.696-7.512 6.062-1.452.683-3.244-.086-3.415-2.05-.085-1.28.939-6.231 1.024-6.658.086-.768-.512-.939-1.28-.256L17 19.536s3.415-3.33 3.756-3.671c.342-.256 1.622-1.451 2.22.17.512 1.708-.427 5.208-.598 6.062-.17.939-1.11 4.61 0 4.61 1.537 0 2.817-4.269 2.988-5.037.256-.854 1.11-6.744-.683-4.951l-.17-.086s2.731-2.646 3.414-3.073c.683-.427 1.622-1.195 1.963.427.342 1.622 0 6.317-1.536 8.707z'
      fill='#FFFEFE'
    />
  </svg>

export const MarkerChargerIcon = props =>
  <svg viewBox='0 0 48 48' fill='none' {...props}>
    <path d='M0 0h48v48H0z' />
    <path
      d='M23.5 6C15.961 6 10 12.49 10 20.383c0 9.822 12.097 20.696 12.623 21.222.526.527 1.403.527 1.754 0C24.903 41.08 37 30.205 37 20.383 36.825 12.49 30.864 6 23.5 6z'
      fill='#EF2248'
    />
    <path
      d='M21.21 30.378l2.282-6.58h-6.053c-.264 0-.439-.263-.439-.526 0-.088 0-.175.088-.263 1.754-2.193 3.597-4.387 5.351-6.58.877-1.052 1.755-2.193 2.632-3.246.263-.175.526-.263.702-.087.175.087.175.35.175.526l-2.368 6.667h6.053c.263 0 .438.176.438.439 0 .088 0 .175-.087.263-1.755 2.193-3.51 4.387-5.352 6.58-.877 1.052-1.754 2.105-2.72 3.246-.175.175-.438.263-.613.087-.088-.087-.176-.35-.088-.526z'
      fill='#FFFEFE'
    />
  </svg>

export const MarkerServiceIcon = props => (
  <svg viewBox='0 0 48 48' fill='none' {...props}>
    <path d='M0 0h48v48H0z' />
    <path
      d='M23.5 6C15.961 6 10 12.49 10 20.383c0 9.822 12.097 20.696 12.623 21.222.526.527 1.403.527 1.754 0C24.903 41.08 37 30.205 37 20.383 36.825 12.49 30.864 6 23.5 6z'
      fill='#FFCF39'
    />
    <path
      d='M32 15.716c0-.813-.368-1.626-.919-2.259-.092-.09-.184-.18-.367-.18-.092 0-.276.09-.276.18l-1.103 1.808c-.276.361-.735.542-1.195.361a1.266 1.266 0 01-.367-.271.949.949 0 01-.184-1.084l.92-1.627a.271.271 0 000-.361c.091-.181-.093-.271-.185-.271-1.102-.09-2.113.36-2.848 1.084a3.679 3.679 0 00-1.287 2.801c0 .18.092.452.184.813.092.362 0 .814-.276 1.085l-8.546 8.313c-.367.362-.551.904-.551 1.356 0 .813.735 1.536 1.562 1.536.551 0 1.011-.18 1.47-.633l8.27-8.584c.276-.271.644-.362 1.012-.362 1.378.271 2.664-.18 3.583-1.084A3.74 3.74 0 0032 15.717zm-15.254 12.29a.623.623 0 01-.643-.633c0-.361.275-.632.643-.632.367 0 .643.271.643.632.092.271-.276.633-.643.633z'
      fill='#FFFEFE'
    />
  </svg>
)

export const MarkerParkingIcon = props =>
  <svg viewBox='0 0 48 48' fill='none' {...props}>
    <path d='M0 0h48v48H0z' />
    <path
      d='M23.5 6C15.961 6 10 12.49 10 20.383c0 9.822 12.097 20.696 12.623 21.222.526.527 1.403.527 1.754 0C24.903 41.08 37 30.205 37 20.383 36.825 12.49 30.864 6 23.5 6z'
      fill='#21C2E0'
    />
    <path
      d='M23.184 16.382c1.86 0 3.288.33 4.284.99.996.648 1.494 1.716 1.494 3.204 0 1.5-.504 2.586-1.512 3.258-1.008.66-2.448.99-4.32.99h-.882V29H19.44V16.706c.612-.12 1.26-.204 1.944-.252a26.102 26.102 0 011.8-.072zm.18 2.394c-.204 0-.408.006-.612.018-.192.012-.36.024-.504.036v3.6h.882c.972 0 1.704-.132 2.196-.396.492-.264.738-.756.738-1.476 0-.348-.066-.636-.198-.864-.12-.228-.3-.408-.54-.54a2.134 2.134 0 00-.846-.288 6.37 6.37 0 00-1.116-.09z'
      fill='#FFFEFE'
    />
  </svg>
