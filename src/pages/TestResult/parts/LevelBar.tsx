import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const LevelBarBox = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 12px;
  overflow: hidden;
  background-color: ${COLORS.GRAY_SCALE_100};
`;

const LevelProgress = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 8px;
  padding: 0;
  border-radius: 30px;
  text-align: center;
  background-color: ${COLORS.WINE_800};
`;

interface LevelBarProps {
  level: number;
  maxLevel: number;
}

export default function LevelBar(props: LevelBarProps) {
  const { level, maxLevel } = props;

  return (
    <LevelBarBox>
      <LevelProgress width={(level * 100) / maxLevel} />
    </LevelBarBox>
  );
}
