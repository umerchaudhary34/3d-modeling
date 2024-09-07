/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/native'
import { GLTF } from 'three-stdlib'
import { useFrame } from '@react-three/fiber/native'

type GLTFResult = GLTF & {
    nodes: {
        node_id119: THREE.Mesh
        node_id121: THREE.Mesh
        node_id123: THREE.Mesh
        node_id125: THREE.Mesh
        node_id127: THREE.Mesh
        node_id129: THREE.Mesh
        node_id131: THREE.Mesh
        node_id133: THREE.Mesh
        node_id135: THREE.Mesh
        node_id137: THREE.Mesh
        node_id139: THREE.Mesh
        node_id141: THREE.Mesh
        node_id143: THREE.Mesh
        node_id145: THREE.Mesh
        node_id147: THREE.Mesh
        node_id149: THREE.Mesh
        node_id151: THREE.Mesh
        node_id153: THREE.Mesh
        node_id155: THREE.Mesh
        node_id157: THREE.Mesh
        node_id159: THREE.Mesh
        node_id161: THREE.Mesh
        node_id163: THREE.Mesh
        node_id165: THREE.Mesh
        node_id167: THREE.Mesh
        node_id169: THREE.Mesh
        node_id171: THREE.Mesh
        node_id173: THREE.Mesh
        node_id175: THREE.Mesh
        node_id177: THREE.Mesh
        node_id179: THREE.Mesh
        node_id181: THREE.Mesh
        node_id183: THREE.Mesh
        node_id185: THREE.Mesh
        node_id187: THREE.Mesh
        node_id189: THREE.Mesh
        node_id191: THREE.Mesh
        node_id193: THREE.Mesh
        node_id195: THREE.Mesh
        node_id197: THREE.Mesh
        node_id199: THREE.Mesh
        node_id201: THREE.Mesh
        node_id203: THREE.Mesh
        node_id205: THREE.Mesh
        node_id207: THREE.Mesh
        node_id209: THREE.Mesh
        node_id211: THREE.Mesh
        node_id213: THREE.Mesh
        node_id215: THREE.Mesh
        node_id217: THREE.Mesh
        node_id219: THREE.Mesh
        node_id221: THREE.Mesh
        node_id223: THREE.Mesh
        node_id225: THREE.Mesh
        node_id227: THREE.Mesh
        node_id229: THREE.Mesh
        node_id231: THREE.Mesh
        node_id233: THREE.Mesh
        node_id235: THREE.Mesh
        node_id237: THREE.Mesh
        node_id239: THREE.Mesh
        node_id241: THREE.Mesh
        node_id243: THREE.Mesh
        node_id245: THREE.Mesh
        node_id247: THREE.Mesh
        node_id249: THREE.Mesh
        node_id251: THREE.Mesh
        node_id253: THREE.Mesh
        node_id255: THREE.Mesh
        node_id257: THREE.Mesh
        node_id259: THREE.Mesh
        node_id261: THREE.Mesh
        node_id263: THREE.Mesh
        node_id265: THREE.Mesh
        node_id267: THREE.Mesh
        node_id269: THREE.Mesh
        node_id271: THREE.Mesh
    }
    materials: {
        ['120']: THREE.MeshStandardMaterial
        ['121']: THREE.MeshStandardMaterial
        ['122']: THREE.MeshStandardMaterial
        ['123']: THREE.MeshStandardMaterial
        ['124']: THREE.MeshStandardMaterial
        ['125']: THREE.MeshStandardMaterial
        ['126']: THREE.MeshStandardMaterial
        ['127']: THREE.MeshStandardMaterial
        ['128']: THREE.MeshStandardMaterial
        ['129']: THREE.MeshStandardMaterial
        ['130']: THREE.MeshStandardMaterial
        ['131']: THREE.MeshStandardMaterial
        ['132']: THREE.MeshStandardMaterial
        ['133']: THREE.MeshStandardMaterial
        ['134']: THREE.MeshStandardMaterial
        ['135']: THREE.MeshStandardMaterial
        ['136']: THREE.MeshStandardMaterial
        ['137']: THREE.MeshStandardMaterial
        ['138']: THREE.MeshStandardMaterial
        ['139']: THREE.MeshStandardMaterial
        ['140']: THREE.MeshStandardMaterial
        ['141']: THREE.MeshStandardMaterial
        ['142']: THREE.MeshStandardMaterial
        ['143']: THREE.MeshStandardMaterial
        ['144']: THREE.MeshStandardMaterial
        ['145']: THREE.MeshStandardMaterial
        ['146']: THREE.MeshStandardMaterial
        ['147']: THREE.MeshStandardMaterial
        ['148']: THREE.MeshStandardMaterial
        ['149']: THREE.MeshStandardMaterial
        ['150']: THREE.MeshStandardMaterial
        ['151']: THREE.MeshStandardMaterial
        ['152']: THREE.MeshStandardMaterial
        ['153']: THREE.MeshStandardMaterial
        ['154']: THREE.MeshStandardMaterial
        ['155']: THREE.MeshStandardMaterial
        ['156']: THREE.MeshStandardMaterial
        ['157']: THREE.MeshStandardMaterial
        ['158']: THREE.MeshStandardMaterial
        ['159']: THREE.MeshStandardMaterial
        ['160']: THREE.MeshStandardMaterial
        ['161']: THREE.MeshStandardMaterial
        ['162']: THREE.MeshStandardMaterial
        ['163']: THREE.MeshStandardMaterial
        ['164']: THREE.MeshStandardMaterial
        ['165']: THREE.MeshStandardMaterial
        ['166']: THREE.MeshStandardMaterial
        ['167']: THREE.MeshStandardMaterial
        ['168']: THREE.MeshStandardMaterial
        ['169']: THREE.MeshStandardMaterial
        ['170']: THREE.MeshStandardMaterial
        ['171']: THREE.MeshStandardMaterial
        ['172']: THREE.MeshStandardMaterial
        ['173']: THREE.MeshStandardMaterial
        ['174']: THREE.MeshStandardMaterial
        ['175']: THREE.MeshStandardMaterial
        ['176']: THREE.MeshStandardMaterial
        ['177']: THREE.MeshStandardMaterial
        ['178']: THREE.MeshStandardMaterial
        ['179']: THREE.MeshStandardMaterial
        ['180']: THREE.MeshStandardMaterial
        ['181']: THREE.MeshStandardMaterial
        ['182']: THREE.MeshStandardMaterial
        ['183']: THREE.MeshStandardMaterial
        ['184']: THREE.MeshStandardMaterial
        ['185']: THREE.MeshStandardMaterial
        ['186']: THREE.MeshStandardMaterial
        ['187']: THREE.MeshStandardMaterial
        ['188']: THREE.MeshStandardMaterial
        ['189']: THREE.MeshStandardMaterial
        ['190']: THREE.MeshStandardMaterial
        ['191']: THREE.MeshStandardMaterial
        ['192']: THREE.MeshStandardMaterial
        ['193']: THREE.MeshStandardMaterial
        ['194']: THREE.MeshStandardMaterial
        ['195']: THREE.MeshStandardMaterial
        ['196']: THREE.MeshStandardMaterial
    }
}

