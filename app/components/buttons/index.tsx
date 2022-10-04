import styled from 'styled-components';
import { theme } from '../../theme';

export const BaseButton = styled.button`
  outline: none;
  background: none;
  border: none;
  transition: 200ms ease-in-out all;
  padding: 0;
  margin: 0;
  cursor: pointer;
  :disabled {
    cursor: not-allowed;
  }
`;

export const ActionButton = styled(BaseButton)`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  box-shadow: 0 0 0 1px ${theme.border};
  padding: 20px 16px;
  :disabled {
    opacity: 0.5;
  }
`;

export const PrimaryButton = styled(ActionButton)`
  color: ${theme.body};
  background: ${theme.primaryText};
`;

export const SecondaryButton = styled(ActionButton)`
  color: ${theme.primaryText};
  background: ${theme.body};
`;
