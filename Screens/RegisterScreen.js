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
  StatusBar,
  Pressable,
} from "react-native";
import FirebaseApp from "../firebaseConfig";
import Login from "../assets/login.jpg";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { ImageBackground } from "react-native";
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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(FirebaseApp); // Initialize the auth instance

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Successfully registered and logged in
      navigation.navigate("Login"); // Navigate back to the "Login" page
    } catch (error) {
      console.log("Registration Error:", error);
      // Handle registration error
    }
  };
  useEffect(() => {
    loadFonts();
  }, []);
  const [fontsLoaded] = useFonts(loadFonts);

  // return (
  //   <KeyboardAvoidingView
  //     style={styles.mainContainer}
  //     behavior="padding"
  //     enabled
  //   >
  //     <ScrollView contentContainerStyle={styles.scrollViewContent}>
  //       <Text style={styles.title}>
  //         Welcome to the shopping-list app, please register.
  //       </Text>
  //       <Image source={RegisterImg} style={styles.image} />
  //       <View style={styles.inputContainer}>
  //         <TextInput
  //           placeholder="Email"
  //           value={email}
  //           style={styles.inputs}
  //           onChangeText={(text) => setEmail(text)}
  //         />
  //         <TextInput
  //           placeholder="Password"
  //           secureTextEntry={true}
  //           value={password}
  //           style={styles.inputs}
  //           onChangeText={(text) => setPassword(text)}
  //         />
  //       </View>
  //       <Button title="Register" onPress={handleRegister} />
  //     </ScrollView>
  //   </KeyboardAvoidingView>
  // );
  return (
    <ImageBackground source={Login} style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.logoContainer}>
        {/* <View
          style={{
            flexDirection: "row",
            flex: 1,
            // width: "100%",
            backgroundColor: "yellow",
          }}
        > */}

        <Pressable onPress={() => navigation.push("Login")}>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text
          style={{
            color: "whitesmoke",
            fontFamily: "PoppinsBold",
            fontSize: 25,
            // width: "20%",
            alignSelf: "center",
            // backgroundColor: "yellow",
            textAlign: "center",
            flex: 1,
          }}
        >
          Sign Up
        </Text>
        {/* </View> */}
      </View>
      <View style={styles.overLayer}>
        <View style={styles.inContainer}>
          {/* <View style={{ alignSelf: "center", marginBottom: 100 }}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "500",
                fontFamily: "PoppinsSemiBold",
              }}
            >
              Register
            </Text>
          </View> */}

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
          <Pressable style={styles.loginBtn} onPress={handleRegister}>
            <Text style={styles.btnTitle}>Sign Up</Text>
          </Pressable>

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              paddingVertical: 8,
            }}
          >
            <Text style={styles.labels}>Have an account? </Text>
            <Pressable>
              <Text
                style={[styles.labels, { color: "tomato" }]}
                onPress={() => navigation.navigate("Login")}
              >
                Login here
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

// const styles = StyleSheet.create({
//   mainContainer: {
//     flex: 1,
//     alignItems: "center",
//     marginHorizontal: 7,
//     // justifyContent: "center",
//     backgroundColor: "#fff",
//   },
//   scrollViewContent: {
//     flexGrow: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 32,
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
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "flex-start",
    alignItems: "center",
    // backgroundColor: "red",
    width: "100%",
    paddingHorizontal: 20,
  },
  overLayer: {
    paddingHorizontal: 30,
    paddingVertical: 45,
    justifyContent: "center",
    alignItems: "center",
    flex: 4,
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

export default RegisterScreen;
