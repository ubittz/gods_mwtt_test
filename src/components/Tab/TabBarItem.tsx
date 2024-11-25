import { PropsWithChildren } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledTabBarItem = styled(Flex.Horizontal)`
  height: 52px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & > p {
    padding: 13px 12px;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  &.selected::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${COLORS.WINE_800};
  }

  .selected_text {
    color: ${COLORS.WINE_800};
  }

  .not_selected_text {
    color: ${COLORS.GRAY_SCALE_200};
  }
`;

function TabBarItem({ selected, onClick, children }: PropsWithChildren<{ selected: boolean; onClick: () => void }>) {
  return (
    <StyledTabBarItem className={selected ? 'selected' : ''} onClick={onClick}>
      {selected ? (
        <Typography.Subtitle2 className='selected_text'>{children}</Typography.Subtitle2>
      ) : (
        <Typography.Subtitle2 className='not_selected_text'>{children}</Typography.Subtitle2>
      )}
    </StyledTabBarItem>
  );
}

export default TabBarItem;
