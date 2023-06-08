import { setState } from '@/helpers/store'
import { useEffect, useRef } from 'react'

const Dom = ({ classes, children }) => {
  const ref = useRef(null)
  useEffect(() => {
    setState({ dom: ref })
  }, [])

  const className = classes + " absolute top-0 left-0 z-10 w-screen h-screen overflow-x-hidden dom"
  if (children) {
    console.log(children.props)
  }
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  )
}

export default Dom
