import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { PlusButtonIcon, MinusButtonIcon } from './icons';

const StyledButtonContainer = styled(Flex.Horizontal)`
  padding: 0 6px;
  gap: 4px;
  border-radius: 2px;
  height: 28px;
  background-color: ${COLORS.GRAY_SCALE_000};
  color: ${COLORS.GRAY_SCALE_700};
  align-items: center;

  .counter_box__button {
    width: 28px;
    height: 28px;
    cursor: pointer;
    padding: 0 2px;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

interface CounterBoxProps {
  count: number;
  onCountChange: (count: number) => void;
  minCount?: number;
  maxCount?: number;
}

function CounterBox({ count, onCountChange, minCount = 1, maxCount = Infinity }: CounterBoxProps) {
  const handleCountChange = (value: number) => {
    if (value < minCount || value > maxCount) return;
    onCountChange(value);
  };

  return (
    <StyledButtonContainer>
      <button className='counter_box__button' onClick={() => handleCountChange(count - 1)} disabled={count <= minCount}>
        <MinusButtonIcon />
      </button>
      <Typography.Caption1>{count}</Typography.Caption1>
      <button className='counter_box__button' onClick={() => handleCountChange(count + 1)} disabled={count >= maxCount}>
        <PlusButtonIcon />
      </button>
    </StyledButtonContainer>
  );
}

export default CounterBox;
