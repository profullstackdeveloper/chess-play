import Image from 'next/image';
import React from 'react';

export default function Logo (): JSX.Element {
    return (
        <div className='flex items-center'>
            <div className='uppercase font-bold text-lg'>
                chess
            </div>
            <div>
                <Image src='/assets/images/noto_chess-pawnlogo.png' alt='logo' width={32} height={32} ></Image>
            </div>
            <div className='uppercase font-semibold text-lg'>
                games
            </div>
        </div>
    )
}