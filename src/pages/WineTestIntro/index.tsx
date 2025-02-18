import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

import { CheckBoxCheckedIcon, CheckBoxIcon } from './icons';

const StyledWineTestIntro = styled(FullScreen)`
  width: 100%;
  margin: 0 auto;

  .header {
    font-weight: 700;

    .divider {
      height: 1px;
      background-color: ${COLORS.GRAY_SCALE_050};
    }
  }

  .body {
    padding: 0 16px;
    margin-top: 56px;
    margin-bottom: 32px;

    .intro__title {
      color: ${COLORS.WINE_800};
      font-weight: 800;
    }

    .intro__text {
      margin-top: 8px;
      color: ${COLORS.GRAY_SCALE_700};
      font-weight: 400;
      white-space: pre-line;
    }

    .agree__container {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      gap: 8px;

      .agree__checkbox {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
      }
    }
  }
`;

const FixedBottomButton = styled.div`
  position: fixed;
  bottom: 12px;
  left: 16px;
  right: 16px;
  z-index: 1;
`;

const FullWidthButton = styled(Button.XLarge)`
  width: 100%;
  font-weight: 800;
`;

function WineTestIntro() {
  const navigate = useNavigate();

  const [isAgreed, setIsAgreed] = useState(false);

  const handleBack = () => {
    navigate(pathGenerator(PAGES.MWTT_HOME));
  };

  const handleStartTest = () => {
    navigate(pathGenerator(PAGES.MWTT_TEST));
  };

  return (
    <StyledWineTestIntro>
      <Flex.Vertical className='header'>
        <Header onBack={handleBack}>
          <Typography.Subtitle1>MWTT 테스트</Typography.Subtitle1>
        </Header>
        <div className='divider' />
      </Flex.Vertical>
      <Flex.Vertical className='body'>
        <Typography.Headline2 className='intro__title'>테스트 시작 전 안내</Typography.Headline2>
        <Typography.Body1 className='intro__text'>
          테스트는 총 9문항으로 구성되어 있으며, <br />
          개인정보 수집 및 이용에 동의해주세요.
        </Typography.Body1>
        <Flex.Vertical className='agree__container'>
          <Flex.Horizontal className='agree__checkbox' onClick={() => setIsAgreed(!isAgreed)}>
            {isAgreed ? <CheckBoxCheckedIcon /> : <CheckBoxIcon />}
            <Typography.Body2>개인정보 수집 및 이용에 동의합니다.</Typography.Body2>
          </Flex.Horizontal>
        </Flex.Vertical>
        <FixedBottomButton>
          <FullWidthButton className='start__button' onClick={handleStartTest} disabled={!isAgreed}>
            테스트 시작
          </FullWidthButton>
        </FixedBottomButton>
      </Flex.Vertical>
    </StyledWineTestIntro>
  );
}

export default WineTestIntro;
