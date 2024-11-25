import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import Flex from '@@components/Flex';
import { NavigationItemType } from '@@components/NavigationBar/types';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledNavigationItem = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  -webkit-tap-highlight-color: transparent;

  &:active,
  &:visited {
    background: #fff;
  }

  .navigation_item__icon {
    width: 30px;
    height: 30px;
  }
`;

function NavigationItem({ item }: { item: NavigationItemType }) {
  return (
    <StyledNavigationItem to={item.path} className='navigation_item'>
      {({ isActive }) => (
        <>
          <Flex.Horizontal justifyContent='center' alignItems='center' className='navigation_item__icon'>
            {isActive ? item.activeIcon : item.inactiveIcon}
          </Flex.Horizontal>
          <Typography.Caption1 color={isActive ? COLORS.WINE_800 : COLORS.GRAY_SCALE_400} fontSize='10px' fontWeight={400}>
            {item.title}
          </Typography.Caption1>
        </>
      )}
    </StyledNavigationItem>
  );
}

export default NavigationItem;
