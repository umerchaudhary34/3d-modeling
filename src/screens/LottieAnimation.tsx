import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import LottieView from 'lottie-react-native';

const {width} = Dimensions.get('window');

const LottieAnimation = () => {
  // Animation states for each avatar
  const maleScale = useRef(new Animated.Value(1)).current;
  const malePosition = useRef(new Animated.Value(0)).current;
  const femaleScale = useRef(new Animated.Value(1)).current;
  const femalePosition = useRef(new Animated.Value(0)).current;

  const [selectedAvatar, setSelectedAvatar] = useState('male'); // Initial selected avatar

  const animateAvatar = avatar => {
    if (avatar === 'male') {
      setSelectedAvatar('male');

      // Animate male avatar to center and enlarge
      Animated.parallel([
        Animated.timing(malePosition, {
          toValue: 2.7, // Move to center
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(maleScale, {
          toValue: 1.0, // Larger size
          duration: 500,
          useNativeDriver: false,
        }),

        // Animate female avatar to back and shrink
        Animated.timing(femaleScale, {
          toValue: 0.8, // Smaller size
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(femalePosition, {
          toValue: -0.3, // Move to the left
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      setSelectedAvatar('female');

      // Animate female avatar to center and enlarge
      Animated.parallel([
        Animated.timing(femalePosition, {
          toValue: 2.7, // Move to center
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(femaleScale, {
          toValue: 1.0, // Larger size
          duration: 500,
          useNativeDriver: false,
        }),

        // Animate male avatar to back and shrink
        Animated.timing(maleScale, {
          toValue: 0.8, // Smaller size
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(malePosition, {
          toValue: -0.3, // Move to the right
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    }
  };

  return (
    <View style={styles.container}>
      {/* Male Avatar */}
      <TouchableOpacity
        onPress={() => animateAvatar('male')}
        style={[
          styles.touchable,
          {
            zIndex: selectedAvatar === 'male' ? 1 : 0,
          },
        ]}>
        <Animated.View
          style={[
            styles.avatarContainer,
            {
              transform: [
                {
                  translateX: malePosition.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [-width * 0.3, 0], // Moves from left to center
                  }),
                },
                {scale: maleScale},
              ],
            },
          ]}>
          <LottieView
            source={require('../assets/animationJson/maleAvatar.json')}
            style={{
              width: selectedAvatar === 'male' ? 300 : 150,
              height: selectedAvatar === 'male' ? 300 : 150,
            }}
            autoPlay
            loop
          />
        </Animated.View>
      </TouchableOpacity>

      {/* Female Avatar */}
      <TouchableOpacity
        onPress={() => animateAvatar('female')}
        style={[
          styles.touchable,
          {zIndex: selectedAvatar === 'female' ? 1 : 0},
        ]}>
        <Animated.View
          style={[
            styles.avatarContainer,
            {
              transform: [
                {
                  translateX: femalePosition.interpolate({
                    inputRange: [-1, 1],
                    outputRange: [width * 0.3, 0], // Moves from right to center
                  }),
                },
                {scale: femaleScale},
              ],
            },
          ]}>
          <LottieView
            source={require('../assets/animationJson/femaleAvatar.json')}
            style={{
              width: selectedAvatar === 'female' ? 300 : 150,
              height: selectedAvatar === 'female' ? 300 : 150,
            }}
            autoPlay
            loop
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#000000',
  },
  touchable: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150, // Default size
    height: 150,
  },
});

export default LottieAnimation;
