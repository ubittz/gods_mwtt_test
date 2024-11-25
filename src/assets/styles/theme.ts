import { DefaultTheme } from 'styled-components';

import { BUTTON_SIZE, BUTTON_THEME } from '@@components/Button/constants';
import { FLEX_DIRECTION } from '@@components/Flex/constants';
import { TYPOGRAPHY_THEME } from '@@components/Typography/constants';
import { COLORS } from '@@constants/colors';

export const theme: DefaultTheme = {
  flex: {
    direction: {
      [FLEX_DIRECTION.HORIZONTAL]: 'row',
      [FLEX_DIRECTION.VERTICAL]: 'column',
    },
  },
  button: {
    size: {
      [BUTTON_SIZE.XLARGE]: 'height: 48px; font-size: 16px;',
      [BUTTON_SIZE.LARGE]: 'height: 40px; font-size: 14px;',
      [BUTTON_SIZE.MEDIUM]: 'height: 32px; font-size: 14px;',
      [BUTTON_SIZE.TINY]: 'height: 24px; font-size: 12px;',
    },
    theme: {
      [BUTTON_THEME.SOLID]: `background: ${COLORS.WINE_800}; border: none; color: ${COLORS.GRAY_SCALE_000}`,
      [BUTTON_THEME.GHOST]: `background: transparent; border: 1px solid ${COLORS.WINE_800}; color: ${COLORS.WINE_800}`,
      [BUTTON_THEME.SOFT]: `background: ${COLORS.WINE_100}; border: none; color: ${COLORS.WINE_800}`,
      [BUTTON_THEME.OUTLINE]: `background: transparent; border: 1px solid ${COLORS.GRAY_SCALE_200}; color: ${COLORS.GRAY_SCALE_800}`,
      [BUTTON_THEME.GRAY]: `background: ${COLORS.GRAY_SCALE_050}; border: none; color: ${COLORS.GRAY_SCALE_700}`,
      [BUTTON_THEME.DISABLE]: `background: ${COLORS.GRAY_SCALE_200}; border: none; color: ${COLORS.GRAY_SCALE_300}`,
    },
  },
  typography: {
    [TYPOGRAPHY_THEME.HEADLINE_1]: 'font-size: 32px; font-weight: 800; line-height: 140%;',
    [TYPOGRAPHY_THEME.HEADLINE_2]: 'font-size: 24px; font-weight: 800; line-height: 140%;',
    [TYPOGRAPHY_THEME.HEADLINE_3]: 'font-size: 20px; font-weight: 800; line-height: 140%;',
    [TYPOGRAPHY_THEME.SUBTITLE_1]: 'font-size: 18px; font-weight: 800; line-height: 140%;',
    [TYPOGRAPHY_THEME.SUBTITLE_2]: 'font-size: 16px; font-weight: 600; line-height: 160%;',
    [TYPOGRAPHY_THEME.SUBTITLE_3]: 'font-size: 14px; font-weight: 600; line-height: 160%;',
    [TYPOGRAPHY_THEME.BODY_1]: 'font-size: 20px; font-weight: 400; line-height: 160%;',
    [TYPOGRAPHY_THEME.BODY_2]: 'font-size: 16px; font-weight: 400; line-height: 160%;',
    [TYPOGRAPHY_THEME.BODY_3]: 'font-size: 14px; font-weight: 400; line-height: 160%;',
    [TYPOGRAPHY_THEME.CAPTION_1]: 'font-size: 12px; font-weight: 400; line-height: 160%;',
    [TYPOGRAPHY_THEME.BUTTON_1]: 'font-size: 16px; font-weight: 700; line-height: 160%;',
    [TYPOGRAPHY_THEME.BUTTON_2]: 'font-size: 14px; font-weight: 700; line-height: 160%;',
    [TYPOGRAPHY_THEME.BUTTON_3]: 'font-size: 12px; font-weight: 700; line-height: 160%;',
  },
  color: {
    surface_background: COLORS.GRAY_SCALE_050,
    surface_foreground: COLORS.GRAY_SCALE_000,
    surface_point: COLORS.WINE_800,
    surface_soft: COLORS.WINE_100,
    surface_disabled: COLORS.GRAY_SCALE_100,

    border_primary: COLORS.GRAY_SCALE_700,
    border_secondary: COLORS.GRAY_SCALE_100,
    border_point: COLORS.WINE_800,

    text_primary: COLORS.GRAY_SCALE_900,
    text_primary_inverse: COLORS.GRAY_SCALE_000,
    text_secondary: COLORS.GRAY_SCALE_800,
    text_secondary_inverse: COLORS.GRAY_SCALE_100,
    text_caption: COLORS.GRAY_SCALE_500,
    text_disabled: COLORS.GRAY_SCALE_200,
    text_point: COLORS.WINE_800,

    icon_primary: COLORS.GRAY_SCALE_800,
    icon_secondary: COLORS.GRAY_SCALE_600,
    icon_tertiary: COLORS.GRAY_SCALE_400,

    button_solid: COLORS.WINE_800,
    button_solid_label: COLORS.GRAY_SCALE_000,
    button_ghost_border: COLORS.WINE_800,
    button_ghost_label: COLORS.WINE_800,
    button_soft_fill: COLORS.WINE_100,
    button_soft_label: COLORS.WINE_800,
    button_outline: COLORS.GRAY_SCALE_100,
    button_outline_label: COLORS.GRAY_SCALE_800,
    button_gray_border: COLORS.GRAY_SCALE_000,
    button_gray_label: COLORS.GRAY_SCALE_700,
    button_disabled_fill: COLORS.GRAY_SCALE_100,
    button_disabled_label: COLORS.GRAY_SCALE_200,
  },
};
