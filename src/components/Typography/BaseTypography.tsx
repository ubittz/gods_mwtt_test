import { Properties } from 'csstype';
import styled from 'styled-components';

import { TypographyProps, TypographyTheme } from '@@components/Typography/types';

const StyledBaseTypography = styled.p<{
  $theme: TypographyTheme;
  $color?: string;
  $fontSize: Properties['fontSize'];
  $fontWeight: Properties['fontWeight'];
}>`
  letter-spacing: -0.02em;
  ${({ theme, $theme }) => theme.typography[$theme]}
  color: ${({ theme, $color }) => $color ?? theme.color.text_primary};
`;

const BaseTypography =
  (theme: TypographyTheme) =>
  ({ color, fontSize, fontWeight, ...props }: TypographyProps) => {
    return <StyledBaseTypography {...props} $theme={theme} $fontSize={fontSize} $fontWeight={fontWeight} $color={color} />;
  };

export default BaseTypography;
