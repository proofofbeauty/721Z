import styled from 'styled-components';
import { theme } from '../../theme';

export const PageDiv = styled.div`
  margin: 0 400px;
  margin-bottom: 100px;
`;

export const Box = styled.div`
  border: 1px solid ${theme.border};
`;

export const PaddedBox = styled(Box)`
  padding: 32px;
`;
