import { Chain, ChainWithDecimalId } from '@web3-onboard/common'
import { AccountCenterOptions } from '@web3-onboard/core/dist/types';

export const chainInfo: Chain[] | ChainWithDecimalId[] = [
    {
        id: '0x1',
        label: 'Ethereum Mainnet',
        rpcUrl: 'https://mainnet.infura.io/v3/864d7f35e5514229b5755fc01ebc57b6',
        token: 'ETH'
    },
    {
        id: '0x38',
        label: 'Binance Smart Chain',
        rpcUrl: 'https://bsc-dataseed.binance.org/',
        token: 'BNB'
    },
    {
        id: '0x61',
        label: 'Binance Smart Chain Test',
        rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
        token: 'BNB'
    },
    {
        id: '0x5',
        label: 'Goerli test network',
        rpcUrl: 'https://goerli.infura.io/v3/864d7f35e5514229b5755fc01ebc57b6',
        token: 'GoerliETH'
    },
]

export const accountCenter: AccountCenterOptions = {
    desktop: {
        enabled: false
    },
    mobile: {
        enabled: false
    }
}