import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { StepAnswerType } from '../types';

const StyledQuestionContainer = styled.div`
  margin-top: 56px;

  .question__title {
    margin-bottom: 40px;
    font-weight: 800;
    white-space: pre-line;
    color: ${COLORS.WINE_800};
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid ${COLORS.GRAY_SCALE_100};
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${COLORS.WINE_800};
  }
`;

const AnswerItem = styled.button<{ $isChecked: boolean }>`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  margin-bottom: 16px;

  color: ${(props) => (props.$isChecked ? COLORS.WINE_800 : COLORS.GRAY_SCALE_700)};
  border: 1px solid ${(props) => (props.$isChecked ? COLORS.WINE_800 : COLORS.GRAY_SCALE_100)};
  background-color: ${(props) => (props.$isChecked ? COLORS.WINE_100 : COLORS.GRAY_SCALE_000)};
`;

interface QuestionContainerProps {
  currentStep: number;
  currentQuestion: {
    stepQuestion: string;
    stepAnswerList: StepAnswerType[];
  };
  isLastQuestion: boolean;
  mbti: string;
  selectedAnswerName: string[];
  onMbtiChange: (value: string) => void;
  onAnswerClick: (answerName: string) => void;
}

const QuestionSection = ({
  currentStep,
  currentQuestion,
  isLastQuestion,
  mbti,
  selectedAnswerName,
  onMbtiChange,
  onAnswerClick,
}: QuestionContainerProps) => {
  return (
    <StyledQuestionContainer>
      <Typography.Headline2 className='question__title'>
        Q{currentStep}.<br />
        {currentQuestion.stepQuestion}
      </Typography.Headline2>
      {isLastQuestion ? (
        <InputField
          type='text'
          value={mbti}
          onChange={(e) => onMbtiChange(e.target.value.toUpperCase())}
          placeholder='MBTI를 입력해주세요 (예: ENFP)'
          maxLength={4}
        />
      ) : (
        <Flex.Vertical>
          {currentQuestion.stepAnswerList.map((answer) => (
            <AnswerItem
              key={answer.answerName}
              $isChecked={selectedAnswerName[currentStep - 1] === answer.answerName}
              onClick={() => onAnswerClick(answer.answerName)}
            >
              {answer.answerName}
            </AnswerItem>
          ))}
        </Flex.Vertical>
      )}
    </StyledQuestionContainer>
  );
};

export default QuestionSection;
