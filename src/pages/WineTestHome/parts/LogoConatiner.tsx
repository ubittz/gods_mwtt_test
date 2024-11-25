import styled from 'styled-components';

import logo from '@@assets/images/logo.png';
import Flex from '@@components/Flex';
import { COLORS } from '@@constants/colors';

const StyledLogoContainer = styled(Flex.Vertical)`
  background-color: ${COLORS.WINE_800};
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 220px;

  img {
    margin: 31px 0;
    width: 158px;
    height: 158px;
    object-fit: contain;
  }
`;

export default function LogoContainer() {
  return (
    <StyledLogoContainer>
      <img src={logo} alt='logo' />
    </StyledLogoContainer>
  );
}
