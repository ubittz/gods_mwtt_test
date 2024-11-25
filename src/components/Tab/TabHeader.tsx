import { useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import TabBarItem from '@@components/Tab/TabBarItem';
import { COLORS } from '@@constants/colors';

const StyledTabHeader = styled(Flex.Horizontal)<{ $width: number; $left: number }>`
  position: relative;
  height: 52px;
  border-bottom: 1px solid ${COLORS.GRAY_SCALE_050};

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: ${({ $left }) => $left}px;
    top: 100%;
    height: 1px;
    width: ${({ $width }) => $width}px;
    background: ${COLORS.WINE_800};
    transition:
      left 0.2s,
      width 0.2s;
  }
`;

function TabHeader({ itemList, selectedIndex, onChange }: { itemList: string[]; selectedIndex: number; onChange?: (index: number) => void }) {
  const headerRef = useRef<HTMLDivElement>(null);

  const [barPosition, setBarPosition] = useState({
    left: 20,
    width: 0,
  });

  useEffect(() => {
    const selectedItem = headerRef.current?.querySelector(`.tab_header__item.selected`) as HTMLElement | undefined;
    if (!selectedItem) return;

    setBarPosition({
      left: selectedItem.offsetLeft,
      width: selectedItem.offsetWidth,
    });
  }, [selectedIndex]);

  return (
    <StyledTabHeader $width={barPosition.width} $left={barPosition.left}>
      {itemList.map((item, index) => (
        <TabBarItem key={index} selected={selectedIndex === index} onClick={() => onChange?.(index)}>
          {item}
        </TabBarItem>
      ))}
    </StyledTabHeader>
  );
}

export default TabHeader;
