
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
  <svg viewBox='0 0 97.14 128.36' width='1em' height='1em' {...props}>
    <title>{'Ativo 1'}</title>
    <g data-name='Camada 2'>
      <g data-name='Camada 1'>
        <path
          d='M97.14 53.86a81.58 81.58 0 0 0-1.27-14.42C91.16 13.12 69.82 0 48.5 0h.07a51.62 51.62 0 0 0-11.94 1.4c-16.8 4-31.54 16.7-35.36 38A82.54 82.54 0 0 0 0 53.86a81.42 81.42 0 0 0 48.57 74.5 81.4 81.4 0 0 0 48.57-74.5z'
          fill='#51776b'
        />
        <path
          d='M65.89 62c-5 7.85-15 15.43-24.94 20.2-4.71 2.25-10.79-.15-11.21-6.87-.26-4.13 3.13-20.78 3.27-22.09.26-2.41-1.62-3.14-4.17-.77l-.57-.87s11.39-11 12.46-12 5.45-5 7.2.6S46.62 57.55 46 60.39c-.65 3.1-3.6 15.38 0 15.38 5.07 0 9.33-14 10-16.6.71-2.84 3.75-22.42-2.39-16.28l-.61-.83s9.11-8.81 11.4-10.29 5.31-4 6.54 1.48-.06 20.93-5.05 28.75'
          fill='#f5f5f5'
        />
      </g>
    </g>
  </svg>

export const MarkerChargerIcon = props =>
  <svg viewBox='0 0 97.14 128.36' width='1em' height='1em' {...props}>
    <title>{'Vela Charge Point'}</title>
    <g>
      <g>
        <path
          d='M97.14 53.86a81.58 81.58 0 0 0-1.27-14.42C91.16 13.12 69.82 0 48.5 0h.07a51.62 51.62 0 0 0-11.94 1.4c-16.8 4-31.54 16.7-35.36 38A82.54 82.54 0 0 0 0 53.86a81.42 81.42 0 0 0 48.57 74.5 81.4 81.4 0 0 0 48.57-74.5z'
          fill='#a84b61'
        />
        <path
          d='M40.63 76.7l7.88-22.45-20.69-.06a1.55 1.55 0 0 1-1.57-1.56 1.52 1.52 0 0 1 .38-1l18.19-22.32c3-3.63 6-7.31 9.06-11.06a1.58 1.58 0 0 1 2.19-.25 1.67 1.67 0 0 1 .5 1.75l-7.94 22.5 20.7.06a1.55 1.55 0 0 1 1.56 1.57 1.57 1.57 0 0 1-.31.93c-5.82 7.51-11.94 14.88-18.07 22.32-3 3.63-6 7.25-9.19 11.13a1.58 1.58 0 0 1-2.19.25 1.6 1.6 0 0 1-.5-1.81'
          fill='#f5f5f5'
        />
      </g>
    </g>
  </svg>
