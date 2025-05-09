import styled from 'styled-components';

import Flex from '@@components/Flex';
import { ATTR_BY_HEADER_ALIGN } from '@@components/Header/constants';
import { ProgressBarContainer, ProgressBar } from '@@components/Header/parts/ProgressBar';
import { HeaderAlignment, HeaderProps } from '@@components/Header/types';
import { COLORS } from '@@constants/colors';
import { ArrowLeftIcon } from '@@constants/icons';

const BUTTON_SIZE = 24;
const HEADER_HEIGHT = 56;
const HEADER_PADDING = 16;

const StyledHeader = styled.div<{
  $hiddenBack: boolean;
  $align: HeaderAlignment;
}>`
  display: flex;
  justify-content: ${({ $hiddenBack, $align }) => (!$hiddenBack ? 'space-between' : ATTR_BY_HEADER_ALIGN[$align])};
  align-items: center;
  height: ${HEADER_HEIGHT}px;
  padding: 0 ${HEADER_PADDING}px;
  position: relative;

  .header__back_icon_wrap {
    display: ${({ $hiddenBack }) => ($hiddenBack ? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
  }

  .header__title {
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    color: ${COLORS.GRAY_SCALE_900};
  }

  .header__right_icon_wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${BUTTON_SIZE}px;
    height: ${BUTTON_SIZE}px;
    position: absolute;
    right: ${HEADER_PADDING}px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

function Header({ children, titleAlign = 'center', hiddenBack = false, rightIcon, onRightIconClick, className, progress, ...props }: HeaderProps) {
  const handleAppLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.close();
    // window.open('https://godsmwtt55454.imweb.me/', '_blank', 'toolbar=no,location=no,status=no,menubar=no');
  };

  return (
    <Flex.Vertical>
      <StyledHeader {...props} className={`header ${className ?? ''}`} $hiddenBack={hiddenBack} $align={titleAlign}>
        {!hiddenBack && (
          <a className='header__back_icon_wrap' href='imweb://' onClick={handleAppLink} target='_blank' rel='noopener noreferrer'>
            <ArrowLeftIcon />
          </a>
        )}
        {children && <div className='header__title'>{children}</div>}
        {rightIcon && (
          <div className='header__right_icon_wrap' onClick={onRightIconClick}>
            {rightIcon}
          </div>
        )}
      </StyledHeader>
      {progress && (
        <ProgressBarContainer>
          <ProgressBar progress={progress} />
        </ProgressBarContainer>
      )}
    </Flex.Vertical>
  );
}

export default Header;
