import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import { STUDIO_PROD_LINK } from '../../constants';
import { theme } from '../../theme';

export const POBStamp: FC<{ textColor?: string; backgroundColor?: string }> = ({
  textColor,
  backgroundColor,
}) => {
  return (
    <Link passHref href={`${STUDIO_PROD_LINK}`}>
      <StampContainer
        style={{ backgroundColor }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StampText style={{ color: textColor }}>POB</StampText>
      </StampContainer>
    </Link>
  );
};
const STAMP_CONTAINER_WIDTH = 50;
const StampContainer = styled.a`
  width: ${STAMP_CONTAINER_WIDTH}px;
  height: ${STAMP_CONTAINER_WIDTH}px;
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  background-color: ${theme.primaryText};
`;
const StampText = styled.span`
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  color: ${theme.body};
`;
