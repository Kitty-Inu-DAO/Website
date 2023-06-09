import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Header from '@/components/base/Header'
import Hero from '@/components/base/Hero'
import HomeFooter from '@/components/base/Footer/Home'


export default function Whitepaper() {
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
            <Hero title='Whitepaper' description='' />
            <main className='flex mt-8 flex-col items-center justify-center ml-auto mr-auto w-12/12 mb-auto'>
                <div className="video-embed aspect-w-16 aspect-h-9 max-w-full">
                    <iframe
                        src='https://www.youtube.com/embed/dQw4w9WgXcQ/'
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="object-cover shadow-md"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
            </main>
            <HomeFooter />
        </>
    )
}


export async function getStaticProps() {
    return {
        props: {
            title: 'Whitepaper',
        },
    }
}