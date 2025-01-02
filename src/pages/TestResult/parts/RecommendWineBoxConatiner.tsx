import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import RecommendWineBox from './RecommendWineBox';
import { TestResultDataType } from '../types';
import { ProductDataType } from '../types';

const StyledRecommendWineBoxConatiner = styled.div`
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${COLORS.WINE_100};

  .text__container {
    gap: 4px;
    .title {
      font-weight: 700;
      color: ${COLORS.GRAY_SCALE_900};
    }
    .subtitle {
      font-weight: 400;
      color: ${COLORS.GRAY_SCALE_700};
    }
  }

  .product__container {
    width: 100%;
    gap: 20px;
    align-items: center;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-x: hidden;
    scrollbar-width: none;
  }
`;

interface RecommendWineBoxContainerProps {
  testResultData: TestResultDataType;
  productDataList: ProductDataType[];
}

const RecommendWineBoxContainer = ({ testResultData, productDataList }: RecommendWineBoxContainerProps) => {
  return (
    <StyledRecommendWineBoxConatiner>
      <Flex.Vertical className='text__container'>
        <Typography.Subtitle1 className='title'>
          {testResultData.testResultId}. {testResultData.testResultName.split('타입')[0]}타입을 위한 추천 와인
        </Typography.Subtitle1>
        <Typography.Body3 className='subtitle'>MWTT에서 어울리는 와인을 추천드려요</Typography.Body3>
      </Flex.Vertical>
      <Flex.Horizontal className='product__container'>
        {productDataList.map((product: ProductDataType) => (
          <RecommendWineBox key={product.productId} productObj={product} />
        ))}
      </Flex.Horizontal>
    </StyledRecommendWineBoxConatiner>
  );
};

export default RecommendWineBoxContainer;
