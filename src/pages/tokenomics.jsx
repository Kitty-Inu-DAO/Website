import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Header from '@/components/base/Header'
import Hero from '@/components/base/Hero'
import HomeFooter from '@/components/base/Footer/Home'

const teamVariant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 1, y: 60 },
}

export default function RealAgents() {
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
            <Hero title='Tokenomics' description='' />
            <img src='/img/projects/Kollektion.jpg'></img>
            <main className='m-auto w-10/12 mb-auto bg-sky-800/50 px-10 py-8 rounded-lg'>
                <h2 className='mb-5'>Total Supply: Billionaire Catnip</h2>
                <div className='flex gap-10 mb-8 mt-12'>
                    <div className='flex-1 flex items-center justify-center'>
                        <p className='text-white mb-20'>
                            A billion ain't no biggie for us. Kitty Inu tokens? We've minted a grand total of one billion. Why? Because in our world, big numbers are like laser pointers - irresistible and hella fun to chase.
                        </p>
                    </div>
                    <div className='flex-1' style={{ maxWidth: '80%', filter: 'drop-shadow(0 0 1rem rgba(0,0,0,0.3))', overflow: 'hidden', borderRadius: '1rem' }}>
                        <img src='img/kollektion/Psychedelic.jpg'></img>
                    </div>
                </div>
                <h2 className='mt-24 mb-5'>The DAO's Meow-llionaire's Club</h2>
                <div className='flex gap-10 mb-8 mt-8'>
                    <div className='flex-1' style={{ maxWidth: '80%', filter: 'drop-shadow(0 0 1rem rgba(0,0,0,0.3))', overflow: 'hidden', borderRadius: '1rem' }}>
                        <img src='img/kollektion/porcelein.jpg'></img>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                        <p className='text-white'>
                            But who holds the key to the Kitty Castle? It's all you frens! We're all about decentralization, and the majority of the Kitty Inu tokens, a cool 20% or 500 million, are held by you, the Kitty Inu DAO community. You aren't just token hodlers; you're steering this ship.
                        </p>
                    </div>
                </div>
            </main>
            <HomeFooter />
        </>
    )
}
