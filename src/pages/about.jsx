import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

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
      <Hero title='About' description='' />
      <main className='m-auto w-8/12 mb-auto'>
        <h2 className='mt-24 mb-5'>This ain't your grandma's knitting circle</h2>
        <p className='text-white'>
          We're a decentralized pack of meme coin junkies, gaming gurus, creative technomancers, and art aficionados. Here, we're about more than just raising the roof; we're about raising the woof...err... meow?
        </p>
        <h2 className='mt-24 mb-5'>We Govern Stuff</h2>
        <p className='text-white'>
          Fueling our meme-powered rocket is the Kitty Inu token, the ERC20 certified digital tuna that governs our DAO. It's not just another fish in the sea; it's your boarding pass into the fur-midable world of DAO governance. Remember, in Kitty Inu DAO, your vote doesn't just count; it purrs!
        </p>
        <h2 className='mt-24 mb-5'>cat-doge of the interwebz</h2>
        <p className='text-white'>
          The star of our meme-verse is the one and only Kitty Inu, licensed by 9VRSE Inc. As the reigning cat-doge of the interwebz, Kitty Inu is the embodiment of all that's cool and claw-some in the DAO world. And no, Kitty Inu is not up for adoption; we're all just its humble servants in this decentralized playground.
        </p>
        <h2 className='mt-24 mb-5'>Stacks on Deck</h2>
        <p className='text-white'>
          But hey, we're not just here to play; we're here to PAW-er up the community. Our DAO's treasury is the beating heart that pumps liquid gold (or should we say milk?) into community initiatives. We're all about that diamond paws life, hodling together and propelling projects that give everyone in the DAO a reason to say "GM!"
        </p>
        <h2 className='mt-24 mb-5'>Kitty next shib</h2>
        <p className='text-white'>
          So, are you tired of all those grumpy cat memes telling you to "go away?" Are you ready to dive into a vibrant, engaging, and downright quirky community where the phrase "Cats rule the Internet" is taken a tad too literally? Well, then Kitty Inu DAO is the purr-fect place for you!
        </p>
        <p className='mt-24'>
          Get ready to put those laser eyes to work and join us in making every day Caturday. To infinity and beyond, frens!
        </p>
      </main>
      <HomeFooter />
    </>
  )
}
