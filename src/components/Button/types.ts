import { ButtonHTMLAttributes, ReactNode } from 'react';

import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import { asType } from '@@types/common';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export type ButtonSize = asType<typeof BUTTON_SIZE>;

export type ButtonTheme = asType<typeof BUTTON_THEME>;
