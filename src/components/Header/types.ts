import { HTMLAttributes, MouseEventHandler } from 'react';

import { HEADER_ALIGNMENT } from '@@components/Header/constants';
import { asType } from '@@types/common';

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  hiddenBack?: boolean;
  titleAlign?: HeaderAlignment;
  rightIcon?: React.ReactNode;
  onRightIconClick?: MouseEventHandler<HTMLDivElement>;
  onBack?: MouseEventHandler<HTMLDivElement>;
}

export type HeaderAlignment = asType<typeof HEADER_ALIGNMENT>;
