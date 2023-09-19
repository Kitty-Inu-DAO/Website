import { InternalLink, ExternalLink } from '@/components/base/Button'

export default function HomeFooter() {
  return (
    <footer id="footer" className='w-full text-center mb-0 text-white p-4 px-10 lg:px-16 xl:px-20 bar-styling' style={{ backdropFilter: 'blur(20px)', color: '#fff', backgroundColor: 'transparent', boxShadow: '0px 10px 20px rgba(0,0,0,0.4), 0px 6px 6px rgba(0,0,0,0.4)' }}>
      <div className='flex justify-between items-center md:my-2 lg:my-4'>
        <div className='w-full text-left'>
          {/* <h2>Join the Krew! 👇</h2> */}
          {/* <h4>Join discord, telegram, or follow us on twitter for updates, announcements, and more</h4> */}
          <div className="flex space-x-8 sm:space-x-10">
            <ExternalLink href='https://twitter.com/KittyInuDAO' className='text-white'><img src='/img/social_icons/social_twitter.svg' alt='twitter' className='h-8 w-8 hover:opacity-50' /></ExternalLink>
            <ExternalLink href='https://discord.com/invite/kittyinu' className='text-white'><img src='/img/social_icons/social_discord.svg' alt='Discord' className='h-8 w-8 hover:opacity-50' /></ExternalLink>
            <ExternalLink href='https://t.me/kittyinudao' className='text-white'><img className="w-8 h-8 hover:opacity-50" src='/img/social_icons/social_telegram.svg' alt="Telegram"></img></ExternalLink>
            <ExternalLink href='https://www.instagram.com/kitty.inu/' className='text-white'><img className="w-8 h-8 hover:opacity-50" src='/img/social_icons/social_instagram.svg' alt="Instagram"></img></ExternalLink>
            <ExternalLink href='https://www.tiktok.com/@kittyinutoken' className='text-white'><img className="w-8 h-8 hover:opacity-50" src='/img/social_icons/social_tiktok.svg' alt="TikTok"></img></ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
