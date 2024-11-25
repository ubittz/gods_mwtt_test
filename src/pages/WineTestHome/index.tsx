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

import { TEST_INTRO_TEXT } from './constants';
import CopyRight from './parts/CopyRight';
import LogoContainer from './parts/LogoConatiner';

const StyledWineTestHome = styled(FullScreen)`
  .body {
    width: 100%;

    .text__container {
      padding: 0 16px;
      margin-top: 40px;
      margin-bottom: 32px;

      .test__title {
        color: ${COLORS.WINE_800};
        font-weight: 800;
      }
      .test__intro {
        margin-top: 16px;
        color: ${COLORS.GRAY_SCALE_700};
        font-weight: 400;
        white-space: pre-line;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  padding: 16px 16px 32px;
  display: flex;
  flex-direction: column;
  width: 100%;

  .start__button {
    text-align: center;
  }
`;

const WineTestHome = () => {
  const navigate = useNavigate();
  const handleStartTest = () => {
    navigate(pathGenerator(PAGES.MWTT_TEST));
  };

  return (
    <StyledWineTestHome>
      <Header>
        <Typography.Subtitle1>MWTT 테스트</Typography.Subtitle1>
      </Header>
      <Flex.Vertical className='body'>
        <LogoContainer />
        <Flex.Vertical className='text__container'>
          <Typography.Headline2 className='test__title'>MWTT 와인 테스트</Typography.Headline2>
          <Typography.Body2 className='test__intro'>{TEST_INTRO_TEXT}</Typography.Body2>
        </Flex.Vertical>
        <ButtonContainer>
          <Button.Large className='start__button' onClick={handleStartTest}>
            테스트 시작
          </Button.Large>
        </ButtonContainer>
        <CopyRight />
      </Flex.Vertical>
    </StyledWineTestHome>
  );
};

export default WineTestHome;
