import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@@components/Button';
import Flex from '@@components/Flex';
import FullScreen from '@@components/FullScreen';
import Header from '@@components/Header';
import Typography from '@@components/Typography';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import useStore from '@@store/store';

import QuestionContainer from './parts/QuestionContainer';
import { PersonalInfoType } from './types';
import { checkResultType } from './utils';
import { initialWineTest } from '../../assets/data/initialWineTest';

const GOOGLE_SHEET_API_URL = import.meta.env.VITE_GOOGLE_SHEET_API_URL;

const StyledWineTest = styled(FullScreen)`
  width: 100%;
  margin: 0 auto;

  .header {
    font-weight: 700;
  }

  .body {
    flex: 1;
    overflow-y: auto;
    padding: 0 16px;
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

const WineTest = () => {
  const { testResultData: testResultDataJson } = useStore();

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAnswerName, setSelectedAnswerName] = useState<string[]>([]);
  const [mbti, setMbti] = useState('');
  const [personalInfo, setPersonalInfo] = useState<PersonalInfoType>({
    name: '',
    id: '',
    phoneNumber: '',
  });
  const navigate = useNavigate();

  const currentQuestion = initialWineTest.find((q) => q.stepNumber === currentStep);
  const isLastQuestion = currentStep === initialWineTest.length;
  const isFirstQuestion = currentStep === 1;
  const isMbtiQuestion = currentStep === 2;

  const handleBack = () => {
    if (!isFirstQuestion) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(pathGenerator(PAGES.MWTT_HOME));
    }
  };

  const handleAnswerClick = (answerName: string) => {
    setSelectedAnswerName((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentStep - 1] = answerName;
      return newAnswers;
    });

    console.log(selectedAnswerName);
  };

  const handleSheetUpload = async (testResultId: string) => {
    const testResultData = testResultDataJson.find((data) => data.testResultId === testResultId);

    const userData = {
      name: personalInfo.name,
      id: personalInfo.id,
      phoneNumber: `'${personalInfo.phoneNumber}`,
      testResult: `${testResultId}. ${testResultData?.testResultName}`,
      mbti: mbti || 'Empty',
      // 추가 정보
      taste: selectedAnswerName[2],
      scent: selectedAnswerName[3],
      coffee: selectedAnswerName[4],
      kimchi: selectedAnswerName[5],
      blackTea: selectedAnswerName[6],
      chocolate: selectedAnswerName[7],
      food: selectedAnswerName[8],
    };

    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const result = await response.json();
      console.log(result.message);
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  const handleNext = () => {
    if (currentStep < initialWineTest.length) {
      setCurrentStep(currentStep + 1);
    } else {
      const answerValues = selectedAnswerName.map((name, index) => {
        const question = initialWineTest[index];
        const answer = question.stepAnswerList.find((a) => a.answerName === name);
        return answer?.answerValue || '';
      });

      const acidity = answerValues[4] || '';
      const body = answerValues[6] || '';
      const sweetness = answerValues[7] || '';

      const wineTestResult = acidity + body + sweetness;

      const testResultId = checkResultType(wineTestResult);

      // 구글 시트에 이름, 아이디, 연락처, 테스트 결과(TestResult) 업로드
      const queryString = `?result=${testResultId}`;
      handleSheetUpload(testResultId);
      navigate(pathGenerator(PAGES.MWTT_RESULT, queryString));
    }
  };

  const progress = (currentStep / initialWineTest.length) * 100;

  useEffect(() => {
    // 모바일 브라우저의 viewport 높이 문제 해결
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);

    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <StyledWineTest>
      <Header className='header' onBack={handleBack} progress={progress}>
        <Typography.Subtitle1>
          {currentStep}/{initialWineTest.length}
        </Typography.Subtitle1>
      </Header>

      <Flex.Vertical className='body'>
        {currentQuestion && (
          <QuestionContainer
            currentStep={currentStep}
            currentQuestion={currentQuestion}
            isFirstQuestion={isFirstQuestion}
            isMbtiQuestion={isMbtiQuestion}
            mbti={mbti}
            personalInfo={personalInfo}
            selectedAnswerName={selectedAnswerName}
            onMbtiChange={setMbti}
            onAnswerClick={handleAnswerClick}
            onPersonalInfoChange={setPersonalInfo}
          />
        )}
      </Flex.Vertical>

      <FixedBottomButton>
        <FullWidthButton
          onClick={handleNext}
          disabled={
            isFirstQuestion
              ? !personalInfo.name ||
                !personalInfo.id ||
                personalInfo.id.length < 6 ||
                !personalInfo.phoneNumber ||
                personalInfo.phoneNumber.length !== 11
              : isMbtiQuestion
                ? !mbti || mbti.length !== 4
                : !selectedAnswerName[currentStep - 1]
          }
        >
          {!isLastQuestion ? '다음' : '완료'}
        </FullWidthButton>
      </FixedBottomButton>
    </StyledWineTest>
  );
};

export default WineTest;
