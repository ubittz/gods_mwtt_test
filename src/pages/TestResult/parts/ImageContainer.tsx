import { useEffect } from 'react';

import styled from 'styled-components';

import { COLORS } from '@@constants/colors';

const StyledImageContainer = styled.section`
  margin-bottom: 24px;
  background-color: ${COLORS.GRAY_SCALE_050};
  width: 100%;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  .img {
    width: 110px;
    height: 180px;
    object-fit: contain;
  }
`;

interface ImageContainerProps {
  imageUrl: string;
}

export default function ImageContainer({ imageUrl }: ImageContainerProps) {
  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);

  return (
    <StyledImageContainer>
      <img className='img' src={imageUrl} alt='testResultImage' />
    </StyledImageContainer>
  );
}
