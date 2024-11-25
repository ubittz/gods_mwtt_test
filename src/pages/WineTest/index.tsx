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

import QuestionContainer from './parts/QuestionContainer';
import { initialWineTest } from '../../assets/data/initialWineTest';

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

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${COLORS.GRAY_SCALE_100};
`;

const ProgressBar = styled.div<{ progress: number }>`
  width: ${({ progress }) => `${progress}%`};
  height: 100%;
  background-color: ${COLORS.WINE_800};
  transition: width 0.3s ease;
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
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAnswerName, setSelectedAnswerName] = useState<string[]>([]);
  const [mbti, setMbti] = useState('');
  const navigate = useNavigate();

  const currentQuestion = initialWineTest.find((q) => q.stepNumber === currentStep);
  const isLastQuestion = currentStep === initialWineTest.length;
  const isFirstQuestion = currentStep === 1;

  const handleBack = () => {
    if (!isFirstQuestion) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswerClick = (answerName: string) => {
    setSelectedAnswerName((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentStep - 1] = answerName;
      return newAnswers;
    });
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

      const result = answerValues.slice(0, 3).join('');
      const testResultId = result === 'AAA' ? 'A' : result === 'BBB' ? 'B' : result === 'CCC' ? 'C' : 'D';

      const queryString = `?result=${testResultId}`;
      navigate(pathGenerator(PAGES.MWTT_RESULT, queryString));
    }
  };

  const progress = (currentStep / initialWineTest.length) * 100;

  return (
    <StyledWineTest>
      <Header className='header' onBack={isFirstQuestion ? undefined : handleBack}>
        <Typography.Subtitle1>
          {currentStep}/{initialWineTest.length}
        </Typography.Subtitle1>
      </Header>

      <ProgressBarContainer>
        <ProgressBar progress={progress} />
      </ProgressBarContainer>

      <Flex.Vertical className='body'>
        {currentQuestion && (
          <QuestionContainer
            currentStep={currentStep}
            currentQuestion={currentQuestion}
            isLastQuestion={isLastQuestion}
            mbti={mbti}
            selectedAnswerName={selectedAnswerName}
            onMbtiChange={setMbti}
            onAnswerClick={handleAnswerClick}
          />
        )}
      </Flex.Vertical>

      <FixedBottomButton>
        <FullWidthButton onClick={handleNext} disabled={isLastQuestion ? !mbti || mbti.length !== 4 : !selectedAnswerName[currentStep - 1]}>
          {currentStep < initialWineTest.length ? '다음' : '완료'}
        </FullWidthButton>
      </FixedBottomButton>
    </StyledWineTest>
  );
};

export default WineTest;
