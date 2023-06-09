import { InternalLink, ExternalLink } from '@/components/base/Button'

export default function HomeFooter() {
  return (
    <footer id="footer" className='w-full mt-8 text-center mb-0 text-white p-4 px-10 lg:px-16 xl:px-20 bar-styling' style={{ backdropFilter: 'blur(20px)', color: '#fff', backgroundColor: 'transparent', boxShadow: '0px 10px 20px rgba(0,0,0,0.19), 0px 6px 6px rgba(0,0,0,0.23)' }}>
      <div className='flex justify-between items-center my-4'>
        <div className='w-full text-left'>
            {/* <h2>Join the Krew! 👇</h2> */}
            {/* <h4>Join discord, telegram, or follow us on twitter for updates, announcements, and more</h4> */}
            <div className="flex space-x-8 sm:space-x-10">
              <ExternalLink href='https://twitter.com/kittyinutoken' className='text-white'><img src='/img/social_icons/social_twitter.svg' alt='twitter' className='h-8 w-8 hover:opacity-50' /></ExternalLink>
              <ExternalLink href='https://discord.com/invite/kittyinu' className='text-white'><img src='img/social_icons/social_discord.svg' alt='Discord' className='h-8 w-8 hover:opacity-50' /></ExternalLink>
              <img className="w-8 h-8" src='img/social_icons/social_instagram.svg' alt="Instagram"></img>
              <img className="w-8 h-8" src='img/social_icons/social_telegram.svg' alt="Telegram"></img>
            </div>
        </div>


        {/* <div className='w-1/2 items-left grid grid-cols-2 grid-rows-2 gap-x-4 space-y-0 text-left'>
          <div>
            <ul>
              <li>
                <h3>Learn More</h3>
              </li>
              <li>
                <InternalLink href='/terms'>View Proposals</InternalLink>
              </li>
              <li>
                <InternalLink href='/privacy'>Read the Governance Docs</InternalLink>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <h3>Resources</h3>
              </li>
              <li>
                <InternalLink href='/terms'>Terms & Conditions</InternalLink>
              </li>
              <li>
                <InternalLink href='/privacy'>Privacy Policy</InternalLink>
              </li>
            </ul>
          </div>
          <div>
            <h3>Ecosystem</h3>
          </div>
          <div>
            <ul>
              <li>
                <h3>Talk to Us</h3>
              </li>
              <li>
                <ExternalLink href='contact@kittyinu.com'>contact@kittyinu.com</ExternalLink>
              </li>
              <li>
                <ExternalLink href=''>Discord</ExternalLink>
              </li>
              <li>
                <ExternalLink href=''>Twitter</ExternalLink>
              </li>
            </ul>
          </div>
        </div> */}

      </div>
    </footer>
  )
}
