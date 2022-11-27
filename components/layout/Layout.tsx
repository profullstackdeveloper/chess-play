import React from 'react';
import Header from '../header/Header';

export default function Layout ({children}: {children: React.ReactNode}): JSX.Element {
    return (
        <div className='w-full h-screen flex flex-col overflow-hidden bg-main bg-center bg-cover '>
            <div className='flex-grow-0 flex-shrink-0'>
                <Header></Header>
            </div>
            <div className='flex-grow flex-shrink overflow-auto'>
                {
                    children
                }
            </div>
        </div>
    )
}