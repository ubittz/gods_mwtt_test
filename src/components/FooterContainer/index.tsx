import styled from 'styled-components';

import Flex from '@@components/Flex';

const FooterContainer = styled(Flex.Horizontal)`
  padding: 12px 16px;

  & > * {
    flex: 1;
  }
`;

export default FooterContainer;
