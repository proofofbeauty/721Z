import Link from 'next/link';
import styled from 'styled-components';
import {
  HASH_PROD_LINK,
  LONDON_PROD_LINK,
  PUBLICO_PROD_LINK,
  SHOP_PROD_LINK,
  STUDIO_PROD_LINK,
} from '../../constants';
import { BREAKPTS, theme } from '../../theme';
import { Flex } from '../flex/';
import { BaseAnchor } from './anchor';
import { POBStamp } from './brand';

export const Footer: React.FC = () => {
  return (
    <>
      <FooterWrapper>
        <FooterLeftSideContentWrapper>
          <Flex>
            <POBStamp />
            <Link href={'/'} passHref={true}>
              <FooterLogoText>REAPER</FooterLogoText>
            </Link>
          </Flex>
        </FooterLeftSideContentWrapper>
        <FooterRightSideContentWrapper>
          <FooterLinksContainer>
            <FooterLinksColumn>
              <FooterColumnLabel>Proof of Beauty</FooterColumnLabel>
              <FooterLink
                href={STUDIO_PROD_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Studio
              </FooterLink>
              <FooterLink
                href={HASH_PROD_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hash
              </FooterLink>
              <FooterLink
                href={LONDON_PROD_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                London
              </FooterLink>
              <FooterLink
                href={PUBLICO_PROD_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Publico
              </FooterLink>
              <FooterLink
                href={SHOP_PROD_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Print Service
              </FooterLink>
            </FooterLinksColumn>
            {/* <FooterLinksColumn>
              <FooterColumnLabel>Social</FooterColumnLabel>
              <FooterLink
                href={TWITTER_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </FooterLink>
              <FooterLink
                href={DISCORD_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Discord
              </FooterLink>
              <FooterLink
                href={OPENSEA_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenSea
              </FooterLink>
              <FooterLink
                href={GITHUB_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </FooterLink>
              <FooterLink
                href={BLOG_LINK}
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </FooterLink>
              <FooterLink href={EMAIL_LINK}>Email</FooterLink>
            </FooterLinksColumn> */}
            <FooterLinksColumn>
              <FooterColumnLabel>Other</FooterColumnLabel>
              <Link href="/faq" passHref>
                <FooterLink>FAQ</FooterLink>
              </Link>
              <FooterLink
                href="https://hash.pob.studio/terms-of-use"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Use
              </FooterLink>
              <FooterLink
                href="https://hash.pob.studio/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </FooterLink>
            </FooterLinksColumn>
          </FooterLinksContainer>
        </FooterRightSideContentWrapper>
      </FooterWrapper>
    </>
  );
};

const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 36px 0 64px 0;
  width: 100%;
  background: ${theme.body};
  border-top: 1px solid ${theme.border};
  @media (max-width: ${BREAKPTS.SM}px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const FooterSideContentWrapper = styled.div`
  position: relative;
`;

const FooterLeftSideContentWrapper = styled(FooterSideContentWrapper)`
  display: flex;
  align-items: flex-start;
  padding-left: 24px;
  @media (max-width: ${BREAKPTS.SM}px) {
    flex-direction: column;
    padding-bottom: 24px;
  }
`;

const FooterRightSideContentWrapper = styled(FooterSideContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: ${BREAKPTS.SM}px) {
    justify-content: center;
    padding-top: 10px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

const FooterLogoText = styled.a`
  color: ${theme.primaryText};
  font-size: 14px;
  font-weight: 500;
  font-family: Helvetica;
  text-decoration: none;
  text-transform: uppercase;
  text-decoration: none;
  padding-left: 16px;
  &:focus {
    color: ${theme.primaryText};
  }
`;

const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 24px 48px;
  padding-right: 24px;
  @media (max-width: ${BREAKPTS.SM}px) {
    padding-right: 0px;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 150%;
  }
`;

const FooterLinksColumn = styled.div`
  grid-template-columns: 1fr;
`;

const FooterLink = styled(BaseAnchor)`
  font-weight: 500;
  color: ${theme.secondaryText};
  font-size: 12px;
  text-decoration: none;
  display: block;
  padding: 3px 0;
  text-transform: uppercase;
  &:focus,
  :hover {
    color: ${theme.primaryText};
  }
`;

const FooterColumnLabel = styled.p`
  padding: 0;
  margin: 0;
  word-wrap: break-word;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${theme.primaryText};
  padding-bottom: 3px;
`;
