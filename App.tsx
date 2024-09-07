import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber/native';
import Model from './src/components/model';
import useControls from 'r3f-native-orbitcontrols';
import Starlink from './src/components/StarlinkM';
import DroneM from './src/components/DroneM';

export default function App() {
  const [OrbitControls, events] = useControls();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.model} {...events}>
        <Canvas>
          <OrbitControls enablePan={false} />
          <directionalLight position={[1, 0, 0]} args={['white', 2]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 2]} />
          <directionalLight position={[0, 1, 0]} args={['white', 2]} />
          <directionalLight position={[0, -1, 0]} args={['white', 2]} />
          <directionalLight position={[0, 0, 1]} args={['white', 15]} />
          <directionalLight position={[0, 0, -1]} args={['white', 2]} />
          <Suspense fallback={null}>
            {/* <Model /> */}
            <Starlink />
            {/* <DroneM /> */}
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.header}>Starlink Model</Text>
        <Text style={styles.subHeader}>3D Modeling with React Native & React Three Fiber</Text>
        <Text style={styles.description}>Integration of 3D models using React Native Cli and React Three Fiber! Check out my public GitHub repository, where you can explore interactive models, including a drone and Starlink, and experiment with other designs. A big thanks to the amazing open-source community that makes this possible!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  model: {
    flex: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 20,
  },
  subHeader: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 10,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#4d4d4d',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 14,
    color: '#FFFFFF',
    marginTop: 10,
  },
});
