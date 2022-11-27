import Head from 'next/head'
import Image from 'next/image'
import Logo from '../components/logo/Logo'
import BodyContent from '../components/pages/index/BodyContent'

export default function Home() {
  return (
    <div className='flex justify-center mt-[114px]'>
      <BodyContent />
    </div>
  )
}
