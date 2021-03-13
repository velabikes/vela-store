
import { compose } from 'recompose'
import withCheckout from '../containers/withCheckout'
import { velaBlue, velaGreen, lightGreen, white, velaRed, offWhite, offBlack } from '../style/colors'

export const UserIcon = props => (
  <svg viewBox='0 0 27.05 27.04' width='1em' height='1em' {...props}>
    <g id='prefix__Camada_2' data-name='Camada 2'>
      <g id='prefix__Camada_1-2' data-name='Camada 1'>
        <g id='prefix__Grupo_39' data-name='Grupo 39'>
          <circle
            id='prefix__Elipse_1'
            style={{ fill: { velaGreen } }}
            cx={13.52}
            cy={6.76}
            r={6.76}
          />
          <path
            id='prefix__Caminho_35'
            d='M27.05 27H0v-2.21c0-4.51 9-7 13.52-7S27 20.28 27 24.79z'
            style={{ fill: { velaGreen } }}
          />
        </g>
      </g>
    </g>
  </svg>
)

export const CloseIcon = ({color, props}) => (
  <svg viewBox='0 0 24 24' {...props}>
    <path
      d='M19.571 17.95l-5.523-5.8 5.333-5.6a1.5 1.5 0 000-2.1c-.572-.6-1.429-.6-2 0l-5.333 5.7-5.334-5.7c-.571-.6-1.428-.6-2 0-.285.3-.476.7-.476 1.1 0 .4.095.8.381 1.1l5.333 5.6-5.523 5.8a1.5 1.5 0 000 2.1c.285.3.666.4 1.047.4.381 0 .762-.1 1.048-.4l5.524-5.8 5.523 5.8c.572.6 1.429.6 2 0 .572-.6.572-1.6 0-2.2z'
      fill={color}
    />
  </svg>
)

export const AddIcon = props =>
  <svg viewBox='0 0 24 24' {...props}>
    <path
      d='M17.8667 10.781H12.9143V5.60003C12.9143 4.91431 12.381 4.38098 11.6952 4.38098C11.0095 4.38098 10.4762 4.91431 10.4762 5.60003V10.781H5.6C4.91429 10.781 4.38095 11.3143 4.38095 11.9238C4.38095 12.5334 4.91429 13.1429 5.6 13.1429H10.4762V17.8667C10.4762 18.5524 11.0095 19.0857 11.6952 19.0857C12.381 19.0857 12.9143 18.5524 12.9143 17.8667V13.1429H17.8667C18.5524 13.1429 19.0857 12.6096 19.0857 11.9238C19.0857 11.2381 18.4762 10.781 17.8667 10.781Z'
    />
  </svg>

export const BackIcon = props =>
<svg width='24' height='24' viewBox='0 0 24 24' fill='none' {...props}>
    <path
      d='M18.6592 10.7516L8.46927 10.7516L11.9553 7.27389C12.4022 6.82803 12.4022 5.93631 11.9553 5.40127C11.419 4.86624 10.6145 4.86624 10.0782 5.40127L4.35754 11.0191C4.08939 11.2866 4 11.6433 4 12C4 12.2675 4.08939 12.535 4.17877 12.7134C4.17877 12.8025 4.26816 12.8025 4.26816 12.8917C4.26816 12.8917 4.26816 12.9809 4.35754 12.9809L9.98883 18.5987C10.5251 19.1338 11.3296 19.1338 11.8659 18.5987C12.4022 18.0637 12.4022 17.2611 11.8659 16.7261L8.64804 13.4268L18.6592 13.4268C19.3743 13.4268 20 12.8025 20 12.0892C20 11.3758 19.3743 10.7516 18.6592 10.7516Z'
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
  <div>
    <svg width={24} height={24} viewBox='0 0 24 24' fill='none' {...props}>
      <path d='M0 0h24v24H0z' />
      <path className='MenuIcon'
        d='M6.2 8.5h12.6c.7 0 1.2-.5 1.2-1.2S19.5 6 18.8 6H6.2C5.5 6 5 6.5 5 7.2s.5 1.3 1.2 1.3zM18.8 11.4H6.2c-.7 0-1.2.6-1.2 1.3 0 .7.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2s-.5-1.3-1.2-1.3zM18.8 16.9H6.2c-.7 0-1.2.5-1.2 1.2s.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2s-.5-1.2-1.2-1.2z'
      />
    </svg>
    <style jsx>{`
      .MenuIcon {
        fill: ${offWhite};
      }
    `}
    </style>
  </div>
)

