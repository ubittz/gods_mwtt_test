import styled from 'styled-components';

import { ButtonProps, ButtonSize, ButtonTheme } from './types';

const StyledIconButton = styled.button<{
  $size: ButtonSize;
  $theme: ButtonTheme;
}>`
  outline: none;
  border-radius: 4px;
  font-weight: 700;
  line-height: 1.3em;
  padding: 2px 8px;
  letter-spacing: -0.02em;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  ${({ theme, $size }) => theme.button.size[$size]}
  ${({ theme, $theme }) => theme.button.theme[$theme]}
`;

const IconButton =
  (size: ButtonSize) =>
  ({ theme = 'solid', leftIcon, rightIcon, children, ...props }: ButtonProps) => {
    return (
      <StyledIconButton {...props} $size={size} $theme={theme}>
        {leftIcon}
        {children}
        {rightIcon}
      </StyledIconButton>
    );
  };

export default IconButton;
