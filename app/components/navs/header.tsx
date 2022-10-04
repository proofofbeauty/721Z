import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { GITHUB_LINK, TWITTER_LINK } from '../../constants';
import { ROUTES } from '../../constants/routes';
import { theme } from '../../theme/';
import { Flex } from '../flex';
import { LogoText } from '../texts';
import { HeaderAnchor } from './anchor';

export const Header: React.FC = () => {
  const router = useRouter();
  return (
    <HeaderRow>
      <HeaderText>
        721<span style={{ color: theme.blue }}>Z</span>
        <MonoText>.dev</MonoText>
      </HeaderText>
      <Flex style={{ gap: 24 }}>
        <Link passHref href={ROUTES.INFO}>
          <HeaderAnchor active={router.pathname.includes(ROUTES.INFO)}>
            LEARN
          </HeaderAnchor>
        </Link>
        <HeaderAnchor
          href={GITHUB_LINK}
          target="_blank"
          rel="noreferrer noopener"
        >
          CONTRACTS
        </HeaderAnchor>
        <HeaderAnchor
          href={GITHUB_LINK}
          target="_blank"
          rel="noreferrer noopener"
        >
          GITHUB
        </HeaderAnchor>
        <HeaderAnchor
          href={TWITTER_LINK}
          target="_blank"
          rel="noreferrer noopener"
        >
          TWITTER
        </HeaderAnchor>
      </Flex>
    </HeaderRow>
  );
};

const HeaderText = styled(LogoText)`
  font-size: 24px;
  letter-spacing: 4px;
`;

const MonoText = styled.span`
  font-weight: normal;
  font-size: 20px;
  letter-spacing: 2px;
  color: ${theme.secondaryText};
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.border};
  padding: 50px 75px;
`;
