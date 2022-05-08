import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

export default function Map() {
  const [coordinator, setCoordinator] = useState({});
  const isFocused = useIsFocused();

  useEffect(async () => {
    const data = await AsyncStorage.getItem("@map");
    setCoordinator(JSON.parse(data) || { latitude: "", longitude: "" });
  }, [isFocused]);

  return (
    coordinator && (
      <View style={styles.container}>
        <MapView style={styles.map}>
          <Marker
            coordinate={{
              latitude: parseFloat(coordinator.latitude) || 38.6139,
              longitude: parseFloat(coordinator.longitude) || 27.4342,
            }}
          />
        </MapView>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
