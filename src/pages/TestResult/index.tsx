import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Header from '@@components/Header';
import { COLORS } from '@@constants/colors';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import useStore from '@@store/store';

import DescriptionContainer from './parts/DescriptionConatiner';
import ImageContainer from './parts/ImageContainer';
import RecommendWineBoxContainer from './parts/RecommendWineBoxConatiner';
import TasteInfoContainer from './parts/TasteInfoContainer';
import TopResultContainer from './parts/TopResultContainer';

const StyledTestResultPage = styled.div`
  height: 100%;
  .header__border {
    border-top: 1px solid ${COLORS.GRAY_SCALE_050};
  }
`;

const ButtonContainer = styled.div`
  padding: 24px 16px 39px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;

  .reservation__button {
    padding: 14px;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
  }
  .retry__button {
    padding: 14px;
    font-size: 14px;
    font-weight: 700;
    text-align: left;
  }
`;

const TestResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const resultId = queryParams.get('result');

  const { testResultData: testResultDataJson, productData: productDataJson } = useStore();

  const testResultData = testResultDataJson.find((data) => data.testResultId === resultId);
  const productDataList = productDataJson.filter((data) => data.testResultId === resultId);

  const handleBackButton = () => {
    navigate(-1);
  };

  const handleReservationButton = () => {
    alert('큐레이션 예약하기');
  };

  const handleRetryButton = () => {
    navigate(pathGenerator(PAGES.MWTT_HOME));
  };

  if (!testResultData) {
    return <StyledTestResultPage>결과를 찾을 수 없습니다.</StyledTestResultPage>;
  }

  return (
    <StyledTestResultPage>
      <Header onBack={handleBackButton}>MWTT 결과</Header>
      <div className='header__border'></div>
      <TopResultContainer testResultData={testResultData} />
      <ImageContainer imageUrl={testResultData.testResultImg} />
      <DescriptionContainer testResultData={testResultData} />
      <TasteInfoContainer />
      <RecommendWineBoxContainer testResultData={testResultData} productDataList={productDataList} />
      <ButtonContainer>
        <Button.Large className='reservation__button' onClick={handleReservationButton}>
          MWTT 큐레이션 예약하기
        </Button.Large>
        <Button.Large theme='ghost' className='retry__button' onClick={handleRetryButton}>
          테스트 다시하기
        </Button.Large>
      </ButtonContainer>
    </StyledTestResultPage>
  );
};

export default TestResultPage;
