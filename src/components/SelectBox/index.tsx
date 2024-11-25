import { ReactNode, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

interface SelectBoxProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (value: string) => void;

  leftIcon?: ReactNode;
  rightIcon?: ReactNode;

  options?: Array<{ value: string; label: string }>;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
  customDropdown?: ReactNode;

  classNames?: {
    container?: string;
    button?: string;
    content?: string;
    text?: string;
    icon?: string;
    dropdown?: string;
    option?: string;
  };
}

const StyledSelectBox = styled.div<{ $isOpen: boolean }>`
  position: relative;
  width: 100%;
`;

const StyledSelectButton = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  height: 48px;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid ${({ $isOpen }) => ($isOpen ? COLORS.WINE_800 : COLORS.GRAY_SCALE_100)};
  background-color: ${COLORS.GRAY_SCALE_000};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  .select__content {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .select__icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  &:hover {
    border-color: ${COLORS.WINE_800};
  }
`;

const StyledTypography = styled(Typography.Body2)<{ $hasSelected: boolean }>`
  color: ${({ $hasSelected }) => ($hasSelected ? COLORS.GRAY_SCALE_900 : COLORS.GRAY_SCALE_200)};
  font-weight: 400;
`;

const StyledDropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: ${COLORS.GRAY_SCALE_000};
  border: 1px solid ${COLORS.GRAY_SCALE_100};
  border-radius: 4px;
  max-height: 240px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledOption = styled.button<{ $isSelected: boolean }>`
  width: 100%;
  padding: 12px 16px;
  background: ${({ $isSelected }) => ($isSelected ? COLORS.GRAY_SCALE_050 : COLORS.GRAY_SCALE_000)};
  border: none;
  text-align: left;
  cursor: pointer;
  color: ${COLORS.GRAY_SCALE_900};
  font-size: 14px;
  line-height: 20px;

  &:hover {
    background: ${COLORS.GRAY_SCALE_050};
  }
`;

export default function SelectBox({
  value,
  placeholder,
  disabled = false,
  onChange,

  leftIcon,
  rightIcon,

  options = [],
  isOpen: externalIsOpen,
  onOpen,
  onClose,
  customDropdown,

  classNames = {},
}: SelectBoxProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const isOpen = externalIsOpen ?? internalIsOpen;

  const handleToggle = () => {
    if (disabled) return;

    if (isOpen) {
      onClose?.();
      setInternalIsOpen(false);
    } else {
      onOpen?.();
      setInternalIsOpen(true);
    }
  };

  const handleOptionSelect = (optionValue: string) => {
    onChange?.(optionValue);
    onClose?.();
    setInternalIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        onClose?.();
        setInternalIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const selectedOption = options.find((option) => option.value === value);
  const displayText = selectedOption?.label || value || placeholder;

  return (
    <StyledSelectBox ref={selectRef} $isOpen={isOpen} className={classNames.container}>
      <StyledSelectButton type='button' onClick={handleToggle} $isOpen={isOpen} disabled={disabled} className={classNames.button}>
        <Flex.Horizontal className={`select__content ${classNames.content || ''}`}>
          {leftIcon && <span className={`select__icon ${classNames.icon || ''}`}>{leftIcon}</span>}
          <StyledTypography $hasSelected={!!value} className={classNames.text}>
            {displayText}
          </StyledTypography>
        </Flex.Horizontal>
        {rightIcon && <span className={`select__icon ${classNames.icon || ''}`}>{rightIcon}</span>}
      </StyledSelectButton>

      {isOpen &&
        (customDropdown || (
          <StyledDropdown className={classNames.dropdown}>
            {options.map((option) => (
              <StyledOption
                key={option.value}
                $isSelected={option.value === value}
                onClick={() => handleOptionSelect(option.value)}
                className={classNames.option}
              >
                {option.label}
              </StyledOption>
            ))}
          </StyledDropdown>
        ))}
    </StyledSelectBox>
  );
}
