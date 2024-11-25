import { useState, useEffect } from 'react';

import styled from 'styled-components';

import Button from '@@components/Button';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { ChevronLeftIcon, ChevronRightIcon } from './icons';

interface DateSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (date: string) => void;
  minDate?: string;
  maxDate?: string;
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
  height: 28px;
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const MonthButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 0 16px 16px;
  grid-auto-rows: 56px;
`;

const WeekdayLabel = styled.div<{ $isSunday?: boolean }>`
  text-align: center;
  padding: 0px 8px;
  height: 56px;
  display: flex;
  align-items: start;
  justify-content: center;

  .weekday-text {
    height: 32px;
    font-size: 16px;
    line-height: 24px;
    color: ${({ $isSunday }) => ($isSunday ? COLORS.RED_500 : COLORS.GRAY_SCALE_500)};
  }
`;

const DateCell = styled.button<{
  $isSelected?: boolean;
  $isDisabled?: boolean;
  $isCurrentMonth: boolean;
  $isSunday: boolean;
}>`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: start;
  justify-content: center;
  border: none;
  cursor: ${({ $isDisabled }) => ($isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.5 : 1)};
  background: transparent;
  padding: 0;

  .date-text {
    width: 32px;
    height: 32px;
    font-size: 16px;
    line-height: 32px;
    border-radius: 16px;
    background: ${({ $isSelected }) => ($isSelected ? COLORS.WINE_800 : 'transparent')};
    color: ${({ $isSelected, $isCurrentMonth, $isSunday }) => {
      if ($isSelected) return COLORS.GRAY_SCALE_000;
      if ($isSunday) return COLORS.RED_500;
      if ($isCurrentMonth) return COLORS.GRAY_SCALE_900;
      return COLORS.GRAY_SCALE_200;
    }};
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  padding: 0 16px 12px;

  button {
    width: 100%;
  }
`;

const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

export default function DateSelectModal({
  isOpen,
  onClose,
  onSelect,
  maxDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
}: DateSelectModalProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [tempSelectedDate, setTempSelectedDate] = useState<Date>(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateSelect = (date: Date) => {
    setTempSelectedDate(date);
  };

  const handleConfirm = () => {
    setSelectedDate(tempSelectedDate);
    const year = tempSelectedDate.getFullYear();
    const month = String(tempSelectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(tempSelectedDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    onSelect(formattedDate);
    onClose();
  };

  // 모달이 열릴 때마다 임시 선택 날짜를 현재 선택된 날짜로 초기화
  useEffect(() => {
    if (isOpen) {
      setTempSelectedDate(selectedDate);
    }
  }, [isOpen, selectedDate]);

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const days: Date[] = [];

    // 이전 달의 날짜들
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.unshift(new Date(year, month, -i));
    }

    // 현재 달의 날짜들
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);

    // 오늘 날짜는 허용하고, maxDate만 체크
    return date > new Date(maxDate) || date < today;
  };

  const isSunday = (date: Date) => {
    return date.getDay() === 0;
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />
      <StyledModal $isOpen={isOpen}>
        <ModalHeader />
        <CalendarHeader>
          <MonthButton onClick={handlePrevMonth}>
            <ChevronLeftIcon />
          </MonthButton>
          <Typography.Subtitle1 style={{ fontWeight: 700 }}>
            {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
          </Typography.Subtitle1>
          <MonthButton onClick={handleNextMonth}>
            <ChevronRightIcon />
          </MonthButton>
        </CalendarHeader>

        <CalendarGrid>
          {WEEKDAYS.map((day, index) => (
            <WeekdayLabel key={day} $isSunday={index === 0}>
              <Typography.Body2 className='weekday-text'>{day}</Typography.Body2>
            </WeekdayLabel>
          ))}

          {getDaysInMonth().map((date, index) => {
            const isDisabled = isDateDisabled(date);
            const isSelected = tempSelectedDate?.toDateString() === date.toDateString();
            const isCurrentMonth = date.getMonth() === currentDate.getMonth();

            return (
              <DateCell
                key={index}
                $isSelected={isSelected}
                $isDisabled={isDisabled}
                $isCurrentMonth={isCurrentMonth}
                $isSunday={isSunday(date)}
                onClick={() => !isDisabled && handleDateSelect(date)}
                disabled={isDisabled}
              >
                <Typography.Body2 className='date-text'>{date.getDate()}</Typography.Body2>
              </DateCell>
            );
          })}
        </CalendarGrid>

        <ButtonWrapper>
          <Button.XLarge onClick={handleConfirm} disabled={isDateDisabled(tempSelectedDate)}>
            날짜 변경
          </Button.XLarge>
        </ButtonWrapper>
      </StyledModal>
    </>
  );
}
