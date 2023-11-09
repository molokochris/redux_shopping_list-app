import React from "react";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ItemsListScreen from "./Screens/itemsListScreen";
import LoginScreen from "./Screens/LoginScreen"; // Import your LoginScreen component
import registerScreen from "./Screens/RegisterScreen";
import store from "./Redux/store";
import { useFonts } from "expo-font";
import { Text } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/poppins.ttf"),
  });

  // if (!fontsLoaded) {
  //   return <Text>Loading...</Text>;
  // }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={registerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={ItemsListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
