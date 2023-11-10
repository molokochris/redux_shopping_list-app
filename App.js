import React, { useState } from "react";
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
  // const [initialRoute, setInitialRoute] = useState("Login");
  let loggedIn = false;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Home"}>
          {/* <Stack.Screen
            name="Login"
            component={<LoginScreen loggedIn={loggedIn} />}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(prop) => <LoginScreen {...prop} loggedIn={loggedIn} />}
          </Stack.Screen>
          <Stack.Screen
            name="Register"
            component={registerScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={ItemsListScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
