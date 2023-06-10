import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Header from '@/components/base/Header'
import Hero from '@/components/base/Hero'
import HomeFooter from '@/components/base/Footer/Home'
import Image from "next/image";


export default function Tokenomics() {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, inView])

  return (
    <>
      <Header />
      <main className='m-auto w-11/12 bg-sky-800/30 backdrop-blur-md lg:w-10/12 xl:w-8/12 pb-10'>
        <section className='px-5 sm:px-10 pt-4 pb-16 rounded-b-lg'>
          <Hero title='Tokenomics' description='' />
          <div className='flex flex-col items-center justify-center'>
            <div className='mt-6 md:flex md:items-center text-center gap-x-10'>
              <div className="flex content-center justify-center text-shadow">Token Ticker: <img src='/img/buy/kitty_icon.svg' className='mx-2 w-6 h-6'></img> $kitty</div>
              <div className="flex content-center justify-center mt-4 md:mt-0 text-shadow">L1 Chain: Ethereum Network</div>
            </div>
            <button className='tokenomics-buttons disable mt-12 mb-5 flex items-center cursor-text shadow-md'>
              <img src='/img/buy/kitty_icon.svg' className='mx-2 w-6 h-6'></img>
              731,738,978,480
            </button>
          </div>

          <div>
            <h2 className='text-center mt-8 text-shadow'>
              Total & Circulating Supply
            </h2>
            <p className='text-center mt-5 md:mx-10'>
              A billion ain't no biggie for us. Kitty Inu tokens? We've minted a grand total of 731.7 billion. Why? Because in our world, big numbers are like laser pointers - irresistible and hella fun to chase.
            </p>
          </div>

          <h2 className='mt-16 text-center text-shadow'>Token Allocation</h2>

          <div className="md:flex mt-16 mb-5 items-center justify-center">
            <div className="mb-8 md:mb-0 md:max-w-[320px] md:flex-1">
              <Image className="w-full rounded-2xl drop-shadow-xl" width="640" height="640" src="/img/tokenomics/pancake_kitty.webp" alt="Kitty eating a cake" />
            </div>
            <div className="md:flex-1 md:pl-8">
              <h3 className='text-2xl text-shadow text-center md:text-left'>The DAO's Meow-llionaire's Club: 38%</h3>
              <p className='mt-4 text-center md:text-left'>
                But who holds the key to the Kitty Castle? It's all you frens! We're all about decentralization, and a significant amount of the Kitty Inu tokens, a cool 38% or 278,074,711,162 billion, are held by you, the Kitty Inu DAO community. You aren't just token hodlers; you're steering this ship.
              </p>
            </div>
          </div>

          <div className="md:flex mt-10 mb-5 items-center justify-center">
            <div className="mb-8 md:mb-0 md:max-w-[320px] md:flex-1 md:order-2">
              <Image className="w-full rounded-2xl drop-shadow-xl" width="640" height="640" src="/img/tokenomics/celebration_kitty.webp" alt="Kitty celebrating" />
            </div>
            <div className="md:flex-1 md:pr-8 md:order-1">
              <h3 className='text-2xl text-shadow text-center md:text-left'>The Kitty Litter: 62%</h3>
              <p className='mt-4 text-center md:text-left'>
                62% went to the Kitty Litter - better known as "Public Sale". Here, everyone had an equal chance to grab their share of $kitty tokens. No kitty was left behind!
              </p>
            </div>
          </div>
        </section>
      </main >
      <HomeFooter />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Tokenomics',
    },
  }
}
