import styled from 'styled-components';
import { theme } from '../../theme/';

export const BaseAnchor = styled.a`
  outline: none;
  background: none;
  border: none;
  transition: 200ms ease-in-out all;
  transform: scale(1, 1);
  color: inherit;
  text-decoration: none;
  padding: 0;
  &:hover {
  }
`;

export const HeaderAnchor = styled.a<{ active?: boolean }>`
  color: ${(p) => (p.active ? theme.primaryText : theme.secondaryText)};
  text-decoration: none;
  font-size: 12px;
  :hover {
    /* text-decoration: underline; */
    color: ${theme.primaryText};
  }
`;
