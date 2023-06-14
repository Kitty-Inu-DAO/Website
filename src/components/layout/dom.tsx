import { setState } from '@/helpers/store'
import { useEffect, useRef } from 'react'

const Dom = ({ absolute, classes, children }) => {
  const ref = useRef(null)
  useEffect(() => {
    setState({ dom: ref })
  }, [])

  let className = classes + " dom";
  if (absolute) {
    className += ' absolute top-0 left-0 z-10 w-screen h-full overflow-x-hidden dom';
  }

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  )
}

export default Dom
