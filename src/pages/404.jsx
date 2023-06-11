import Header from '@/components/base/Header/';
import HomeFooter from '@/components/base/Footer/Home'
import Image from "next/image";
import Hero from "@/components/base/Hero";

export default function Error() {
  return (
    <>
      <Header></Header>
      <main className='m-auto w-11/12 lg:w-10/12 xl:w-8/12 bg-sky-800/30 px-10 pt-4 pb-16 rounded-b-lg' style={{ backdropFilter: 'blur(20px)' }}>
        <Hero title="Error 404" description='' />
        <h2 className="text-center">Error 404: Yikes!</h2>
        <p className="text-center">The page you're looking for ran off with a two-timing, double-dealing, no good URL! Last I heard, they were seen heading south for the winter, sipping piña coladas on some sun-soaked server far, far away. Now, aren't they living the life? Meanwhile, we're stuck here, navigating the vast abyss of the web. Maybe if we're quiet enough, we'll lure the page back. Until then, why not try searching again or visiting another page? And remember, not all URLs are heartbreakers!</p>
        <div className="flex justify-center mt-10">
          <Image className="w-full max-w-3xl rounded-2xl drop-shadow-xl" width="1024" height="1024" src="/img/tokenomics/pancake_kitty.webp" alt="Kitty eating a cake" />
        </div>
      </main>
      <HomeFooter></HomeFooter>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Page not found',
    },
  }
}
