import { useState } from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

interface TimeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (time: string) => void;
  initialTime?: string;
}

const StyledModal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${COLORS.GRAY_SCALE_000};
  border-radius: 16px 16px 0 0;
  transform: translateY(${({ $isOpen }) => ($isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  padding-bottom: env(safe-area-inset-bottom);
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
`;

const ModalHeader = styled.div`
  height: 12px;
`;

const TimeSection = styled.div`
  padding: 16px 16px 0;
`;

const SectionTitle = styled(Typography.Body2)`
  color: ${COLORS.GRAY_SCALE_900};
  margin-bottom: 12px;
`;

const TimeGridContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`;

const TimeGrid = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-start;
`;

const TimeButton = styled.button<{ $isSelected: boolean }>`
  width: 76px;
  height: 40px;
  border-radius: 45px;
  border: 1px solid ${({ $isSelected }) => ($isSelected ? COLORS.WINE_800 : COLORS.GRAY_SCALE_100)};
  background: ${({ $isSelected }) => ($isSelected ? COLORS.WINE_800 : COLORS.GRAY_SCALE_000)};
  color: ${({ $isSelected }) => ($isSelected ? COLORS.GRAY_SCALE_000 : COLORS.GRAY_SCALE_700)};
  cursor: pointer;
  font-size: 14px;
  line-height: 22.4px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ButtonWrapper = styled.div`
  padding: 12px 16px;

  button {
    width: 100%;
  }
`;

const AM_TIMES = ['10:00', '11:00'];
const PM_TIMES = Array.from({ length: 9 }, (_, i) => `${i + 12}:00`); // 12:00 ~ 20:00

export default function TimeModal({ isOpen, onClose, onSelect, initialTime = '12:00' }: TimeModalProps) {
  const [selectedTime, setSelectedTime] = useState(initialTime);

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    onSelect(selectedTime);
    onClose();
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <StyledModal $isOpen={isOpen}>
        <ModalHeader />

        <TimeSection>
          <SectionTitle>오전</SectionTitle>
          <TimeGridContainer>
            <TimeGrid>
              {AM_TIMES.map((time) => (
                <TimeButton key={time} $isSelected={selectedTime === time} onClick={() => handleTimeSelect(time)}>
                  {time}
                </TimeButton>
              ))}
            </TimeGrid>
          </TimeGridContainer>
        </TimeSection>

        <TimeSection>
          <SectionTitle>오후</SectionTitle>
          <TimeGridContainer>
            <TimeGrid>
              {PM_TIMES.map((time) => (
                <TimeButton key={time} $isSelected={selectedTime === time} onClick={() => handleTimeSelect(time)}>
                  {time}
                </TimeButton>
              ))}
            </TimeGrid>
          </TimeGridContainer>
        </TimeSection>

        <ButtonWrapper>
          <Button.XLarge onClick={handleConfirm}>시간 변경</Button.XLarge>
        </ButtonWrapper>
      </StyledModal>
    </>
  );
}
