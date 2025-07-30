import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import ModelScreen from './src/screens/ModelScreen';
// import LottieAnimation from './src/screens/LottieAnimation';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chats from './src/screens/Chats';
import CallScreen from './src/screens/CallScreen';
import ChatScreen from './src/screens/ChatScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <Stack.Navigator
          initialRouteName="Chats"
          screenOptions={{gestureEnabled: false}}>
          <Stack.Screen
            name="Chats"
            component={Chats}
            options={{title: 'Chats', headerShown: false}}
          />
          <Stack.Screen
            name="CallScreen"
            component={CallScreen}
            options={{title: 'CallScreen', headerShown: false}}
          />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{title: 'ChatScreen', headerShown: false}}
          />
        </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
});
