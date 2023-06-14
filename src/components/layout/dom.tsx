import { setState } from '@/helpers/store'
import {useEffect, useRef, useState} from 'react'

const Dom = ({ absolute, classes, children }) => {
  const ref = useRef(null)
  useEffect(() => {
    setState({ dom: ref })
  }, [])

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  let className = classes + " dom";
  if (absolute) {
    className += ' absolute top-0 left-0 z-10 w-screen h-full overflow-x-hidden dom';
  }

  return (
    <>
      <div className={className} ref={ref}>
        {children}
      </div>
      {showButton && (
        <button onClick={scrollToTop} className="fixed right-4 bottom-4 bg-white/25 hover:bg-[#e43a95] text-white/75 hover:text-white text-2xl py-3 px-4 rounded-xl">
          &#9650;
        </button>
      )}
    </>
  )
}

export default Dom
