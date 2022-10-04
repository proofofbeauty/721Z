import { NextPage } from 'next';
import React from 'react';
import { PaddedBox, PageDiv } from '../components/divs';
import { FlexCenter } from '../components/flex';
import { Header } from '../components/navs/header';
import {
  Code,
  LogoText,
  Text,
  TextAnchor,
  Title,
  UL,
} from '../components/texts';
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
              designed for powerful{' '}
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
              umbrella philosophy built for maximum flexibility & developer
              innovation. We combine 2 simple ideas:
              <UL>
                <li>
                  the latest innovations in IERC721 (
                  <TextAnchor href="https://www.erc721a.org/" target="_blank">
                    ERC721A
                  </TextAnchor>
                  )
                </li>
                <li>
                  <span style={{ color: theme.blue }}>METADATA RENDERERS</span>:
                  contracts that construct, manipulate, & serve down your
                  token's metadata to the <Code>tokenURI</Code> caller.
                </li>
              </UL>
              <br />
              <span style={{ color: theme.blue }}>RENDERERS</span> allow
              real-time compute of token attributes & visual data. Opening up
              the door for rich, on-chain user interaction.
              <UL>
                <li>
                  dynamic metadata construction is entirely optional. (You can
                  still use IPFS)
                </li>
                <li>
                  utilize deployed{' '}
                  <span style={{ color: theme.blue }}>RENDERERS</span> by the
                  community
                </li>
                <li>entirely flexible & open to developer implementation</li>
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
