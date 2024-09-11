import Head from 'next/head'
import Image from 'next/image'

import Search from '@/components/Search'
import Footer from '@/components/Footer'

import bgGradient from '../../public/bg-gradient.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Elastic Hybrid Search Workshop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={bgGradient}
        alt="Background gradient"
        fill="true"
        className="object-cover object-center w-screen h-screen !fixed z-0"
      />
      <main className='relative' style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        <div style={{flex: 1}} ><Search /></div>
        <Footer />
      </main>
      
    </>
  );
}
