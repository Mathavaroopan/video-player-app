// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import VideoPreview from "./components/VideoPreview";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="VideoPreview" component={VideoPreview} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
