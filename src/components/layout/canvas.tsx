import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { useEffect, useRef, Suspense } from 'react'
import useStore from '@/helpers/store';
import { Html, Loader } from '@react-three/drei';



const LControl = () => {
  const dom = useStore((state) => state.dom)
  const control = useRef(null)

  useEffect(() => {
    if (control.current && dom) {
      const domElement = dom.current
      const originalTouchAction = domElement.style['touch-action']
      domElement.style['touch-action'] = 'none'

      return () => {
        domElement.style['touch-action'] = originalTouchAction
      }
    }
  }, [dom, control])

  // @ts-ignore
  return (
    <OrbitControls
      ref={control}
      minAzimuthAngle={-Math.PI / 2}
      maxAzimuthAngle={Math.PI / 4}
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 2}
      enableZoom={false}
      domElement={dom.current}
      position={[-3, -10, 4]}
    />
  )
}

const LCanvas = ({ children }) => {
  const dom = useStore((state) => state.dom)

  return (
    <>
      <Canvas onCreated={(state) => state.events.connect(dom.current)}>
        <LControl />
        <Suspense
          fallback={
            <Html>
              <Loader />
            </Html>
          }
        >
          <Preload all />
          {children}
        </Suspense>
        <ambientLight color='#e9e0c9' intensity={.8} />
        <hemisphereLight
          intensity={0.2}
          color='#ffffff'
          groundColor='#ffffff'
        />
      </Canvas>
    </>
  )
}

export default LCanvas
