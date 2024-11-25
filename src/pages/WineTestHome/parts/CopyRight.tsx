import styled from 'styled-components';

import Flex from '@@components/Flex';
import Typography from '@@components/Typography';
import { COLORS } from '@@constants/colors';

import CopyRightLogo from '../images';

const StyledCopyRight = styled.div`
  display: flex;
  flex-direction: column;
  background: ${COLORS.GRAY_SCALE_050};
  padding: 40px 16px;
  margin-bottom: 46px;
  gap: 12px;

  .text__info {
    white-space: pre-line;
  }

  .container__customerService {
    color: ${COLORS.GRAY_SCALE_600};

    .text__customerService_time {
      font-weight: 400;
    }

    .text__customerService_contact {
      font-weight: 700;
    }
  }
`;

function CopyRight() {
  return (
    <StyledCopyRight>
      <CopyRightLogo />
      <Flex.Vertical>
        <Typography.Caption1 className='text__info' color={COLORS.GRAY_SCALE_500}>
          (주)레드앤
          <br />
          대표: 강지혜
          <br />
          사업자등록번호: 761-81-03455
          <br />
          주소: 서울특별시 서대문구 간호대로1길 31, 지층1호(홍제동)
        </Typography.Caption1>
      </Flex.Vertical>
      <Flex.Vertical className='container__customerService'>
        <Typography.Body3 className='text__customerService_time' color={COLORS.GRAY_SCALE_500}>
          고객센터 (평일 09:00-18:00)
        </Typography.Body3>
        <Typography.Subtitle2 className='text__customerService_contact' color={COLORS.GRAY_SCALE_500}>
          0507-1315-8693
          <br />
          godsmwtt@godsmwtt.co.kr
        </Typography.Subtitle2>
      </Flex.Vertical>
    </StyledCopyRight>
  );
}

export default CopyRight;
