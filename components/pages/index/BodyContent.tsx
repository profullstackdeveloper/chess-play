import React from 'react';
import Image from 'next/image';
import { ProviderLabel } from '@web3-onboard/injected-wallets/dist/types';
import RoundedButton from '../../buttons/RoundedButton';
import { ContextType, Web3Context } from '../../../context/Web3Context';

export default function BodyContent(): JSX.Element {

    const { connectWallet }: ContextType = React.useContext(Web3Context);

    return (
        <div className='flex flex-col items-center'>
            <div className='text-[46px] font-bold leading-[63.2px] text-center'>
                Welcome to Chess Games
            </div>
            <div className='text-base text-lightBlack leading-[21.98px] mt-[6px] text-center'>
                Sign in with your wallet to be able to authenticate and play games
            </div>
            <div className='h-[231px] flex flex-col items-center justify-between mt-[60px]'>
                <RoundedButton
                    icon={<Image src={'/assets/images/image 443metamask.png'} width={28} height={26} alt='metamask'></Image>}
                    content='Sign in with metamask'
                    className='bg-blue2 text-white text-lg sm:w-[401px] h-[65px] w-[300px]'
                    onClick={() => connectWallet(ProviderLabel.MetaMask)}
                ></RoundedButton>
                <RoundedButton
                    icon={<Image src={'/assets/images/Coinbase-icon-symbol-1coinbase.png'} width={28} height={26} alt='metamask'></Image>}
                    content='Sign in with Coinbase Wallet'
                    className='text-lg sm:w-[401px] h-[65px] w-[300px] border border-solid border-buttonBorder'
                    onClick={() => connectWallet(ProviderLabel.Coinbase)}
                ></RoundedButton>
                <div className='w-full h-14 flex items-center justify-center underline font-semibold text-lg'>
                    Show more options
                </div>
            </div>
        </div>
    )
}