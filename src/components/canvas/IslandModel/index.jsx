
import { useRef, useState, useEffect, useMemo } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { useFBX, useGLTF } from '@react-three/drei'
import * as THREE from 'three';


const position_kart = [-.5, -.53, .09];



const IslandModel = ({ }) => {
    const mesh = useRef(null);
    const toastId = useRef(null);
    const { gl, scene, camera } = useThree();

    const [defaultMaterials, setDefaultMaterials] = useState({});

    useEffect(() => {

        const loader = new THREE.CubeTextureLoader().setPath('/img/scene/');
        loader.load(
            [
                'Skybox_LF.webp',
                'Skybox_RT.webp',
                'Skybox_UP.webp',
                'Skybox_DN.webp',
                'Skybox_FR.webp',
                'Skybox_BK.webp'
            ],
            function (texture) {
                texture.encoding = THREE.sRGBEncoding;

                scene.background = texture;
            },
            function (xhr) {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            function (error) {
                console.error('An error happened', error);
            }
        );
    }, [scene])

    const model = useGLTF('/3d/island.gltf')
    const modelObj = model.scene || model

    const get_new_material = (idx, newName, fallBack) => {
        try {
            const newMaterial = allMaterials[idx]
            newMaterial.name = newName
            return (newMaterial)

        } catch (error) {
            return (fallBack)
        }
    }

    useEffect(() => {
        modelObj.traverse((child) => {
            if (child.isMesh) {
                if (Array.isArray(child.material)) {
                    console.log(child.material)
                    // child.material = child.material.map(material =>
                    //     get_new_material(material.name, material.name, material)
                    // )
                    // const materialsAll = defaultMaterials
                    // materialsAll[getKartName(url)] = child.material
                    // setDefaultMaterials(materialsAll)
                }
            }
        })
    }, [modelObj])

    const mixerRef = useRef(null);

    useEffect(() => {

        if ((!mixerRef.current && model.animations.length > 0)) {
            if (mixerRef.current) {
                mixerRef.current.stopAllAction();
            }
            if (model.animations.length > 0) {
                mixerRef.current = new THREE.AnimationMixer(modelObj);
                model.animations.forEach((clip) => {
                    const action = mixerRef.current.clipAction(clip);
                    action.play();
                });
            }
        }
    }, [model.animations, modelObj]);

    useFrame((state, delta) => {
        mixerRef.current?.update(delta);
    });

    const spotlight = useMemo(() => new THREE.SpotLight(0xffffff, 10, 100, Math.PI / 6, 2), []);
    spotlight.position.set(1, 15, -10);
    spotlight.target.position.set(position_kart[0], position_kart[1], position_kart[2]); // Targeting the origin (adjust as needed)

    const pointLight = useMemo(() => new THREE.PointLight(0xffffff, 2, 100), []);
    pointLight.position.set(0, 15, 0);



    // useEffect(() => {
    //     modelObj.add(pointLight);
    //     modelObj.add(spotlight);
    // }, [modelObj, pointLight, spotlight]);

    // useEffect(() => {
    //     if (assetID) {
    //         if (getKartName(url) == 'rollkall') {

    //             if (!toast.isActive(toastId.current)) {
    //                 toastId.current = toast.warning('Roll Kall NFTs do not support Customization');
    //             }

    //         } else {

    //             const currentTime = mixerRef.current?.time || 0;
    //             modelObj.traverse((child) => {
    //                 if (child.isMesh) {
    //                     if (['Gold', 'Blue', 'Red', 'Green'].includes(assetID)) {
    //                         child.material = defaultMaterials[getKartName(url)]
    //                         child.material = child.material.map(material =>
    //                             material.name.startsWith('body_') || material.name.startsWith('rollkall_gold') ? get_new_material(assetID, material.name, material) : material
    //                         )
    //                     } else {
    //                         child.material = allSkins[assetID.replace(/ /g, "")][getKartName(url)]
    //                     }
    //                 }
    //             })
    //             if (mixerRef.current) {
    //                 mixerRef.current.time = currentTime;
    //             }
    //         }

    //     }

    // }, [assetID, get_new_material]
    //  )


    return (
        <>
            <mesh ref={mesh} scale={[0.002, 0.002, 0.002]} position={[-1, .1, 1.2]} rotation={[.3, .1, -.01]}>
                <primitive object={modelObj} />
            </mesh>
        </>
    )
}

//useGLTF.preload('/3d/island.gltf')
export default IslandModel