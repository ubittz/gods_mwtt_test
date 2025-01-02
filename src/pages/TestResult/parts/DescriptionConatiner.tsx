import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { TestResultDataType } from '../types';

const StyledDescriptionContainer = styled(Flex.Vertical)`
  padding: 0 16px;
  gap: 8px;
  margin-bottom: 32px;

  .title {
    font-weight: 800;
    color: ${COLORS.WINE_800};
  }
  .description {
    font-weight: 400;
    color: ${COLORS.GRAY_SCALE_700};
  }
`;

interface DescriptionContainerProps {
  testResultData: TestResultDataType;
}

export default function DescriptionContainer({ testResultData }: DescriptionContainerProps) {
  return (
    <StyledDescriptionContainer>
      <Typography.Headline3 className='title'>
        {testResultData.testResultId}. {testResultData.testResultName.split('타입')[0]}타입은?
      </Typography.Headline3>
      <Typography.Body3 className='description'>{testResultData.testResultDescript.split('[품종]')[0]}</Typography.Body3>
    </StyledDescriptionContainer>
  );
}
