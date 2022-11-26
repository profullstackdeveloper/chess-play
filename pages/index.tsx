import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/logo/Logo'
import BodyContent from '../components/pages/index/BodyContent'

export default function Home() {
  return (
    <div className='w-full h-screen bg-main bg-center bg-cover flex flex-col overflow-hidden'>
      <div className='flex-grow-0 flex-shrink-0'>
        <div className='md:mt-[50px] md:ml-[90px] mt-[20px] ml-[50px]'>
          <Logo></Logo>
        </div>
      </div>
      <div className='flex-grow flex-shrink w-full h-full overflow-auto'>
        <div className='flex justify-center mt-[114px]'>
          <BodyContent />
        </div>
      </div>

    </div>
  )
}
