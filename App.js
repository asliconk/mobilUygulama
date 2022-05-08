import "react-native-gesture-handler";
import React from "react";
import Navigation from "./navigation/router";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
