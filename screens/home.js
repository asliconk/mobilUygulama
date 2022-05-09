import { View, Text, Image, StyleSheet } from "react-native";
export default function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../photos/logo.png")}></Image>
      <Text style={styles.Text}>JSE LOCATIONS</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  img: {
    width: 350,
    height: 300,
    resizeMode: "stretch",
  },
  Text: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: "bold",
    color: "#333C83",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFAAAA",
    justifyContent: "center",
    alignItems: "center",
  },
});
