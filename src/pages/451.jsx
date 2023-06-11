import Header from '@/components/base/Header/';
import HomeFooter from '@/components/base/Footer/Home'
import Image from "next/image";
import Hero from "@/components/base/Hero";

export default function Error() {
    return (
        <>
            <Header></Header>
            <main className='m-auto w-11/12 lg:w-10/12 xl:w-8/12 bg-sky-800/30 px-10 pt-4 pb-16 rounded-b-lg' style={{ backdropFilter: 'blur(20px)' }}>
                <Hero title="Error 451" description='' />
                <h2 className="text-center">Error 451: This page is unavailable for legal reasons!</h2>
                <p className='text-center'> ...or, in layman's terms, it's kind of like the 'do not touch' sign in a museum... Now we're both curious. Best to stick to the open exhibits and use the navigation above to find something else intriguing!</p>
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
            title: 'Page Gone',
        },
    }
}