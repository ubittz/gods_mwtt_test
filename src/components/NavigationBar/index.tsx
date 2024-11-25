import styled from 'styled-components';

import Flex from '@@components/Flex';
import NavigationItem from '@@components/NavigationBar/parts/NavigationItem';
import { NavigationItemType } from '@@components/NavigationBar/types';
import { COLORS } from '@@constants/colors';

const StyledNavigationBar = styled(Flex.Horizontal)`
  height: 72px;
  border-top: 1px solid ${COLORS.GRAY_SCALE_050};

  .navigation_item {
    flex: 1;
  }
`;

const NAVIGATION_LIST: NavigationItemType[] = [
  // {
  //   title: '홈',
  //   path: pathGenerator(PAGES.HOME),
  //   activeIcon: <ActiveHomeIcon />,
  //   inactiveIcon: <InactiveHomeIcon />,
  // },
  // {
  //   title: '예약',
  //   path: pathGenerator(PAGES.RESERVATION),
  //   activeIcon: <ActiveReservationIcon />,
  //   inactiveIcon: <InactiveReservationIcon />,
  // },
  // {
  //   title: '멤버십',
  //   path: pathGenerator(PAGES.MEMBERSHIP),
  //   activeIcon: <ActiveMembershipIcon />,
  //   inactiveIcon: <InactiveMembershipIcon />,
  // },
  // {
  //   title: '종류별와인',
  //   path: pathGenerator(PAGES.WINE.TYPE),
  //   activeIcon: <ActiveWineTypeIcon />,
  //   inactiveIcon: <InactiveWineTypeIcon />,
  // },
  // {
  //   title: '마이',
  //   path: pathGenerator(PAGES.MY),
  //   activeIcon: <ActiveMyIcon />,
  //   inactiveIcon: <InactiveMyIcon />,
  // },
];

function NavigationBar() {
  return (
    <StyledNavigationBar>
      {NAVIGATION_LIST.map((item) => (
        <NavigationItem key={item.title} item={item} />
      ))}
    </StyledNavigationBar>
  );
}

export default NavigationBar;
