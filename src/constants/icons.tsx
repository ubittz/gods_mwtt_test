import { SVGAttributes } from 'react';

type DefaultIconProps = SVGAttributes<SVGSVGElement>;

export function ArrowLeftIcon(props: DefaultIconProps) {
  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M15 4L7 12L15 20' stroke='#303236' strokeWidth='1.5' strokeLinejoin='bevel' />
    </svg>
  );
}
