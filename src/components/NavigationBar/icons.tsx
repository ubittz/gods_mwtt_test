import { DefaultIconProps } from '@@types/common';

export function ActiveHomeIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M4 12.5L16 3.5L28 12.5V28.5H4V12.5Z' stroke='#911054' stroke-width='1.5' stroke-linejoin='bevel' />
      <path d='M12 27.5V19.5H20V27.5' stroke='#911054' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel' />
    </svg>
  );
}
export function InactiveHomeIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M4 12.5L16 3.5L28 12.5V28.5H4V12.5Z' stroke='#C1C1C1' stroke-width='1.5' stroke-linejoin='bevel' />
      <path d='M12 27.5V19.5H20V27.5' stroke='#C1C1C1' stroke-width='1.5' stroke-linecap='square' stroke-linejoin='bevel' />
    </svg>
  );
}
export function ActiveReservationIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#clip0_2222_7480)'>
        <path
          d='M24.2132 7.98528L20.9807 4.75279L14.6673 6.21751L2.99999 17.8848L14.3137 29.1985L25.981 17.5312L27.4457 11.2178L24.2132 7.98528ZM24.2132 7.98528L21.3848 10.8137M24.2132 7.98528L27.0416 5.15685'
          stroke='#911054'
          stroke-width='1.5'
          stroke-linejoin='bevel'
        />
      </g>
      <defs>
        <clipPath id='clip0_2222_7480'>
          <rect width='32' height='32' fill='white' transform='translate(0 0.5)' />
        </clipPath>
      </defs>
    </svg>
  );
}
export function InactiveReservationIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g clip-path='url(#clip0_2222_7387)'>
        <path
          d='M24.2132 7.98528L20.9807 4.75279L14.6673 6.21751L2.99999 17.8848L14.3137 29.1985L25.981 17.5312L27.4457 11.2178L24.2132 7.98528ZM24.2132 7.98528L21.3848 10.8137M24.2132 7.98528L27.0416 5.15685'
          stroke='#C9CBCF'
          stroke-width='1.5'
          stroke-linejoin='bevel'
        />
      </g>
      <defs>
        <clipPath id='clip0_2222_7387'>
          <rect width='32' height='32' fill='white' transform='translate(0 0.5)' />
        </clipPath>
      </defs>
    </svg>
  );
}

export function ActiveMembershipIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M24 22.5H8L5 13.5L6 12.5L10 15.5L15 9.5H17L22 15.5L26 12.5L27 13.5L24 22.5Z'
        stroke='#911054'
        stroke-width='1.5'
        stroke-linejoin='bevel'
      />
      <circle cx='4.5' cy='12' r='1.5' stroke='#911054' stroke-width='1.5' />
      <circle cx='27.5' cy='12' r='1.5' stroke='#911054' stroke-width='1.5' />
      <circle cx='16' cy='7.5' r='2' stroke='#911054' stroke-width='1.5' />
    </svg>
  );
}

export function InactiveMembershipIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M24 22.5H8L5 13.5L6 12.5L10 15.5L15 9.5H17L22 15.5L26 12.5L27 13.5L24 22.5Z'
        stroke='#C9CBCF'
        stroke-width='1.5'
        stroke-linejoin='bevel'
      />
      <path d='M6 25.5L8 22.5H24L26 25.5H6Z' stroke='#C9CBCF' stroke-width='1.5' stroke-linejoin='bevel' />
      <circle cx='4.5' cy='12' r='1.5' stroke='#C9CBCF' stroke-width='1.5' />
      <circle cx='27.5' cy='12' r='1.5' stroke='#C9CBCF' stroke-width='1.5' />
      <circle cx='16' cy='7.5' r='2' stroke='#C9CBCF' stroke-width='1.5' />
    </svg>
  );
}

export function ActiveWineTypeIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M25 28.5H7L4 12.5H28L25 28.5Z' stroke='#911054' stroke-width='1.5' stroke-linejoin='bevel' />
      <path d='M22 17.5V11V9.5C22 6.18629 19.3137 3.5 16 3.5V3.5C12.6863 3.5 10 6.18629 10 9.5V11V17.5' stroke='#911054' stroke-width='1.5' />
    </svg>
  );
}

export function InactiveWineTypeIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M25 28.5H7L4 12.5H28L25 28.5Z' stroke='#C9CBCF' stroke-width='1.5' stroke-linejoin='bevel' />
      <path d='M22 17.5V11V9.5C22 6.18629 19.3137 3.5 16 3.5V3.5C12.6863 3.5 10 6.18629 10 9.5V11V17.5' stroke='#C9CBCF' stroke-width='1.5' />
    </svg>
  );
}

export function ActiveMyIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M16 28.5C22.6274 28.5 28 23.1274 28 16.5C28 9.87258 22.6274 4.5 16 4.5C9.37258 4.5 4 9.87258 4 16.5C4 23.1274 9.37258 28.5 16 28.5Z'
        stroke='#911054'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 21.5C12 21.5 13.5 23.5 16 23.5C18.5 23.5 20 21.5 20 21.5'
        stroke='#911054'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}

export function InactiveMyIcon(props: DefaultIconProps) {
  return (
    <svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='M16 28.5C22.6274 28.5 28 23.1274 28 16.5C28 9.87258 22.6274 4.5 16 4.5C9.37258 4.5 4 9.87258 4 16.5C4 23.1274 9.37258 28.5 16 28.5Z'
        stroke='#C9CBCF'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
      <path
        d='M12 21.5C12 21.5 13.5 23.5 16 23.5C18.5 23.5 20 21.5 20 21.5'
        stroke='#C9CBCF'
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
}
