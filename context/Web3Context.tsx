import React from 'react';
import Web3 from 'web3';
import Onboard, { WalletState } from '@web3-onboard/core';
import { WalletInit, WalletHelpers, WalletModule } from '@web3-onboard/common'
import injectedModule from '@web3-onboard/injected-wallets';
import { ProviderLabel } from '@web3-onboard/injected-wallets/dist/types';
import WalletErrorModal from '../components/modals/WalletErrorModal';
import { accountCenter, chainInfo } from '../utils/constants';
import { useRouter } from 'next/router';

export interface ContextType {
    connectWallet: (provider: ProviderLabel) => void;
    conectedWallet: WalletState | undefined;
}

export const Web3Context = React.createContext({} as ContextType);

export default function Web3ContextProvider({ children }: { children: React.ReactNode }): JSX.Element {

    const [conectedWallet, setConnectedWallet] = React.useState<WalletState>();
    const [walletType, setWalletType] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);

    const router = useRouter();

    const connectWallet = async (provider: ProviderLabel) => {
        console.log(provider);
        setWalletType(provider);
        const injected: WalletInit = injectedModule();
        const injectedWallets: WalletModule | WalletModule[] | null = injected({
            device: {
                browser: {
                    name: 'Chrome'
                },
                os: { name: 'Windows' },
                type: 'desktop'
            }
        } as WalletHelpers);
        if ((injectedWallets as any).length === 0) {
            setShowModal(true);
            return;
        }
        console.log();
        const onboard = Onboard({
            wallets: [injected],
            chains: chainInfo,
            accountCenter: accountCenter,
        });

        const connectWallets: WalletState[] = await onboard.connectWallet({
            autoSelect: {
                label: provider,
                disableModals: true
            }
        });

        if(connectWallets[0]) {
            setConnectedWallet(connectWallets[0]);
            const { accounts, chains, label } = connectWallets[0];
            localStorage.setItem('connectedWallet', JSON.stringify({ accounts, chains, label }));
            router.push('/game-list');
        }
    }

    return (
        <Web3Context.Provider
            value={{
                connectWallet,
                conectedWallet
            }}
        >
            {
                children
            }
            <WalletErrorModal provider={walletType} displayModal={showModal} closeModal={() => setShowModal(false)}></WalletErrorModal>
        </Web3Context.Provider>
    )
}
