import { setState } from '@/helpers/store'
import {useEffect, useRef, useState} from 'react'

const Dom = ({ absolute, classes, children }) => {
  const ref = useRef(null)
  useEffect(() => {
    setState({ dom: ref })
  }, [])

  const [showButton, setShowButton] = useState(false);

  const scrollOffsetFromBottom = () => {
    const htmlElement: HTMLElement = document.documentElement;
    const bodyElement: HTMLElement = document.body;

    return Math.max(
        htmlElement.clientHeight, htmlElement.scrollHeight, htmlElement.offsetHeight,
        bodyElement.scrollHeight, bodyElement.offsetHeight
      ) - (window.scrollY + window.innerHeight);
  }

  useEffect((): void => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300 && scrollOffsetFromBottom() > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = (): void => {
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
        <button onClick={scrollToTop}
                className="fixed right-4 bottom-4 bg-white/25 hover:bg-[#e43a95] text-white/75 hover:text-white text-2xl py-3 px-4 rounded-xl">
          &#9650;
        </button>
      )}
    </>
  )
}

export default Dom
