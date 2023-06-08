import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { useEffect, useRef, Suspense } from 'react'
import useStore from '@/helpers/store'
import { Html, Loader } from '@react-three/drei';


// const IslandModel = dynamic(() => import('@/components/canvas/IslandModel/').then((mod) => mod.default), {
//   ssr: false,
// })

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
    //target={[0, 0, -1]}
    />
  )
}

//position={[0, 20, 0]}
//position={[0, 0, 0]}
//position={[-3, -10, 4]}
//position={[-3, -10, 4]}

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
        {/* <directionalLight color="0xffffff" intensity={.4} position={[-110, 60, 140]} />
        <directionalLight color="0xffffff" intensity={.4} position={[110, 60, 140]} />
        <directionalLight color="0xffffff" intensity={1.2} position={[-80, 100, -300]} /> */}
        <ambientLight color='#e9e0c9' intensity={.8} />
        <hemisphereLight
          intensity={0.2}
          color='#ffffff'
          groundColor='#ffffff'
        />
        {/* <spotLight
          castShadow
          color='#ffffff'
          intensity={.01}
          position={[-50, 50, 40]}
          angle={0.25}
          penumbra={1}
          shadow-mapSize={[128, 128]}
          shadow-bias={0.00005}
        /> */}
      </Canvas>
      {/* <Loader /> */}
    </>
  )
}

export default LCanvas
