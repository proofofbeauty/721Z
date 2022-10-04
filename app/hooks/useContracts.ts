import { JsonRpcProvider } from '@ethersproject/providers';
import { deployments, ERC721A__factory } from '@pob-monorepo/protocol';
import { useMemo } from 'react';
import { getProviderOrSigner } from '../clients/provider';
import { usePriorityAccount } from '../connectors/priority';
import { CHAIN_ID } from '../constants';
import { useProvider } from './useProvider';

export const useERC721AContract = (
  address = deployments[CHAIN_ID].nft,
  shouldUseFallback: boolean = false,
) => {
  const account = usePriorityAccount();
  const provider = useProvider(shouldUseFallback);

  return useMemo(() => {
    if (!address) {
      return;
    }
    if (!account && !provider) {
      return;
    }

    return ERC721A__factory.connect(
      address,
      getProviderOrSigner(provider as JsonRpcProvider, account as string),
    );
  }, [account, address, provider]);
};