export const CartIcon = compose(
  withCheckout
)(({ checkout, width, height, ...props }) => (
  <div className='CartIcon'>
    <div className='count'>{checkout && checkout.lineItems.edges.length}</div>
    <svg viewBox='0 0 24 24' width={width || '1.5rem'} height={height || '1.5rem'}>
      <path
        d='M8.2 17c-1 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7.9 0 1.8-.7 1.8-1.7S9.2 17 8.2 17zM3 3.9c0 .5.4.9.9.9h.9l3.1 6.6-1.2 2.1c-.5.8-.2 1.9.7 2.4.3.1.6.2.8.2h9.6c.5 0 .9-.4.9-.9s-.4-.9-.9-.9H8.2l1-1.7h6.5c.6 0 1.2-.3 1.5-.9L20.3 6c.2-.4.1-.9-.3-1.2-.1-.1-.3-.1-.5-.1H6.7l-.6-1.2C6 3.2 5.6 3 5.3 3H3.9c-.5 0-.9.4-.9.9zM17 17c-1 0-1.7.8-1.7 1.7 0 .9.8 1.7 1.7 1.7.9 0 1.7-.8 1.7-1.7 0-.9-.7-1.7-1.7-1.7z'
      />
    </svg>
    <style jsx>{`
      .CartIcon {
        transition: .3s all;
        position: relative;
        fill: ${checkout && checkout.lineItems.edges.length ? white : lightGreen};
      }
      .count {
        transition: .5s all;
        position: absolute;
        top: -0.5em;
        right: -0.5em;
        background: ${velaBlue};
        border-radius: 1em;
        width: 1rem;
        height: 1rem;
        line-height: 1.75em;
        text-align: center;
        font-size: 0.6em;
        font-weight: 700;
        color: ${white};
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
      fill: ${lightGreen}
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
      fill={velaGreen}
    />
    <path
      d='M28.354 22.694c-1.537 2.39-4.525 4.696-7.512 6.062-1.452.683-3.244-.086-3.415-2.05-.085-1.28.939-6.231 1.024-6.658.086-.768-.512-.939-1.28-.256L17 19.536s3.415-3.33 3.756-3.671c.342-.256 1.622-1.451 2.22.17.512 1.708-.427 5.208-.598 6.062-.17.939-1.11 4.61 0 4.61 1.537 0 2.817-4.269 2.988-5.037.256-.854 1.11-6.744-.683-4.951l-.17-.086s2.731-2.646 3.414-3.073c.683-.427 1.622-1.195 1.963.427.342 1.622 0 6.317-1.536 8.707z'
      fill={white}
    />
  </svg>

export const MarkerChargerIcon = props =>
  <svg viewBox='0 0 48 48' fill='none' {...props}>
    <path d='M0 0h48v48H0z' />
    <path
      d='M23.5 6C15.961 6 10 12.49 10 20.383c0 9.822 12.097 20.696 12.623 21.222.526.527 1.403.527 1.754 0C24.903 41.08 37 30.205 37 20.383 36.825 12.49 30.864 6 23.5 6z'
      fill={velaRed}
    />
    <path
      d='M21.21 30.378l2.282-6.58h-6.053c-.264 0-.439-.263-.439-.526 0-.088 0-.175.088-.263 1.754-2.193 3.597-4.387 5.351-6.58.877-1.052 1.755-2.193 2.632-3.246.263-.175.526-.263.702-.087.175.087.175.35.175.526l-2.368 6.667h6.053c.263 0 .438.176.438.439 0 .088 0 .175-.087.263-1.755 2.193-3.51 4.387-5.352 6.58-.877 1.052-1.754 2.105-2.72 3.246-.175.175-.438.263-.613.087-.088-.087-.176-.35-.088-.526z'
      fill={white}
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
      fill={white}
    />
  </svg>
)

export const MarkerParkingIcon = props =>
  <svg viewBox='0 0 48 48' fill='none' {...props}>
    <path d='M0 0h48v48H0z' />
    <path
      d='M23.5 6C15.961 6 10 12.49 10 20.383c0 9.822 12.097 20.696 12.623 21.222.526.527 1.403.527 1.754 0C24.903 41.08 37 30.205 37 20.383 36.825 12.49 30.864 6 23.5 6z'
      fill={velaBlue}
    />
    <path
      d='M23.184 16.382c1.86 0 3.288.33 4.284.99.996.648 1.494 1.716 1.494 3.204 0 1.5-.504 2.586-1.512 3.258-1.008.66-2.448.99-4.32.99h-.882V29H19.44V16.706c.612-.12 1.26-.204 1.944-.252a26.102 26.102 0 011.8-.072zm.18 2.394c-.204 0-.408.006-.612.018-.192.012-.36.024-.504.036v3.6h.882c.972 0 1.704-.132 2.196-.396.492-.264.738-.756.738-1.476 0-.348-.066-.636-.198-.864-.12-.228-.3-.408-.54-.54a2.134 2.134 0 00-.846-.288 6.37 6.37 0 00-1.116-.09z'
      fill={white}
    />
  </svg>

export const Chevron = ({color, props}) =>
  <svg viewBox="0 0 36 36" width='20' height='20' fill='none' {...props}>
    <path 
      d="M28.4214 11.575C27.5404 10.6833 26.2189 10.6833 25.3378 11.575L17.5555 19.4516L9.92006 11.575C9.03905 10.8319 7.57069 10.8319 6.68967 11.575C5.95549 12.4667 5.95549 13.9529 6.68967 14.8445L15.9403 24.2073C16.3808 24.6531 16.9682 24.8018 17.5555 24.8018C18.1429 24.8018 18.7302 24.6531 19.1707 24.2073L28.4214 14.8445C29.3024 13.9529 29.3024 12.4667 28.4214 11.575Z" 
      fill={color}
    />
  </svg>


export const Instagram = props =>
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path d='M15.6375 3H8.3625C6.94058 3.00099 5.57719 3.56629 4.57174 4.57174C3.56629 5.57719 3.00099 6.94058 3 8.3625V15.6375C3.00099 17.0594 3.56629 18.4228 4.57174 19.4283C5.57719 20.4337 6.94058 20.999 8.3625 21H15.6375C17.0594 20.999 18.4228 20.4337 19.4283 19.4283C20.4337 18.4228 20.999 17.0594 21 15.6375V8.3625C20.999 6.94058 20.4337 5.57719 19.4283 4.57174C18.4228 3.56629 17.0594 3.00099 15.6375 3V3ZM19.1887 15.6375C19.1887 16.5794 18.8146 17.4826 18.1486 18.1486C17.4826 18.8146 16.5794 19.1887 15.6375 19.1887H8.3625C7.42065 19.1887 6.51738 18.8146 5.85139 18.1486C5.1854 17.4826 4.81125 16.5794 4.81125 15.6375V8.3625C4.81125 7.42065 5.1854 6.51738 5.85139 5.85139C6.51738 5.1854 7.42065 4.81125 8.3625 4.81125H15.6375C16.5794 4.81125 17.4826 5.1854 18.1486 5.85139C18.8146 6.51738 19.1887 7.42065 19.1887 8.3625V15.6375Z' fill='#FFFEFE' />
    <path d='M12 7.34625C11.0796 7.34625 10.1798 7.61919 9.41452 8.13055C8.64921 8.64191 8.05273 9.36872 7.7005 10.2191C7.34826 11.0694 7.25611 12.0052 7.43567 12.9079C7.61524 13.8106 8.05846 14.6399 8.7093 15.2907C9.36014 15.9415 10.1894 16.3848 11.0921 16.5643C11.9948 16.7439 12.9306 16.6517 13.7809 16.2995C14.6313 15.9473 15.3581 15.3508 15.8695 14.5855C16.3808 13.8202 16.6538 12.9204 16.6538 12C16.6538 10.7657 16.1634 9.58205 15.2907 8.7093C14.418 7.83655 13.2343 7.34625 12 7.34625V7.34625ZM12 14.8462C11.4371 14.8462 10.8868 14.6793 10.4187 14.3666C9.95065 14.0538 9.58583 13.6093 9.37041 13.0892C9.15498 12.5691 9.09862 11.9968 9.20844 11.4447C9.31826 10.8926 9.58934 10.3855 9.9874 9.9874C10.3855 9.58934 10.8926 9.31826 11.4447 9.20844C11.9968 9.09862 12.5691 9.15498 13.0892 9.37041C13.6093 9.58583 14.0538 9.95064 14.3666 10.4187C14.6793 10.8868 14.8463 11.4371 14.8463 12C14.8463 12.7549 14.5464 13.4788 14.0126 14.0126C13.4788 14.5464 12.7549 14.8462 12 14.8462V14.8462Z' fill='#FFFEFE' />
    <path d='M16.665 8.49375C17.2801 8.49375 17.7787 7.99511 17.7787 7.38C17.7787 6.76489 17.2801 6.26625 16.665 6.26625C16.0499 6.26625 15.5513 6.76489 15.5513 7.38C15.5513 7.99511 16.0499 8.49375 16.665 8.49375Z' fill='#FFFEFE' />
  </svg>

export const Facebook = props =>
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path d='M18.5737 3H5.42625C4.78277 3 4.16564 3.25562 3.71063 3.71063C3.25562 4.16564 3 4.78277 3 5.42625L3 18.5737C3 19.2172 3.25562 19.8344 3.71063 20.2894C4.16564 20.7444 4.78277 21 5.42625 21H11.91V14.5688H10.2487C10.1479 14.563 10.053 14.5192 9.98339 14.446C9.91374 14.3729 9.87454 14.276 9.87375 14.175V12.1013C9.87121 12.0504 9.87902 11.9997 9.89673 11.952C9.91443 11.9043 9.94165 11.8607 9.97673 11.8239C10.0118 11.787 10.054 11.7577 10.1008 11.7377C10.1475 11.7177 10.1979 11.7074 10.2487 11.7075H11.9175V9.70125C11.9175 7.37625 13.3387 6.1125 15.4125 6.1125H17.115C17.1658 6.10996 17.2166 6.11777 17.2643 6.13548C17.312 6.15318 17.3555 6.1804 17.3924 6.21548C17.4292 6.25056 17.4585 6.29276 17.4785 6.33953C17.4985 6.38629 17.5088 6.43664 17.5087 6.4875V8.25C17.5114 8.30242 17.5031 8.35482 17.4843 8.40381C17.4654 8.4528 17.4365 8.49729 17.3994 8.53441C17.3623 8.57152 17.3178 8.60043 17.2688 8.61927C17.2198 8.6381 17.1674 8.64644 17.115 8.64375H16.0613C14.9363 8.64375 14.715 9.18 14.715 9.9675V11.7037H17.1937C17.2477 11.7065 17.3005 11.7202 17.349 11.7441C17.3974 11.7679 17.4405 11.8014 17.4756 11.8425C17.5107 11.8835 17.5371 11.9313 17.5531 11.9829C17.5691 12.0345 17.5744 12.0888 17.5687 12.1425L17.3212 14.2162C17.3146 14.3111 17.2722 14.3999 17.2025 14.4646C17.1329 14.5293 17.0413 14.5652 16.9462 14.565H14.7263V20.9963H18.5737C19.2166 20.9963 19.8331 20.7411 20.288 20.2869C20.7429 19.8327 20.999 19.2166 21 18.5737V5.42625C21 4.78277 20.7444 4.16564 20.2894 3.71063C19.8344 3.25562 19.2172 3 18.5737 3V3Z' fill='#FFFEFE' />
  </svg>

export const YouTube = props =>
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path d="M20.6291 7.97204C20.4216 7.20094 19.8137 6.59312 19.0427 6.38548C17.6341 6 11.9998 6 11.9998 6C11.9998 6 6.36565 6 4.95707 6.37079C4.20094 6.57829 3.57815 7.20108 3.37065 7.97204C3 9.38048 3 12.3015 3 12.3015C3 12.3015 3 15.2371 3.37065 16.6309C3.57829 17.4018 4.18611 18.0098 4.95721 18.2174C6.38048 18.6029 12 18.6029 12 18.6029C12 18.6029 17.6341 18.6029 19.0427 18.2321C19.8138 18.0246 20.4216 17.4167 20.6293 16.6457C20.9999 15.2371 20.9999 12.3163 20.9999 12.3163C20.9999 12.3163 21.0148 9.38048 20.6291 7.97204Z" fill="#FFFEFE"/>
    <path d="M10.2059 15L14.8912 12.3015L10.2059 9.60295V15Z" fill="black"/>
  </svg>

export const Linkedin = props =>
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path d="M19.3725 3H4.6275C4.19586 3 3.7819 3.17147 3.47668 3.47668C3.17147 3.7819 3 4.19586 3 4.6275L3 19.3725C3 19.8041 3.17147 20.2181 3.47668 20.5233C3.7819 20.8285 4.19586 21 4.6275 21H19.3725C19.8041 21 20.2181 20.8285 20.5233 20.5233C20.8285 20.2181 21 19.8041 21 19.3725V4.6275C21 4.19586 20.8285 3.7819 20.5233 3.47668C20.2181 3.17147 19.8041 3 19.3725 3ZM8.56875 18.5438C8.56875 18.6691 8.51897 18.7892 8.43036 18.8779C8.34175 18.9665 8.22156 19.0162 8.09625 19.0162H6.07875C5.95671 19.0114 5.84129 18.9595 5.7567 18.8714C5.6721 18.7833 5.6249 18.6659 5.625 18.5438V10.0875C5.6245 10.0253 5.63638 9.96364 5.65995 9.90609C5.68352 9.84854 5.7183 9.79625 5.76228 9.75228C5.80625 9.7083 5.85854 9.67352 5.91609 9.64995C5.97364 9.62638 6.03531 9.6145 6.0975 9.615H8.115C8.17719 9.6145 8.23886 9.62638 8.29641 9.64995C8.35396 9.67352 8.40625 9.7083 8.45022 9.75228C8.4942 9.79625 8.52898 9.84854 8.55255 9.90609C8.57612 9.96364 8.588 10.0253 8.5875 10.0875L8.56875 18.5438ZM7.0875 8.81625C6.70834 8.81699 6.33749 8.70524 6.02187 8.49513C5.70625 8.28502 5.46006 7.986 5.31444 7.63592C5.16883 7.28584 5.13035 6.90042 5.20386 6.52846C5.27738 6.1565 5.45959 5.81471 5.72743 5.54634C5.99527 5.27797 6.33671 5.09509 6.70853 5.02085C7.08035 4.94661 7.46583 4.98433 7.8162 5.12926C8.16657 5.27419 8.46606 5.51979 8.67679 5.835C8.88752 6.15021 9 6.52084 9 6.9C9 7.40757 8.79863 7.89441 8.44007 8.25367C8.08151 8.61293 7.59507 8.81526 7.0875 8.81625ZM19.125 18.5812C19.125 18.6966 19.0792 18.8073 18.9976 18.8888C18.916 18.9704 18.8054 19.0162 18.69 19.0162H16.5C16.3846 19.0162 16.274 18.9704 16.1924 18.8888C16.1108 18.8073 16.065 18.6966 16.065 18.5812V14.625C16.065 14.0325 16.2375 12.0338 14.5162 12.0338C13.185 12.0338 12.915 13.4025 12.8588 14.0175V18.5925C12.8588 18.7079 12.8129 18.8185 12.7313 18.9001C12.6498 18.9817 12.5391 19.0275 12.4237 19.0275H10.3425C10.2851 19.028 10.2281 19.0171 10.1749 18.9955C10.1217 18.9738 10.0733 18.9419 10.0325 18.9014C9.99169 18.861 9.95931 18.8129 9.93722 18.7598C9.91512 18.7068 9.90375 18.6499 9.90375 18.5925V10.05C9.90375 9.99256 9.91512 9.93568 9.93722 9.88266C9.95931 9.82964 9.99169 9.78152 10.0325 9.74108C10.0733 9.70063 10.1217 9.66867 10.1749 9.64703C10.2281 9.62539 10.2851 9.6145 10.3425 9.615H12.435C12.5504 9.615 12.661 9.66083 12.7426 9.74241C12.8242 9.82399 12.87 9.93463 12.87 10.05V10.8C13.365 10.05 14.1 9.4875 15.6638 9.4875C19.125 9.4725 19.125 12.7087 19.125 14.49V18.5812Z" fill="#FFFEFE"/>
  </svg>

export const Twitter = props =>
  <svg viewBox='0 0 24 24' fill='none' {...props}>
    <path d="M21 6.75488C20.3306 7.05249 19.6174 7.24976 18.8737 7.34554C19.6387 6.88259 20.2226 6.15509 20.4971 5.27823C19.7839 5.70925 18.9964 6.0137 18.1571 6.1836C17.4799 5.45269 16.5146 5 15.4616 5C13.4186 5 11.7739 6.68076 11.7739 8.74123C11.7739 9.0377 11.7986 9.32277 11.8594 9.59415C8.7915 9.4425 6.07688 7.95216 4.25325 5.68188C3.93487 6.24176 3.74813 6.88259 3.74813 7.57245C3.74813 8.8678 4.40625 10.0161 5.38725 10.6808C4.79437 10.6694 4.21275 10.495 3.72 10.2202C3.72 10.2316 3.72 10.2464 3.72 10.2612C3.72 12.0788 4.99912 13.5885 6.6765 13.9363C6.37612 14.0195 6.04875 14.0595 5.709 14.0595C5.47275 14.0595 5.23425 14.0458 5.01037 13.9956C5.4885 15.4768 6.84525 16.5658 8.4585 16.6011C7.203 17.5966 5.60888 18.1964 3.88313 18.1964C3.5805 18.1964 3.29025 18.1827 3 18.145C4.63462 19.2135 6.57188 19.8235 8.661 19.8235C15.4515 19.8235 19.164 14.1222 19.164 9.18023C19.164 9.0149 19.1584 8.85526 19.1505 8.69676C19.8829 8.16995 20.4982 7.51202 21 6.75488Z" fill="#FFFEFE"/>
  </svg>

export const Charge = props =>
  <svg viewBox='0 0 32 32' fill='none' {...props}>
    <path d='M13.6146 27.1707L16.6558 18.3979H8.58485C8.23394 18.3979 8 18.047 8 17.6961C8 17.5791 8 17.4621 8.11697 17.3452C10.4564 14.4209 12.9128 11.4966 15.2522 8.57239C16.4219 7.16874 17.5916 5.64813 18.7613 4.24449C19.1122 4.01055 19.4631 3.89358 19.697 4.12752C19.931 4.24449 19.931 4.5954 19.931 4.82934L16.7728 13.7191H24.8437C25.1946 13.7191 25.4286 13.953 25.4286 14.3039C25.4286 14.4209 25.4286 14.5379 25.3116 14.6548C22.9722 17.5791 20.6328 20.5034 18.1764 23.4276C17.0067 24.8313 15.837 26.2349 14.5503 27.7555C14.3164 27.9895 13.9655 28.1064 13.7315 27.8725C13.6146 27.7555 13.4976 27.4046 13.6146 27.1707Z' fill='#4B4A4A' />
  </svg>
  

export const Navigation = props =>
  <svg viewBox='0 0 32 32' fill='none' {...props}>
    <path d='M26.4677 5.53245C26.2276 5.29229 25.8673 5.29229 25.6272 5.41237L5.8137 13.9382C5.45346 14.0583 5.33337 14.4185 5.33337 14.7787C5.33337 15.139 5.57354 15.3792 5.93378 15.4992L14.0993 17.9009L16.501 26.0664C16.6211 26.4267 16.8612 26.6668 17.2215 26.6668C17.5817 26.6668 17.8219 26.4267 17.9419 26.1865L26.5878 6.37303C26.7079 6.13286 26.7079 5.77262 26.4677 5.53245Z' fill='#4B4A4A' />
  </svg>

export const Battery = props =>
  <svg viewBox='0 0 32 32' fill='none' {...props}>
    <rect x='7' y='16' width='11' height='10' fill='#4B4A4A' />
    <path d='M16.2154 5H15.7231V4.86667C15.7231 3.8 14.9846 3 14 3L10.8 3C9.93846 3 9.2 3.8 9.2 4.86667V5H8.58462C7.23077 5 6 6.33333 6 7.8L6 24.2C6 25.8 7.23077 27 8.58462 27H16.2154C17.6923 27 18.8 25.6667 18.8 24.2L18.8 7.8C18.8 6.33333 17.6923 5 16.2154 5ZM16.3385 24.2C16.3385 24.3333 16.3385 24.3333 16.2154 24.3333H8.58462C8.58462 24.3333 8.46154 24.3333 8.46154 24.2L8.46154 7.8C8.46154 7.66667 8.58462 7.66667 8.58462 7.66667L16.2154 7.66667C16.3385 7.66667 16.3385 7.8 16.3385 7.8L16.3385 24.2Z' fill='#4B4A4A' />
  </svg>

export const Trash = props => 
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M10.0043 3.06896C10.0043 2.65475 10.3401 2.31896 10.7543 2.31896H12.9957C13.4099 2.31896 13.7457 2.65475 13.7457 3.06896V5.18103H18.5991C19.2895 5.18103 19.8491 5.74068 19.8491 6.43103C19.8491 7.12139 19.2895 7.68103 18.5991 7.68103H5.15086C4.46051 7.68103 3.90086 7.12139 3.90086 6.43103C3.90086 5.74068 4.46051 5.18103 5.15086 5.18103H10.0043V3.06896ZM11.5043 5.18103H12.2457V3.81896H11.5043V5.18103ZM18.5991 8.67241H5.15086L7.07205 21H16.678L18.5991 8.67241ZM12.375 12.0345C12.375 11.7583 12.1511 11.5345 11.875 11.5345C11.5989 11.5345 11.375 11.7583 11.375 12.0345L11.375 18.7586C11.375 19.0348 11.5989 19.2586 11.875 19.2586C12.1511 19.2586 12.375 19.0348 12.375 18.7586V12.0345ZM8.70881 12.0032C8.684 11.7281 8.44093 11.5253 8.16591 11.5501C7.89088 11.5749 7.68805 11.818 7.71286 12.093L8.31705 18.7899C8.34186 19.065 8.58493 19.2678 8.85996 19.243C9.13498 19.2182 9.33782 18.9751 9.31301 18.7001L8.70881 12.0032ZM16.0371 12.093C16.062 11.818 15.8591 11.5749 15.5841 11.5501C15.3091 11.5253 15.066 11.7281 15.0412 12.0032L14.437 18.7001C14.4122 18.9751 14.615 19.2182 14.8901 19.243C15.1651 19.2678 15.4081 19.065 15.433 18.7899L16.0371 12.093Z" 
      fill="#7B7B7B"
    />
  </svg>

export const Boost = props => 
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M9.95666 16.5416C12.3389 18.4052 15.7808 17.9849 17.6445 15.6027C19.5081 13.2205 19.0878 9.77852 16.7056 7.91487C15.4959 6.96852 14.0149 6.61099 12.6027 6.80038C12.0827 6.87013 11.6046 6.50511 11.5348 5.98509C11.4651 5.46508 11.8301 4.98699 12.3501 4.91724C14.2485 4.66264 16.2473 5.14401 17.8763 6.4184C21.085 8.92863 21.6512 13.5647 19.1409 16.7734C16.6307 19.9821 11.9946 20.5483 8.78593 18.038C8.3727 17.7147 8.29978 17.1177 8.62306 16.7044C8.94635 16.2912 9.54342 16.2183 9.95666 16.5416Z" fill="#7B7B7B"/>
    <path d="M13.75 12.3336C13.75 12.8858 13.3023 13.3336 12.75 13.3336C12.1977 13.3336 11.75 12.8858 11.75 12.3336C11.75 11.7813 12.1977 11.3336 12.75 11.3336C13.3023 11.3336 13.75 11.7813 13.75 12.3336Z" fill="#7B7B7B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.75 13.5835C4.75 13.1693 5.08579 12.8335 5.5 12.8335L8 12.8335C8.41421 12.8335 8.75 13.1693 8.75 13.5835C8.75 13.9977 8.41421 14.3335 8 14.3335L5.5 14.3335C5.08579 14.3335 4.75 13.9977 4.75 13.5835Z" fill="#7B7B7B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M3.75 10.5836C3.75 10.1693 4.08579 9.83356 4.5 9.83356L9 9.83356C9.41421 9.83356 9.75 10.1693 9.75 10.5836C9.75 10.9978 9.41421 11.3336 9 11.3336L4.5 11.3336C4.08579 11.3336 3.75 10.9978 3.75 10.5836Z" fill="#7B7B7B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2 7.58356C2 7.16934 2.33579 6.83356 2.75 6.83356L10 6.83356C10.4142 6.83356 10.75 7.16934 10.75 7.58356C10.75 7.99777 10.4142 8.33356 10 8.33356L2.75 8.33356C2.33579 8.33356 2 7.99777 2 7.58356Z" fill="#7B7B7B"/>
  </svg>

  

export const Assist = props => 
  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" {...props}>
     <path d="M18.1524 5.28887C18.5242 5.18925 18.8644 5.52946 18.7648 5.90124L17.9041 9.1134C17.8045 9.48519 17.3398 9.60971 17.0676 9.33755L14.7161 6.98608C14.444 6.71392 14.5685 6.24919 14.9403 6.14957L18.1524 5.28887Z" fill="#7B7B7B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.4312 6.3636C17.7826 6.71508 17.7826 7.28492 17.4312 7.6364L12.4312 12.6364C12.0797 12.9879 11.5098 12.9879 11.1584 12.6364C10.8069 12.2849 10.8069 11.7151 11.1584 11.3636L16.1584 6.3636C16.5098 6.01213 17.0797 6.01213 17.4312 6.3636Z" fill="#7B7B7B"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M10.5909 6.70905C7.60929 7.21727 5.60423 10.0463 6.11244 13.0279C6.62065 16.0095 9.44969 18.0145 12.4313 17.5063C13.9453 17.2482 15.2063 16.3932 16.0165 15.2211C16.3148 14.7895 16.9065 14.6814 17.3381 14.9798C17.7697 15.2781 17.8778 15.8698 17.5794 16.3014C16.4904 17.8771 14.7894 19.0318 12.7505 19.3793C8.73452 20.0638 4.92399 17.3631 4.23945 13.3471C3.55492 9.33113 6.25561 5.5206 10.2716 4.83607C10.7888 4.74791 11.2796 5.09572 11.3677 5.61293C11.4559 6.13014 11.1081 6.62089 10.5909 6.70905Z" fill="#7B7B7B"/>
  </svg>

export const BadgePlus = props =>
  <svg width="96" height="96" viewBox="0 0 196 206" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M184.3 91.26C181.3 89.04 177.5 86.26 177.04 84.46C177.227 80.9457 178.227 77.5228 179.96 74.46C182.61 68.38 185.35 62.08 182.31 56.84C179.27 51.6 172.31 50.74 165.7 50.04C162.252 50.0213 158.855 49.2104 155.77 47.67C154.226 44.5617 153.415 41.1407 153.4 37.67C152.66 31.02 151.88 24.14 146.61 21.06C141.34 17.98 135.02 20.68 128.94 23.37C125.877 25.103 122.454 26.1025 118.94 26.29C117.11 25.8 114.35 22.04 112.15 19.03C108.31 13.89 104 8 97.7 8C91.4 8 87.09 13.89 83.26 19.09C81.03 22.09 78.26 25.89 76.46 26.36C72.9491 26.1535 69.5304 25.1553 66.46 23.44C60.34 20.74 54.04 18.06 48.81 21.08C43.58 24.1 42.74 31 42 37.73C41.9798 41.1765 41.1726 44.5729 39.64 47.66C36.5572 49.1824 33.1682 49.9826 29.73 50C23.07 50.75 16.18 51.52 13.12 56.8C10.06 62.08 12.74 68.38 15.43 74.47C17.1603 77.534 18.1596 80.9563 18.35 84.47C17.86 86.3 14.1 89.07 11.1 91.27C5.9 95.08 0 99.43 0 105.7C0 111.97 5.9 116.32 11.1 120.14C14.1 122.36 17.9 125.14 18.36 126.94C18.1758 130.455 17.1761 133.878 15.44 136.94C12.79 143.03 10.05 149.33 13.09 154.57C16.13 159.81 23.09 160.66 29.7 161.37C33.1479 161.389 36.5453 162.2 39.63 163.74C41.1771 166.847 41.9848 170.269 41.99 173.74C42.74 180.4 43.52 187.28 48.79 190.35C54.06 193.42 60.33 190.66 66.42 188.01C69.4931 186.306 72.9116 185.318 76.42 185.12C78.26 185.61 81.02 189.37 83.22 192.38C87.05 197.57 91.39 203.47 97.66 203.47C103.93 203.47 108.27 197.57 112.1 192.38C114.33 189.38 117.1 185.58 118.9 185.11C122.413 185.306 125.834 186.305 128.9 188.03C134.99 190.69 141.29 193.4 146.52 190.39C151.75 187.38 152.62 180.39 153.37 173.77C153.391 170.324 154.198 166.927 155.73 163.84C158.818 162.312 162.214 161.508 165.66 161.49C172.32 160.74 179.21 159.96 182.27 154.69C185.33 149.42 182.57 143.15 179.93 137.06C178.207 133.995 177.218 130.572 177.04 127.06C177.53 125.22 181.29 122.45 184.29 120.26C189.49 116.43 195.4 112.08 195.4 105.82C195.4 99.56 189.5 95.08 184.3 91.26Z" fill="#43CD8B"/>
    <path d="M135.886 97.0201C136.539 97.0201 137.062 97.2814 137.454 97.8041C137.977 98.1961 138.238 98.7188 138.238 99.3721V114.268C138.238 114.921 137.977 115.509 137.454 116.032C137.062 116.424 136.539 116.62 135.886 116.62H107.27C106.617 116.62 106.29 116.947 106.29 117.6V145.824C106.29 146.477 106.029 147.065 105.506 147.588C105.114 147.98 104.591 148.176 103.938 148.176H89.238C88.5846 148.176 87.9966 147.98 87.474 147.588C87.082 147.065 86.886 146.477 86.886 145.824V117.6C86.886 116.947 86.5593 116.62 85.906 116.62H57.094C56.4406 116.62 55.8526 116.424 55.33 116.032C54.938 115.509 54.742 114.921 54.742 114.268V99.3721C54.742 98.7188 54.938 98.1961 55.33 97.8041C55.8526 97.2814 56.4406 97.0201 57.094 97.0201H85.906C86.5593 97.0201 86.886 96.6934 86.886 96.0401V67.0321C86.886 66.3788 87.082 65.8561 87.474 65.4641C87.9966 64.9414 88.5846 64.6801 89.238 64.6801H103.938C104.591 64.6801 105.114 64.9414 105.506 65.4641C106.029 65.8561 106.29 66.3788 106.29 67.0321V96.0401C106.29 96.6934 106.617 97.0201 107.27 97.0201H135.886Z" fill="#FFFEFE"/>
  </svg>



