import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "./screens/menu";
import Introduction from "./screens/00-intoduction-to-reanimated-2";
import PanGestureHandlerBasics from "./screens/01-pan-gesture-handler-basics";

export type NavigatorParams = {
  Menu: undefined;
  Introduction: undefined;
  PanGestureHandlerBasics: undefined;
};

const Stack = createNativeStackNavigator<NavigatorParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen
          name="PanGestureHandlerBasics"
          component={PanGestureHandlerBasics}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
