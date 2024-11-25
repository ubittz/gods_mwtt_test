import { ButtonSize, ButtonTheme } from '@@components/Button/types';
import { FlexDirection } from '@@components/Flex/types';
import { TypographyTheme } from '@@components/Typography/types';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    flex: {
      direction: Record<FlexDirection, string>;
    };
    button: {
      size: Record<ButtonSize, string>;
      theme: Record<ButtonTheme, string>;
    };
    typography: Record<TypographyTheme, string>;
    color: {
      surface_background: string;
      surface_foreground: string;
      surface_point: string;
      surface_soft: string;
      surface_disabled: string;

      border_primary: string;
      border_secondary: string;
      border_point: string;

      text_primary: string;
      text_primary_inverse: string;
      text_secondary: string;
      text_secondary_inverse: string;
      text_caption: string;
      text_disabled: string;
      text_point: string;

      icon_primary: string;
      icon_secondary: string;
      icon_tertiary: string;

      button_solid: string;
      button_solid_label: string;
      button_ghost_border: string;
      button_ghost_label: string;
      button_soft_fill: string;
      button_soft_label: string;
      button_outline: string;
      button_outline_label: string;
      button_gray_border: string;
      button_gray_label: string;
      button_disabled_fill: string;
      button_disabled_label: string;
    };
  }
}
