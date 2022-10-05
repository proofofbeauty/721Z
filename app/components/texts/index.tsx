import styled from 'styled-components';
import { theme } from '../../theme';

export const Label = styled.div`
  padding: 0;
  margin: 0;
  font-size: 12px;
  opacity: 0.2;
`;

export const Text = styled.div`
  padding: 0;
  margin: 0;
  font-size: 14px;
  line-height: 32px;
`;

export const LogoText = styled.div`
  display: inline-block;
  font-weight: bold;
  color: ${theme.primaryText};
`;

export const Title = styled.h1`
  padding: 0;
  margin: 0;
  font-size: 32px;
  line-height: 48px;
  font-weight: normal;

  ${LogoText} {
    letter-spacing: 4px;
  }
`;

export const TextAnchor = styled.a`
  padding: 0;
  margin: 0;
  text-decoration: none;
  color: ${theme.blue};
  font-size: inherit;
`;

export const UL = styled.ul`
  list-style-type: '>>';
  > li {
    padding-left: 8px;
  }
`;

export const Code = styled.code`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 0 4px;
`;
