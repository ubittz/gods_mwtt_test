import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import LevelBar from './LevelBar';
import { ProductDataType } from '../types';

interface RecommendWineBoxProps {
  productObj: ProductDataType;
}

const Container = styled.div`
  width: 192px;
  cursor: pointer;
`;

const ImageBox = styled.div`
  height: 140px;
  width: 192px;
  border-radius: 6px;
  background-color: ${COLORS.GRAY_SCALE_000};
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 130px;
    width: 130px;
    object-fit: fit;
  }
`;

const TextWrap = styled.div`
  width: 100%;
  .productName {
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${COLORS.GRAY_SCALE_900};
  }

  .product_summary {
    height: 44px;
    margin-bottom: 12px;
    color: ${COLORS.GRAY_SCALE_700};
    display: -webkit-box;
    -webkit-line-clamp: 2; // 2줄까지만 표시
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
  }
`;

const TasteWrap = styled.div`
  width: 100%;
  .taste_title {
    display: inline-flex;
    padding: 0.5px 6px;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    background: ${COLORS.WINE_800};
    color: ${COLORS.WINE_100};
    margin-bottom: 12px;
  }
`;

const LevelWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const LevelItem = styled(Flex.Horizontal)`
  align-items: center;
  gap: 10px;
  .level_title {
    color: ${COLORS.GRAY_SCALE_700};
    font-weight: 400;
    white-space: nowrap;
  }
  .level_bar {
    width: 100%;
  }
`;

const RecommendWineBox = ({ productObj }: RecommendWineBoxProps) => {
  return (
    <Container>
      <ImageBox>
        <img src={productObj.productImg} alt='productImg' />
      </ImageBox>
      <TextWrap>
        <Typography.Subtitle2 className='productName'>{productObj.productName.split('(')[0]}</Typography.Subtitle2>
        <Typography.Body3 className='product_summary'>{productObj.productSummary}</Typography.Body3>
      </TextWrap>
      <TasteWrap>
        <Typography.Caption1 className='taste_title'>Taste</Typography.Caption1>
        <LevelWrap>
          <LevelItem>
            <Typography.Caption1 className='level_title'>바디</Typography.Caption1>
            <LevelBar level={productObj.bodyLevel + 1} maxLevel={3} />
          </LevelItem>
          <LevelItem>
            <Typography.Caption1 className='level_title'>타닌</Typography.Caption1>
            <LevelBar level={productObj.tanninLevel + 1} maxLevel={3} />
          </LevelItem>
          <LevelItem>
            <Typography.Caption1 className='level_title'>당도</Typography.Caption1>
            <LevelBar level={productObj.sweetLevel + 1} maxLevel={3} />
          </LevelItem>
        </LevelWrap>
      </TasteWrap>
    </Container>
  );
};

export default RecommendWineBox;
