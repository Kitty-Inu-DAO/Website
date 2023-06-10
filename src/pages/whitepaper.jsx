import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import Header from '@/components/base/Header'
import Hero from '@/components/base/Hero'
import HomeFooter from '@/components/base/Footer/Home'


export default function Whitepaper() {
    const control = useAnimation()
    const [ref, inView] = useInView()

    const [videoStarted, setVideoStarted] = useState(false);

    const onClick = () => {
        setVideoStarted(true);
    };


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
            <main className='flex mt-8 flex-col items-center justify-center mx-auto mb-auto'>
                <div className="w-full aspect-video px-5 md:px-10 max-w-6xl mb-16">
                    {!videoStarted ?
                        <>
                            <div className='flex w-100 h-100 items-center justify-center text-center'>
                                <img className='video-embed' src="/img/whitepaper/whitepaper_poster.png" onClick={onClick} />
                                <FontAwesomeIcon icon={faPlay} size="3x" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" style={{ width: "5%" }} onClick={onClick} />
                            </div>
                        </> :
                        <>
                            <iframe
                                src={`https://www.youtube.com/embed/dQw4w9WgXcQ/?autoplay=${videoStarted ? 1 : 0}`}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="object-cover shadow-md"
                                style={{ width: "100%", height: "100%", borderRadius: "2rem" }}
                            />
                            <img
                                src="/img/whitepaper/rick_rolled_got_em.png"
                                className="absolute"
                                style={{ bottom: "-12vw", left: "-8vw", width: "55vw", height: "45vw" }}
                            />
                            <p className="absolute z-50 text-white text-xs text-center"
                                style={{ bottom: "-19.4vw", width: "20vw", left: "21.6vw", height: "45vw", fontSize: "1vw" }}
                            >
                                The Kitty Inu DAO has no whitepaper. We're a decentralized organization which is only bounded by the holders's decisions. Our whitepaper is our past work, what's we're currently building, and whatever $kitty's holders decide to do in the future.
                                <br />Let's build together!
                                <br />
                                <span style={{ fontSize: ".5vw" }}>Check out our governance section to learn more!</span>
                            </p>
                        </>
                    }
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
