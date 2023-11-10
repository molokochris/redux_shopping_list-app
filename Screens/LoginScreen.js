import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { signInWithEmailAndPassword, getAuth } from "@firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import Login from "../assets/login.jpg";
import FirebaseApp from "../firebaseConfig";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { useEffect } from "react";

const fonts = {
  PoppinsRegular: require("../assets/fonts/poppins.ttf"),
  PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  PoppinsBlack: require("../assets/fonts/Poppins-Black.ttf"),
  PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
  PoppinsExtraLight: require("../assets/fonts/Poppins-ExtraLight.ttf"),
};

const loadFonts = async () => {
  await Font.loadAsync(fonts);
};

const LoginScreen = ({ navigation, loggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(FirebaseApp); // Initialize the auth instance

  let isLoggedIn = loggedIn;

  useEffect(() => {
    loadFonts();
    // console.log(initialRoute);
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Successfully logged in
      isLoggedIn = true;
      navigation.navigate("Home"); // Navigate to the "home" page
    } catch (error) {
      console.log("Login Error:", error);
      // Handle login error
    }
  };

  //   return (
  //     <View
  //       style={styles.mainContainer}
  //       behavior="padding"
  //       // enabled
  //     >
  //       <ScrollView contentContainerStyle={styles.scrollViewContent}>
  //         {/* <Text style={styles.title}>
  //           Welcome to the shopping-list app, please Login.
  //         </Text>
  //         <Image source={Login} style={styles.image} /> */}
  //         <View style={styles.inputContainer}>
  //           <TextInput
  //             placeholder="Email"
  //             value={email}
  //             style={styles.inputs}
  //             onChangeText={(text) => setEmail(text)}
  //           />
  //           <TextInput
  //             placeholder="Password"
  //             secureTextEntry={true}
  //             value={password}
  //             style={styles.inputs}
  //             onChangeText={(text) => setPassword(text)}
  //           />
  //         </View>
  //         <Button title="Login" onPress={handleLogin} style={styles.button} />
  //         <Text onPress={() => navigation.navigate("Register")}>
  //           Don't have an account? Register here.
  //         </Text>
  //       </ScrollView>
  //     </View>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   mainContainer: {
  //     flex: 1,
  //     alignItems: "center",
  //     // justifyContent: "center",
  //     backgroundColor: "#fff",
  //     marginHorizontal: 7,
  //   },
  //   scrollViewContent: {
  //     flexGrow: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  //   title: {
  //     fontSize: 35,
  //     fontWeight: "bold",
  //   },
  //   image: {
  //     height: 330,
  //     width: "100%",
  //   },
  //   inputContainer: {
  //     width: "80%",
  //   },
  //   inputs: {
  //     height: 40,
  //     width: "100%",
  //     marginVertical: 10,
  //     padding: 10,
  //     borderWidth: 1,
  //     borderColor: "#ccc",
  //   },
  //   button: {
  //     height: 40,
  //     width: "80%",
  //     marginVertical: 10,
  //     backgroundColor: "dodgerblue",
  //   },
  // });

  const [fontsLoaded] = useFonts(loadFonts);

  // if (!fontsLoaded) {
  //   return <Text>Loading fonts!</Text>;
  // }

  return (
    <ImageBackground source={Login} style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.logoContainer}>
        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            borderRadius: 100,
            borderWidth: 4,
            borderColor: "#2F2F2F",
            // borderColor: "#0C0404",
            // borderStartColor: "red",
          }}
        >
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 60, height: 60 }}
          />
        </View>
      </View>
      <View style={styles.overLayer}>
        <View style={styles.inContainer}>
          <View style={{ alignSelf: "center", marginBottom: 100 }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "500",
                fontFamily: "PoppinsSemiBold",
              }}
            >
              Login
            </Text>
          </View>
          <View style={styles.inputTab}>
            <Text style={styles.labels}>Email</Text>
            <TextInput
              style={styles.textInput}
              textContentType="emailAddress"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputTab}>
            <Text style={styles.labels}>Password</Text>
            <TextInput
              style={styles.textInput}
              textContentType="password"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <Pressable style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.btnTitle}>Login</Text>
          </Pressable>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingVertical: 8,
            }}
          >
            <Text style={styles.labels}>Dont have any account? </Text>
            <Pressable>
              <Text
                style={[styles.labels, { color: "tomato" }]}
                onPress={() => navigation.navigate("Register")}
              >
                Register here
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "flex-end",
    alignItems: "center",
    // paddingHorizontal: 10,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overLayer: {
    paddingHorizontal: 30,
    paddingVertical: 45,
    // justifyContent: "center",
    alignItems: "center",
    flex: 2,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderTopLeftRadius: 80,
  },
  inContainer: {
    width: "100%",
    // backgroundColor: "red",
  },
  inputTab: {
    backgroundColor: "whitesmoke",
    marginBottom: 40,
    height: 80,
    paddingHorizontal: 14,
    paddingVertical: 16,
    borderRadius: 20,
    elevation: 30,
    shadowColor: "grey",
    justifyContent: "center",
    // alignItems: "center",
  },
  labels: {
    marginBottom: 10,
    fontSize: 14,
    fontWeight: "600",
    // alignSelf: "flex-start",
    fontFamily: "PoppinsRegular",
  },
  textInput: {
    // borderBottomColor: "red",
    paddingHorizontal: 4,
    paddingVertical: 4,
    // borderBottomWidth: 1,
    // width: "100%",
    // marginBottom: 5,
    color: "grey",
    fontFamily: "PoppinsRegular",
  },
  loginBtn: {
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "black",
    marginTop: "1%",
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  btnTitle: {
    color: "whitesmoke",
    fontSize: 14,
    // fontWeight: "bold",
    fontFamily: "PoppinsSemiBold",
  },
});

export default LoginScreen;
