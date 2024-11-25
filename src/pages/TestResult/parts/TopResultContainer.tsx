import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { TestResultDataType } from '../types';

const StyledTopResultContainer = styled.section`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 36px;

  .subtitle__info {
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    margin-bottom: 4px;
    text-align: center;
  }

  .result__container {
    .result__type {
      font-weight: 800;
      color: ${COLORS.WINE_800};
      margin-bottom: 0;
      text-align: center;
    }
    .result__title {
      font-weight: 800;
      color: ${COLORS.WINE_800};
      margin-bottom: 20px;
      text-align: center;
    }
  }

  .taste__type__container {
    margin-bottom: 36px;
    gap: 12px;
    justify-content: center;

    .taste__flag {
      padding: 8px 16px;
      border-radius: 4px;
      background-color: ${COLORS.WINE_100};
      gap: 4px;
      border-radius: 54px;

      .taste__flag__label {
        font-weight: 400;
        color: ${COLORS.GRAY_SCALE_700};
      }
      .taste__flag__value {
        font-weight: 700;
        color: ${COLORS.WINE_800};
      }
    }
  }
`;

interface TopResultContainerProps {
  testResultData: TestResultDataType;
}

const TopResultContainer = ({ testResultData }: TopResultContainerProps) => {
  const getLevelText = (level: number) => {
    switch (level) {
      case 0:
        return '약';
      case 1:
        return '중';
      case 2:
        return '강';
      default:
        return '';
    }
  };

  return (
    <StyledTopResultContainer>
      <Typography.Body3 className='subtitle__info'>당신의 와인타입은</Typography.Body3>
      <Flex.Vertical className='result__container'>
        <Typography.Headline3 className='result__type'>{testResultData.testResultType}</Typography.Headline3>
        <Typography.Headline1 className='result__title'>
          {testResultData.testResultId.charAt(0)}. {testResultData.testResultName.split('타입')[0]}타입
        </Typography.Headline1>
      </Flex.Vertical>
      <Flex.Horizontal className='taste__type__container'>
        {[
          { label: '바디', value: testResultData.bodyLevel },
          { label: '탄닌', value: testResultData.tanninLevel },
          { label: '당도', value: testResultData.sweetLevel },
        ].map((item) => (
          <Flex.Horizontal key={item.label} className='taste__flag'>
            <Typography.Body3 className='taste__flag__label'>{item.label}</Typography.Body3>
            <Typography.Body3 className='taste__flag__value'>{getLevelText(item.value)}</Typography.Body3>
          </Flex.Horizontal>
        ))}
      </Flex.Horizontal>
    </StyledTopResultContainer>
  );
};

export default TopResultContainer;
