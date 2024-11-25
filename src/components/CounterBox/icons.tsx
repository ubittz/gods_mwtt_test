import { SVGProps } from 'react';

export const MinusButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className={props.className} width='28' height='29' viewBox='0 0 28 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M7 14.5H21' stroke='#AEB1B7' stroke-width='1.5' />
  </svg>
);

export const PlusButtonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg className={props.className} width='28' height='29' viewBox='0 0 28 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M7 14.5H21' stroke='#AEB1B7' stroke-width='1.5' />
    <path d='M14 7.5L14 21.5' stroke='#AEB1B7' stroke-width='1.5' />
  </svg>
);
