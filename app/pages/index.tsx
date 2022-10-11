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
              {/* is a meta-standard of ideas, architectures, & deployed contracts
              built for{' '}
              <span style={{ color: theme.primaryText }}>
                on-chain experiences
              </span>
              . */}
              is a growing set of implementations & public protocols for{' '}
              <span style={{ color: theme.primaryText }}>metadata</span>{' '}
              construction & retrieval
            </span>
          </Title>
          <br />
          <br />
          <PaddedBox style={{ width: '100%' }}>
            <Text>
              The "<span style={{ color: theme.blue }}>Z</span>" in 721
              <span style={{ color: theme.primaryText }}>Z</span> represents an
              umbrella philosophy designed for maximum developer flexibility &
              innovation. We combine 2 simple ideas to create the "last" NFT
              standard:
              <UL>
                <li>
                  the latest usage of IERC721 (
                  <TextAnchor href="https://www.erc721a.org/" target="_blank">
                    ERC721A
                  </TextAnchor>
                  ): best implementation of the minting experience
                </li>
                <li>
                  <span style={{ color: theme.blue }}>RENDERERS</span>: best set
                  of ideas for implementing the metadata experience. contracts
                  that construct & return metadata in real-time.
                </li>
              </UL>
            </Text>
          </PaddedBox>
          <br />
          <br />
          <img width="100%" src="/chart-1.png" />
          <br />
          <br />
          <PaddedBox style={{ width: '100%' }}>
            <Text>
              NFTs can be so much more than just <Code>mint</Code> and{' '}
              <Code>transfer</Code>. By constructing your <Code>tokenURI</Code>{' '}
              with the{' '}
              <LogoText>
                ERC721<span style={{ color: theme.blue }}>Z</span>
              </LogoText>{' '}
              architecture, we get some cool features:
              <UL>
                <li>real-time compute of token attributes & dynamic visuals</li>
                <li>on-chain user interaction / experiences</li>
                <li>live feature releases</li>
                <li>maintainable IPFS / off-chain resources</li>
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
