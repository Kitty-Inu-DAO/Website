import Header from '@/components/base/Header/';
import Hero from '@/components/base/Hero'
import HomeFooter from '@/components/base/Footer/Home'
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {useState} from "react";
import Link from "next/link";

import {roadmap} from "@/components/roadmap/roadmap";

export default function Roadmap() {
    const [index, setIndex] = useState(0);
    const [open, setOpen] = useState(false);

    const slides = [];

    let imageIndex = 0;

    function images(images) {
        let html = [];
        images.map(image => {
            html.push((<a className="mr-4" href="#" onClick={(e) => click(e)}>
                <Image data-index={imageIndex++}
                       className="inline-block shadow-md shadow-black mb-3"
                       src={image.url} width={width(image)} height="180" alt={image.alt} />
            </a>));
            slides.push({ src: image.url });
        });
        return html;
    }

    function click(event) {
        event.preventDefault();
        setIndex(parseInt(event.target.dataset.index));
        setOpen(true);
    }

    function width(image) {
        const ratio = image.width / image.height;
        return 180 * ratio;
    }

    let key = 0;
    let linkKey = 0;

    let updatedOn = new Date(roadmap.updatedOn);

    return (
        <>
            <Header />
            <main className='m-auto w-11/12 lg:w-10/12 xl:w-8/12 bg-sky-800/30 px-10 pt-4 pb-16 rounded-b-lg'
                  style={{ backdropFilter: 'blur(20px)' }}>

                <Hero title='Ecosystem roadmap' description='' />

                <p className="text-base">Latest update: <strong>{updatedOn.toLocaleDateString()}</strong></p>

                {roadmap.items.map(category => (
                    <>
                        <h2 className='mt-12 mb-5'>{category.title}</h2>

                        {category.items.map(year => (
                            <>
                                <h3 className='text-2xl mb-1'>{year.year}</h3>
                                <ol className="relative border-l border-[#e43a95]">
                                    {year.items.map(item => (
                                        <li className="mb-5 ml-4 pt-4" key={key++}>
                                            <div
                                                className="absolute w-3 h-3 bg-[#e43a95] rounded-full mt-2 -left-1.5 border border-[#e43a95]"></div>
                                            {item.date
                                                && <p className="text-base">{new Date(item.date).toLocaleDateString()}</p>}
                                            <h4 className="text-xl font-semibold">
                                                {item.title}
                                                {item.status
                                                    && item.status === 'delivered'
                                                    && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline w-6 h-6 ml-2 mb-1 fill-green-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>}
                                            </h4>
                                            {item.images
                                                && item.images.length > 0
                                                && <p className="mt-4 mb-3 text-base font-normal">{images(item.images)}</p>}
                                            {item.description
                                                && <p className="text-base mb-4">{item.description}</p>}
                                            {item.links && <p>{item.links.map((link) => (
                                                <a key={linkKey++} href={link.url}
                                                   className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2">
                                                    {link.title}</a>
                                            ))}</p>}
                                        </li>
                                    ))}
                                </ol>
                            </>
                        ))}
                    </>
                ))}

                <Lightbox
                    open={open}
                    close={() => setOpen(false)}
                    slides={slides}
                    index={index}
                />

                <p className="italic mt-14">
                    This roadmap aims to gather and sum up all the information publicly available on the Kitty Inu
                    ecosystem present and future developments. As the Kitty Inu ecosystem is decentralized, this
                    roadmap doesn't engage any of the Kitty Inu ecosystem builders. All unreleased projects contained
                    in this roadmap are subjected to change.
                </p>

                <div className="text-center mt-16">
                    <Link href='/whitepaper' className="text-xl bg-[#e43a95] hover:text-[#e43a95] hover:bg-white text-white font-bold py-3 px-20 rounded">Whitepaper</Link>
                </div>

            </main>
            <HomeFooter />
        </>
    )
}

export async function getStaticProps() {
    return {
        props: {
            title: 'Roadmap',
        },
    }
}
