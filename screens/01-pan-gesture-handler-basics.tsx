import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import {
  GestureHandlerRootView,
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";

const SIZE = 100.0;
const CIRCLE_RADUIS = SIZE * 2;

const PanGestureHandlerBasics = () => {
  const translateX = useSharedValue(0);
  const contextX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const contextY = useSharedValue(0);

  const panGestureEvent = Gesture.Pan()
    .onBegin(() => {
      contextX.value = translateX.value;
      contextY.value = translateY.value;
    })
    .onChange((event) => {
      translateX.value = event.translationX + contextX.value;
      translateY.value = event.translationY + contextY.value;
    })
    .onEnd(() => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < CIRCLE_RADUIS + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.circle}>
        <GestureDetector gesture={panGestureEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: "rgba(0, 0, 256, 0.5)",
    borderRadius: 20,
  },
  circle: {
    width: CIRCLE_RADUIS * 2,
    height: CIRCLE_RADUIS * 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: CIRCLE_RADUIS,
    borderWidth: 5,
    borderColor: "rgba(0, 0, 256, 0.5)",
  },
});

export default PanGestureHandlerBasics;
