import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import Header from '@/components/base/Header'
import Hero from '@/components/base/Hero'
import HomeFooter from '@/components/base/Footer/Home'
import Link from "next/link";


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

            <main className='flex flex-col items-center justify-center mx-auto mb-auto'>
                <section className='w-11/12 lg:w-10/12 xl:w-8/12 flex flex-col items-center justify-center bg-[#b517b3]/30 px-10 pt-4 pb-28 rounded-b-lg backdrop-blur-md'>

                <Hero title='Whitepaper' description='' />

                <div className="w-full px-5 md:px-10 max-w-6xl mb-16">
                    <p className="mt-4">
                        The Kitty Inu DAO doesn't provide a traditional whitepaper.<br />
                        We are a decentralized organisation that is solely guided by the decisions of our holders.<br />
                        <span className="font-bold">Our whitepaper is represented by our past work, what we're currently building and what the $kitty holders will decide to do in the future.</span>
                    </p>
                    <p className="mt-4 mb-16">
                        Please check our <Link href="/roadmap" className="underline hover:no-underline">Roadmap</Link> and <Link href="https://docs-kittyinudao.eth.limo/" className="underline hover:no-underline">Governance</Link> pages for more details.
                        And let's build together!
                    </p>
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

                </section>
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
