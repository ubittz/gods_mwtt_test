import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

const StyledTasteInfoContainer = styled.section`
  padding: 0 16px;
  .header__border {
    border-top: 1.5px solid ${COLORS.GRAY_SCALE_050};
  }

  .body {
    padding: 24px 0;

    .title__text {
      font-weight: 800;
      color: ${COLORS.GRAY_SCALE_900};
      margin-bottom: 20px;
    }

    .taste_info__container {
      gap: 20px;

      .taste_info__row {
        align-items: start;
        gap: 8px;

        .taste_info__title {
          padding: 4px 16px;
          border-radius: 54px;
          color: ${COLORS.WINE_800};
          background-color: ${COLORS.WINE_100};
          font-weight: 700;
        }
        .taste_info__description {
          font-weight: 400;
          color: ${COLORS.GRAY_SCALE_700};
        }
      }
    }
  }
`;

const TasteInfoContainer = () => {
  return (
    <StyledTasteInfoContainer>
      <div className='header__border'></div>
      <Flex.Vertical className='body'>
        <Typography.Headline3 className='title__text'>와인 용어 설명</Typography.Headline3>
        <Flex.Vertical className='taste_info__container'>
          <Flex.Vertical className='taste_info__row'>
            <Typography.Body3 className='taste_info__title'>바디</Typography.Body3>
            <Typography.Body3 className='taste_info__description'>
              입안에서 느껴지는 와인의 무게감이나 농도와 질감, 진함의 정도, 알콜도수, 당의 함량에 의해 결정됩니다.
            </Typography.Body3>
          </Flex.Vertical>
          <Flex.Vertical className='taste_info__row'>
            <Typography.Body3 className='taste_info__title'>탄닌</Typography.Body3>
            <Typography.Body3 className='taste_info__description'>
              입안을 떫게 만드는 정도로 숙성의 정도를 판단하는 기준이 되기도 합니다.
            </Typography.Body3>
          </Flex.Vertical>
          <Flex.Vertical className='taste_info__row'>
            <Typography.Body3 className='taste_info__title'>당도</Typography.Body3>
            <Typography.Body3 className='taste_info__description'>
              와인의 단 정도로 Sweet / Dry 로 크게 구분됩니다. Dry는 레드와인의 탄닌정도를 뜻하기도 합니다.
            </Typography.Body3>
          </Flex.Vertical>
        </Flex.Vertical>
      </Flex.Vertical>
    </StyledTasteInfoContainer>
  );
};

export default TasteInfoContainer;
