import Image from 'next/image';
import React from 'react';

interface ModalProps {
    provider?: string;
    displayModal: boolean;
    closeModal: () => void;
}

export default function WalletErrorModal({ provider, displayModal, closeModal }: ModalProps): JSX.Element {
    return (
        displayModal ? <div className='w-screen p-4 h-screen fixed top-0 flex items-center justify-center bg-slate-400/40 transition-opacity duration-1000'>
            <div className='bg-white rounded-xl p-5 flex flex-col items-center'>
                <Image src={`/assets/images/${provider?.toLowerCase()}.png`} width={120} height={100} alt="wallet"></Image>
                <div className='text-3xl font-semibold mt-5 text-center'>
                    Please install <span>{provider}</span>.
                </div>
                <button className='bg-blue2 mt-5 px-4 py-2 rounded-lg text-white font-bold' onClick={closeModal}>
                    OKAY
                </button>
            </div>
        </div>
        : <div></div>
    )
}