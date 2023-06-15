import { InternalLink, ExternalLink } from '@/components/base/Button'

export default function HomeFooter() {
  return (
    <footer id="footer" className='w-full text-center mb-0 text-white p-4 bar-styling' style={{ backdropFilter: 'blur(20px)', color: '#fff', backgroundColor: 'transparent', boxShadow: '0px 10px 20px rgba(0,0,0,0.4), 0px 6px 6px rgba(0,0,0,0.4)' }}>
      <div className='flex justify-between items-center md:my-2 lg:my-4'>
        <div className='w-full text-left'>
          {/* <h2>Join the Krew! 👇</h2> */}
          {/* <h4>Join discord, telegram, or follow us on twitter for updates, announcements, and more</h4> */}
          {/* <div className="flex md:space-x-10 space-x-5"> */}
          <div className="flex justify-around space-x-2 items-center">
            <ExternalLink href='https://twitter.com/kittyinutoken' className='flex pt-2 pb-2 w-1/6 md:w-1/12 items-center justify-center text-white social-buttons'><img src='/img/social_icons/social_twitter.svg' alt='twitter' className='h-8 w-8 hover:opacity-50' /></ExternalLink>
            <ExternalLink href='https://discord.com/invite/kittyinu' className='flex pt-2 pb-2 w-1/6 md:w-1/12 items-center justify-center text-white social-buttons'><img src='/img/social_icons/social_discord.svg' alt='Discord' className='h-8 w-8 hover:opacity-50' /></ExternalLink>
            <ExternalLink href='https://t.me/kittyinudao' className='flex w-1/6 md:w-1/12 pt-2 pb-2 items-center justify-center text-white social-buttons'><img className="w-8 h-8 hover:opacity-50" src='/img/social_icons/social_telegram.svg' alt="Telegram"></img></ExternalLink>
            <ExternalLink href='https://www.instagram.com/kitty.inu/' className='flex w-1/6 md:w-1/12 pt-2 pb-2 items-center justify-center text-white social-buttons'><img className="w-8 h-8 hover:opacity-50" src='/img/social_icons/social_instagram.svg' alt="Instagram"></img></ExternalLink>
            <ExternalLink href='https://www.tiktok.com/@kittyinutoken' className='flex w-1/6 md:w-1/12 pt-2 pb-2 items-center justify-center text-white social-buttons'><img className="w-8 h-8 hover:opacity-50" src='/img/social_icons/social_tiktok.svg' alt="TikTok"></img></ExternalLink>
            <ExternalLink href='https://github.com/Kitty-Inu-DAO/' className='flex w-1/6 md:w-1/12 pt-2 pb-2 items-center justify-center text-white social-buttons'><img className="w-8 h-8 hover:opacity-50" src='/img/social_icons/social_github.svg' alt="Github"></img></ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
