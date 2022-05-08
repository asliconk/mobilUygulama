import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { VStack, Button, FormControl, Input, Center } from "native-base";

function BuildingAFormExample() {
  const [formData, setData] = useState({});

  useEffect(async () => {
    const data = await AsyncStorage.getItem("@map");
    setData(JSON.parse(data) || { latitude: "", longitude: "" });
  }, []);

  const onSubmit = async () => {
    await AsyncStorage.setItem("@map", JSON.stringify(formData));
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Latitude
        </FormControl.Label>
        <Input
          placeholder="Latitude"
          value={formData.latitude}
          onChangeText={(value) => setData({ ...formData, latitude: value })}
        />
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Longitude
        </FormControl.Label>
        <Input
          placeholder="Longitude"
          value={formData.longitude}
          onChangeText={(value) => setData({ ...formData, longitude: value })}
        />
      </FormControl>
      <Button onPress={onSubmit} mt="5" colorScheme="cyan">
        Save
      </Button>
    </VStack>
  );
}

export default function Settings() {
  return (
    <Center flex={1}>
      <BuildingAFormExample />
    </Center>
  );
}
