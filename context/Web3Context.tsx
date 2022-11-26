import React from 'react';
import Web3 from 'web3';
import Onboard, { WalletState } from '@web3-onboard/core';
import { WalletInit, WalletHelpers } from '@web3-onboard/common'
import injectedModule from '@web3-onboard/injected-wallets';
import { ProviderLabel } from '@web3-onboard/injected-wallets/dist/types';

export interface ContextType {
    connectMetamask: () => void;
    connectCoinbase: () => void;
}

export const Web3Context = React.createContext({} as ContextType);

export default function Web3ContextProvider({ children }: { children: React.ReactNode }): JSX.Element {

    const [conectedWallet, setConnectedWallet] = React.useState<WalletState>();

    const connectMetamask = async () => {

        const injected: WalletInit = injectedModule();

        const onboard = Onboard({
            wallets: [injected],
            chains: [
                {
                    id: '0x1',
                    label: 'Ethereum Mainnet',
                    rpcUrl: 'https://mainnet.infura.io/v3/864d7f35e5514229b5755fc01ebc57b6',
                    token: 'ETH'
                }
            ],
            accountCenter: {
                desktop: {
                    enabled: false
                },
                mobile: {
                    enabled: false
                }
            },
        });

        const connectWallets: WalletState[] = await onboard.connectWallet({
            autoSelect: {
                label: ProviderLabel.MetaMask,
                disableModals: true
            }
        });

        setConnectedWallet(connectWallets[0])
        console.log('connect wallet: ', connectWallets);

    }

    const connectCoinbase = async () => {

        const injected = injectedModule();

        const onboard = Onboard({
            wallets: [injected],
            chains: [
                {
                    id: '0x1',
                    label: 'Ethereum Mainnet',
                    rpcUrl: 'https://mainnet.infura.io/v3/864d7f35e5514229b5755fc01ebc57b6',
                    token: 'ETH'
                }
            ],
            accountCenter: {
                desktop: {
                    enabled: false
                },
                mobile: {
                    enabled: false
                }
            },
        });

        const connectWallets = await onboard.connectWallet({
            autoSelect: {
                label: ProviderLabel.Coinbase,
                disableModals: true
            }
        });
        setConnectedWallet(connectWallets[0]);
        console.log('connect wallet: ', connectWallets)
    }

    return (
        <Web3Context.Provider
            value={{
                connectMetamask,
                connectCoinbase
            }}
        >
            {
                children
            }
        </Web3Context.Provider>
    )
}