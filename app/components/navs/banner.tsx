import { FC } from 'react';
import Marquee from 'react-fast-marquee';
import styled from 'styled-components';
import { theme } from '../../theme/';

export const Banner: FC = () => {
  return (
    <BannerContainer>
      <Marquee gradient={false}>
        {Array(32)
          .fill(0)
          .map((_e, index: number) => (
            <BannerText key={`banner-text-${index}`}>
              Announcement: We have shit to announce
            </BannerText>
          ))}
      </Marquee>
    </BannerContainer>
  );
};

const BannerText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  color: ${theme.body};
`;
const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${theme.border};
  background-color: ${theme.green};
  height: 64px;
  ${BannerText} {
    margin-right: 64px;
  }
`;
