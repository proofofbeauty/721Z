import { useRouter } from 'next/router';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { animated, config, SpringConfig, useSpring } from 'react-spring';
import { useClickAway, useMountedState } from 'react-use';
import styled from 'styled-components';
import { hooks as metaMaskHooks, metaMask } from '../../connectors/metaMask';
import {
  usePriorityAccount,
  usePriorityConnector,
  usePriorityIsActivating,
} from '../../connectors/priority';
import {
  hooks as walletConnectHooks,
  walletConnect,
} from '../../connectors/walletConnect';
import { CHAIN_ID } from '../../constants';
import { useENSorHex } from '../../hooks/useENS';
import { HeaderAnchor } from './anchor';

interface ExtendedCssProps extends React.CSSProperties {
  y: number;
  config: SpringConfig;
}

const DropdownAnimation: { [key: string]: ExtendedCssProps } = {
  hidden: {
    y: 8,
    opacity: 0,
    pointerEvents: 'none',
    userSelect: 'none',
    config: config.stiff,
  },
  visible: {
    y: 0,
    opacity: 1,
    pointerEvents: 'auto',
    userSelect: 'auto',
    config: config.stiff,
  },
};

export const Web3ConnectWalletContent: FC = () => {
  return (
    <DropdownRowsContainer>
      <ConnectWalletMetamaskOption />
      <ConnectWalletWalletConnectOption />
    </DropdownRowsContainer>
  );
};

const DropdownRowsContainer = styled.div`
  padding: 10px;
`;

const ConnectWalletMetamaskOption = () => {
  const isActivating = metaMaskHooks.useIsActivating();
  if (!window?.ethereum) {
    return (
      <ActionRowButton
        key={`wallet-option-install-metamask`}
        onClick={() => window.open('https://metamask.io', '_blank')}
      >
        Install metamask
      </ActionRowButton>
    );
  }

  return (
    <ActionRowButton
      disabled={isActivating}
      onClick={() => {
        metaMask.activate(CHAIN_ID);
      }}
    >
      {isActivating ? 'Connecting' : 'MetaMask'}
    </ActionRowButton>
  );
};

const ConnectWalletWalletConnectOption = () => {
  const isActivating = walletConnectHooks.useIsActivating();
  return (
    <ActionRowButton
      disabled={isActivating}
      onClick={() => {
        walletConnect.activate(CHAIN_ID);
      }}
    >
      {isActivating ? 'Connecting' : 'Wallet Connect'}
    </ActionRowButton>
  );
};

export const Web3ConnectedWalletContent: FC<{
  setIsDropdownOpen?: (b: boolean) => void;
}> = ({ setIsDropdownOpen }) => {
  const router = useRouter();
  const connector = usePriorityConnector();

  const disconnect = useCallback(() => {
    connector.deactivate();
  }, [router, connector]);

  return (
    <>
      <DropdownRowsContainer>
        <ActionRowButton
          onClick={() => {
            disconnect();
          }}
        >
          Disconnect
        </ActionRowButton>
      </DropdownRowsContainer>
    </>
  );
};

export const Web3Status: FC<{
  onConnectedClick?: () => void;
  prefixAddress?: string;
}> = () => {
  const account = usePriorityAccount();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const clickAwayRef = useRef<HTMLDivElement | null>(null);
  useClickAway(clickAwayRef, () => {
    setIsDropdownOpen(false);
  });

  const ensOrHex = useENSorHex(account);

  const [{ y, opacity, pointerEvents, userSelect }, set] = useSpring(
    () => DropdownAnimation.hidden,
  );

  useEffect(() => {
    if (isDropdownOpen) {
      set(DropdownAnimation.visible);
    } else {
      set(DropdownAnimation.hidden);
    }
  }, [isDropdownOpen]);

  const isMounted = useMountedState();
  const isActivating = usePriorityIsActivating();

  return (
    <>
      <Web3StatusWrapper ref={clickAwayRef}>
        {!!account && (
          <HeaderAnchor
            style={{ cursor: 'pointer' }}
            onClick={() => setIsDropdownOpen(true)}
          >
            {ensOrHex}
          </HeaderAnchor>
        )}
        {!account && !isActivating && (
          <HeaderAnchor
            style={{ cursor: 'pointer' }}
            onClick={() => setIsDropdownOpen(true)}
          >
            CONNECT
          </HeaderAnchor>
        )}
        <DropdownSpacer />
        <Web3DropdownContainer
          style={{
            transform: y.to((v: unknown) => `translateY(${v}%`),
            opacity,
            pointerEvents,
            userSelect,
          }}
        >
          {!account && isMounted() && <Web3ConnectWalletContent />}
          {!!account && isMounted() && (
            <Web3ConnectedWalletContent setIsDropdownOpen={setIsDropdownOpen} />
          )}
        </Web3DropdownContainer>
      </Web3StatusWrapper>
    </>
  );
};

const ActionRowButton = styled.button`
  padding: 12px 12px;
  font-weight: 600;
  color: black;
  font-size: 12px;
  font-weight: normal;
  display: block;
  width: 100%;
  text-align: left;
  transition: all 100ms ease-in-out;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    transform: none;
    background: rgba(0, 0, 0, 0.05);
  }
`;

const Web3DropdownContainer = animated(styled.div`
  position: absolute;
  right: 0;
  margin-top: 10px;
  z-index: 1100;
  background: white;
  min-width: 256px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  opacity: 0;
`);

const DropdownSpacer = styled.div`
  background: transparent;
  width: 100%;
  height: 10px;
  position: absolute;
`;

const Web3StatusWrapper = styled.div`
  position: relative;
`;
