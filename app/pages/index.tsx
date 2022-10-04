import { NextPage } from 'next';
import React from 'react';
import { PaddedBox, PageDiv } from '../components/divs';
import { FlexCenter } from '../components/flex';
import { Header } from '../components/navs/header';
import { LogoText, Text, TextAnchor, Title, UL } from '../components/texts';
import { theme } from '../theme';

const IndexPage: NextPage = () => {
  return (
    <>
      <Header />
      <PageDiv style={{ paddingTop: 64 }}>
        <FlexCenter>
          <Title>
            <LogoText>
              ERC721<span style={{ color: theme.blue }}>Z</span>
            </LogoText>{' '}
            <span style={{ color: theme.secondaryText }}>
              is a meta-standard of ideas, architectures, & deployed contracts
              built for powerful{' '}
              <span style={{ color: theme.primaryText }}>
                on-chain experiences
              </span>
              .
            </span>
          </Title>
          <br />
          <br />
          <PaddedBox style={{ width: '100%' }}>
            <Text>
              The "<span style={{ color: theme.blue }}>Z</span>" in 721
              <span style={{ color: theme.primaryText }}>Z</span> represents an
              umbrella philosophy designed for maximum developer flexibility &
              innovation. We combine 2 simple ideas:
              <UL>
                <li>
                  the latest usage of IERC721 (
                  <TextAnchor href="https://www.erc721a.org/" target="_blank">
                    ERC721A
                  </TextAnchor>
                  )
                </li>
                <li>
                  <span style={{ color: theme.blue }}>RENDERERS</span>:
                  contracts that construct & return your token's metadata in
                  real-time.
                </li>
              </UL>
            </Text>
          </PaddedBox>
        </FlexCenter>
      </PageDiv>
      {/* <Footer /> */}
    </>
  );
};
export default React.memo(IndexPage);