export default function DroneM(props: JSX.IntrinsicElements['group']) {
    const droneRef = useRef()

    // Adjust the rotation
    useFrame(() => {
        if (droneRef.current) {
            droneRef.current.rotation.y += 0.01 // Rotates along y-axis
        }
    })

    const { nodes, materials } = useGLTF(require('../assets/models/drone.glb')) as GLTFResult
    return (
        <group ref={droneRef}>
            <group {...props} dispose={null} scale={5}>
                <group scale={0.001}>
                    <group position={[0.001, -67.41, 251.039]} scale={20.199}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id119.geometry}
                            material={materials['120']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id121.geometry}
                            material={materials['121']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id123.geometry}
                            material={materials['122']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id125.geometry}
                            material={materials['123']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id127.geometry}
                            material={materials['124']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id129.geometry}
                            material={materials['125']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id131.geometry}
                            material={materials['126']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id133.geometry}
                            material={materials['127']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id135.geometry}
                            material={materials['128']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id137.geometry}
                            material={materials['129']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id139.geometry}
                            material={materials['130']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id141.geometry}
                            material={materials['131']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id143.geometry}
                            material={materials['132']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id145.geometry}
                            material={materials['133']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id147.geometry}
                            material={materials['134']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id149.geometry}
                            material={materials['135']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id151.geometry}
                            material={materials['136']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id153.geometry}
                            material={materials['137']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id155.geometry}
                            material={materials['138']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id157.geometry}
                            material={materials['139']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id159.geometry}
                            material={materials['140']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id161.geometry}
                            material={materials['141']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id163.geometry}
                            material={materials['142']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id165.geometry}
                            material={materials['143']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id167.geometry}
                            material={materials['144']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id169.geometry}
                            material={materials['145']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id171.geometry}
                            material={materials['146']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id173.geometry}
                            material={materials['147']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id175.geometry}
                            material={materials['148']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id177.geometry}
                            material={materials['149']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id179.geometry}
                            material={materials['150']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id181.geometry}
                            material={materials['151']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id183.geometry}
                            material={materials['152']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id185.geometry}
                            material={materials['153']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id187.geometry}
                            material={materials['154']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id189.geometry}
                            material={materials['155']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id191.geometry}
                            material={materials['156']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id193.geometry}
                            material={materials['157']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id195.geometry}
                            material={materials['158']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id197.geometry}
                            material={materials['159']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id199.geometry}
                            material={materials['160']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id201.geometry}
                            material={materials['161']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id203.geometry}
                            material={materials['162']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id205.geometry}
                            material={materials['163']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id207.geometry}
                            material={materials['164']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id209.geometry}
                            material={materials['165']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id211.geometry}
                            material={materials['166']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id213.geometry}
                            material={materials['167']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id215.geometry}
                            material={materials['168']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id217.geometry}
                            material={materials['169']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id219.geometry}
                            material={materials['170']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id221.geometry}
                            material={materials['171']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id223.geometry}
                            material={materials['172']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id225.geometry}
                            material={materials['173']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id227.geometry}
                            material={materials['174']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id229.geometry}
                            material={materials['175']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id231.geometry}
                            material={materials['176']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id233.geometry}
                            material={materials['177']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id235.geometry}
                            material={materials['178']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id237.geometry}
                            material={materials['179']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id239.geometry}
                            material={materials['180']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id241.geometry}
                            material={materials['181']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id243.geometry}
                            material={materials['182']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id245.geometry}
                            material={materials['183']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id247.geometry}
                            material={materials['184']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id249.geometry}
                            material={materials['185']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id251.geometry}
                            material={materials['186']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id253.geometry}
                            material={materials['187']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id255.geometry}
                            material={materials['188']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id257.geometry}
                            material={materials['189']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id259.geometry}
                            material={materials['190']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id261.geometry}
                            material={materials['191']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id263.geometry}
                            material={materials['192']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id265.geometry}
                            material={materials['193']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id267.geometry}
                            material={materials['194']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id269.geometry}
                            material={materials['195']}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id271.geometry}
                            material={materials['196']}
                        />
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload(require('../assets/models/drone.glb'))
