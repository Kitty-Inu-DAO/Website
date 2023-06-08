import { HeaderExternalLink, HeaderInternalLink } from '@/components/base/Button'

export default function Header() {
  return (
    <header className='px-20 py-10 flex justify-end items-center bar-styling' style={{ backdropFilter: 'blur(20px)', color: '#fff', backgroundColor: 'transparent', boxShadow: '0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23)' }}>
      <div className='flex justify-start w-1/2'>
        <h2 className="kitty-inu-dao">
          <span style={{ color: '#e43a95' }}>Kitty</span>
          <span style={{ color: '#50c5d4' }}> Inu </span>
          DAO
        </h2>
      </div>

      <div className='flex justify-end w-1/2'>
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
    </header>
  )
}
