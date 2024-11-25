import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const TextField = styled.input`
  height: 48px;
  outline: none;
  padding: 0 16px;
  border: 1px solid ${COLORS.GRAY_SCALE_100};
  border-radius: 4px;

  font-size: 14px;
  font-weight: 400;
  line-height: 1.3em;

  color: ${COLORS.GRAY_SCALE_900};

  &::placeholder {
    color: ${COLORS.GRAY_SCALE_200};
  }

  &:not(:placeholder-shown) {
    border-color: ${COLORS.GRAY_SCALE_100};
  }

  &:focus {
    border-color: ${COLORS.WINE_800};
  }

  &:read-only {
    color: ${COLORS.GRAY_SCALE_200};
    background: ${COLORS.GRAY_SCALE_100};
    border: none;
  }
`;

export default TextField;
