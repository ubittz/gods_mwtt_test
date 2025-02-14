import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import { PersonalInfoType, StepAnswerType } from '../types';

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
  isFirstQuestion: boolean;
  isMbtiQuestion: boolean;
  mbti: string;
  personalInfo: PersonalInfoType;
  selectedAnswerName: string[];
  onMbtiChange: (value: string) => void;
  onAnswerClick: (answerName: string) => void;
  onPersonalInfoChange: (value: PersonalInfoType) => void;
}

const QuestionSection = ({
  currentStep,
  currentQuestion,
  isMbtiQuestion,
  isFirstQuestion,
  mbti,
  personalInfo,
  selectedAnswerName,
  onMbtiChange,
  onPersonalInfoChange,
  onAnswerClick,
}: QuestionContainerProps) => {
  return (
    <StyledQuestionContainer>
      <Typography.Headline2 className='question__title'>
        Q{currentStep}.<br />
        {currentQuestion.stepQuestion}
      </Typography.Headline2>
      {isFirstQuestion ? (
        <Flex.Vertical>
          <InputField
            type='text'
            name='Name'
            value={personalInfo.name}
            onChange={(e) => onPersonalInfoChange({ ...personalInfo, name: e.target.value })}
            placeholder='이름을 입력해주세요 (예: 홍길동)'
          />
          <InputField
            type='text'
            name='Id'
            value={personalInfo.id}
            onChange={(e) => onPersonalInfoChange({ ...personalInfo, id: e.target.value })}
            placeholder='아이디를 입력해주세요'
            minLength={6}
          />
          <InputField
            type='number'
            name='Phone'
            value={personalInfo.phoneNumber}
            onChange={(e) => onPersonalInfoChange({ ...personalInfo, phoneNumber: e.target.value })}
            placeholder='연락처를 입력해주세요 (예: 01012345678)'
            maxLength={11}
            minLength={11}
          />
        </Flex.Vertical>
      ) : isMbtiQuestion ? (
        <InputField
          type='text'
          name='mbti'
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
