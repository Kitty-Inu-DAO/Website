import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import ReactPlayer from 'react-player'

import Header from '@/components/base/Header/';
import Hero from '@/components/base/Hero'
import HomeFooter from '@/components/base/Footer/Home'

const teamVariant = {
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 1, y: 60 },
}

export default function About() {
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
          <Hero title='About' description='' />
          <div class='flex'>
            <div className='flex-1 video-wrapper mt-4'>
              <div>
                <ReactPlayer
                  playing={false}
                  url='/img/about/kittys_back.webm'
                  width='100%'
                  height='100%'
                  controls={true}
                />
              </div>
            </div>
          </div>
          <h2 className='mt-20 mb-5 text-center text-shadow'>This ain't your grandma's knitting circle</h2>
          <p className='text-white text-center mt-8'>
            We're a decentralized pack of meme coin junkies, gaming gurus, creative technomancers, and art aficionados. Here, we're about more than just raising the roof; we're about raising the woof...err... meow?
          </p>
          <h2 className='mt-16 mb-5 text-center text-shadow'>We Govern Stuff...</h2>
          <p className='text-white text-center mt-8'>
            Fueling our meme-powered rocket is the Kitty Inu token, the ERC20 certified digital tuna that governs our DAO. It's not just another fish in the sea; it's your boarding pass into the fur-midable world of DAO governance. Remember, in Kitty Inu DAO, your vote doesn't just count; it purrs!
          </p>
          <h2 className='mt-16 mb-5 text-shadow'>cat-doge of the interwebz</h2>
          <div className='flex gap-10 mb-8 mt-8 items-center'>
            <div className='flex-1 justify-center'>
              <p className='text-white'>
                The star of our meme-verse is the one and only Kitty Inu, licensed by 9VRSE Inc. As the reigning cat-doge of the interwebz, Kitty Inu is the embodiment of all that's cool and claw-some in the DAO world. And no, Kitty Inu is not up for adoption; we're all just its humble servants in this decentralized playground.
              </p>
            </div>
            <div className='flex-1 mt-8'>
              <div>
                <ReactPlayer
                  playing={false}
                  url='/img/about/kitty_news.webm'
                  width='100%'
                  height='100%'
                  controls={true}
                />
              </div>
            </div>
          </div>
          <h2 className='mt-16 mb-5 text-shadow'>Stacks on Deck</h2>
          <p className='text-white mt-8'>
            But hey, we're not just here to play; we're here to PAW-er up the community. Our DAO's treasury is the beating heart that pumps liquid gold - or should we say milk? - into community initiatives. We're all about that diamond paws life, hodling together and propelling projects that give everyone in the DAO a reason to say "GM!"
          </p>
          <h2 className='mt-16 mb-5 text-shadow text-center'>Kitty next shib</h2>
          <p className='text-white text-center'>
            So, are you tired of all those grumpy cat memes telling you to "go away?" Are you ready to dive into a vibrant, engaging, and downright quirky community where the phrase "Cats rule the Internet" is taken a tad too literally? Well, then Kitty Inu DAO is the purr-fect place for you!
          </p>
          <p className='mt-16 text-center text-shadow mb-16'>
            Get ready to put those laser eyes to work and join us in making every day Caturday. To infinity and beyond, frens!
          </p>
          <div class='flex'>
            <div className='flex-1 video-wrapper'>
              <div>
                <ReactPlayer
                  playing={false}
                  url='/img/about/kitty_dance.webm'
                  width='100%'
                  height='100%'
                  controls={true}
                />
              </div>
            </div>
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
      title: 'About',
    },
  }
}
