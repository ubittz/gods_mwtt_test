import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${COLORS.GRAY_SCALE_100};
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background-color: ${COLORS.WINE_800};
  transition: width 0.3s ease;
`;

export { ProgressBarContainer, ProgressBar };
