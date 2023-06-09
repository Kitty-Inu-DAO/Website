import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Header from '@/components/base/Header'
import Hero from '@/components/base/Hero'
import HomeFooter from '@/components/base/Footer/Home'


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
            <main className='m-auto w-11/12 lg:w-10/12 xl:w-8/12 bg-sky-800/30 px-10 pt-4 pb-16 rounded-b-lg' style={{ backdropFilter: 'blur(20px)' }}>
                <Hero title='Tokenomics' description='' />
                <div className='flex flex-col items-center justify-center'>
                    <div className='mt-6 flex items-center text-center'>
                        Token Ticker:
                        <img src='/img/buy/kitty_icon.svg' className='ml-2 mr-2 w-6 h-6'></img>
                        $kitty
                        <span className='ml-10 mr-2'> L1 Chain:</span> Ethereum Network
                    </div>
                    <button className='tokenomics-buttons disable mt-12 mb-5 flex items-center cursor-text shadow transform transition duration-200 ease-in'>
                        <img src='/img/buy/kitty_icon.svg' className='ml-2 mr-2 w-6 h-6'></img>
                        731,738,978,480
                    </button>
                    <h2 className='flex items-center text-center mt-8'>
                        Total & Circulating Supply
                    </h2>
                    <div className='flex items-center text-center mt-5 mr-10 ml-10'>
                        A billion ain't no biggie for us. Kitty Inu tokens? We've minted a grand total of 731.7 billion. Why? Because in our world, big numbers are like laser pointers - irresistible and hella fun to chase.
                    </div>

                    <h2 className='mt-16'>Token Allocation</h2>
                </div>
                <div className='flex gap-10 mb-8 mt-8'>
                    <div className='flex-1' style={{ filter: 'drop-shadow(0 0 1rem rgba(0,0,0,0.3))' }}>
                        <img style={{ borderRadius: '1rem' }} src='img/tokenomics/pancake_kitty.webp'></img>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                        <div>
                            <h2 className='mt-10 mb-5'>The DAO's Meow-llionaire's Club: 38%</h2>
                            <p className='text-white'>
                                But who holds the key to the Kitty Castle? It's all you frens! We're all about decentralization, and a significant amount of the Kitty Inu tokens, a cool 38% or 278,074,711,162 billion, are held by you, the Kitty Inu DAO community. You aren't just token hodlers; you're steering this ship.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-10 mb-8 mt-8'>
                    <div className='flex-1 flex items-center justify-center'>
                        <div>
                            <h2 className='mt-12 mb-5'>The Kitty Litter: 62%</h2>
                            <p className='text-white'>
                                62% went to the Kitty Litter - better known as "Public Sale". Here, everyone had an equal chance to grab their share of $kitty tokens. No kitty was left behind!
                            </p>
                        </div>
                    </div>
                    <div className='flex-1' style={{
                        filter: 'drop-shadow(0 0 1rem rgba(0,0,0,0.3))'
                    }}>
                        <img style={{ borderRadius: '1rem' }} src='img/tokenomics/celebration_kitty.webp'></img>
                    </div>
                </div>
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
