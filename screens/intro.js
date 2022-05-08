import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function Intro() {
  return (
    <View>
      <Image source={require("./photos/logo.png")} />
      <Text style={style.Text}>Keep Your Locations</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("home")}
        style={style.loginBtn}
      >
        <Text style={style.loginText}>Get Started </Text>
      </TouchableOpacity>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A5E1AD",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70,
  },
  Text: {
    marginTop: 30,
    marginLeft: 40,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
  },
  loginBtn: {
    width: "50%",
    borderRadius: 5,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 95,
    backgroundColor: "#FDCEB9",
    color: "white",
    borderRadius: 50,
    marginBottom: 20,
  },
  Image: {
    width: 40,
    height: 40,
    alignItems: "center",
  },
});
