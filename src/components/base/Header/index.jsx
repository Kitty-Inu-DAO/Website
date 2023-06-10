import { HeaderExternalLink, HeaderInternalLink } from '@/components/base/Button'
import Link from "next/link";

function toggle() {
  const menu = document.getElementById('mobile-menu');
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    return;
  }
  menu.classList.add('hidden');
}

export default function Header() {
  return (
    <header className='sticky top-0 z-10 lg:relative w-full px-6 py-4 lg:px-16 lg:py-6 xl:px-20 xl:py-8 bar-styling' style={{ backdropFilter: 'blur(20px)', color: '#fff', backgroundColor: 'transparent', boxShadow: '0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23)' }}>
      <div className='flex items-center'>
        <div className="inset-y-0 left-0 flex justify-between items-center mr-4 lg:hidden">
          <button onClick={toggle} type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#e43a95] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg className="hidden h-8 w-8" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className='whitespace-nowrap'>
          <h2 className="kitty-inu-dao">
            <Link href='/'>
              <span style={{ color: '#e43a95' }}>Kitty</span>
              <span style={{ color: '#50c5d4' }}> Inu </span>
              DAO
            </Link>
          </h2>
        </div>

        <div className='grow w-1/2 text-right hidden lg:block'>
          <HeaderInternalLink href='/' className='px-3'>
            Home
          </HeaderInternalLink>
          <HeaderInternalLink href='/about'>About</HeaderInternalLink>
          <HeaderExternalLink href='https://rapid-fire-1381.on.fleek.co/introduction-kitty-inu/'>Governance</HeaderExternalLink>
          <HeaderInternalLink href='/whitepaper'>
            {/* Rick Roll! */}
            Whitepaper
          </HeaderInternalLink>
          <HeaderInternalLink href='/tokenomics'>Tokenomics</HeaderInternalLink>
          <HeaderInternalLink href='/buy'>Buy</HeaderInternalLink>
        </div>
      </div>
      <div className="hidden lg:hidden" id="mobile-menu" style={{ backdropFilter: 'blur(20px)', color: '#fff', backgroundColor: 'transparent', boxShadow: '0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23)', position: "absolute", left: 0, width: '100%' }}>
        <div className="space-y-1 mt-2 px-4 pb-5 pt-2">
          <Link href="/about" className="text-white hover:bg-[#e43a95] hover:text-white block rounded-md px-3 py-2"
            aria-current="page">About</Link>
          <Link href="https://rapid-fire-1381.on.fleek.co/introduction-kitty-inu/"
            className="text-white hover:bg-[#e43a95] hover:text-white block rounded-md px-3 py-2">Governance</Link>
          <Link href="/whitepaper"
            className="text-white hover:bg-[#e43a95] hover:text-white block rounded-md px-3 py-2">Whitepaper</Link>
          <Link href="/tokenomics"
            className="text-white hover:bg-[#e43a95] hover:text-white block rounded-md px-3 py-2">Tokenomics</Link>
          <Link href="/buy"
            className="text-white hover:bg-[#e43a95] hover:text-white block rounded-md px-3 py-2">Buy</Link>
        </div>
      </div>
    </header>
  )
}
