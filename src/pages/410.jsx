import Header from '@/components/base/Header/';
import HomeFooter from '@/components/base/Footer/Home'
import Image from "next/image";
import Hero from "@/components/base/Hero";

export default function Error() {
    return (
        <>
            <Header></Header>
            <main className='m-auto w-11/12 lg:w-10/12 xl:w-8/12 bg-sky-800/30 px-10 pt-4 pb-16 rounded-b-lg' style={{ backdropFilter: 'blur(20px)' }}>
                <Hero title="Error 410" description='' />
                <h2 className="text-center">Oops!</h2>
                <p className='text-center text-white'>The page you were looking for took a wrong turn and got lost in the matrix! It's officially a 410: it's gone and it's not coming back... much like that one sock that disappeared in your laundry! Maybe try navigating elsewhere?</p>
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