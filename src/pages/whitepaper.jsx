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
                <div className="w-full px-5 md:px-10 max-w-6xl mb-16">
                    {!videoStarted ?
                        <>
                            <div className='flex items-center justify-center text-center'>
                                <img className='video-embed w-full h-full' src="/img/whitepaper/whitepaper_poster.webp" onClick={onClick} />
                                <FontAwesomeIcon icon={faPlay} size="3x" className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer w-1/12" onClick={onClick} />
                            </div>
                        </> :
                        <>
                            <div className='flex items-center justify-center text-center'>
                                <iframe
                                    src={`https://www.youtube.com/embed/dQw4w9WgXcQ/?autoplay=${videoStarted ? 1 : 0}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="shadow-md video-embed w-full aspect-w-16 aspect-h-9"
                                />
                                <img
                                    src="/img/whitepaper/rick_rolled_got_em_with_text.webp"
                                    className="absolute w-50 h-50 md:w-2/3 md:h-auto bottom-0 right-10 md:bottom-[-18%] md:left-[-15%]"
                                />
                            </div>
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
