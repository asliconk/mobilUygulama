import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import axios from "axios";
import {
  Box,
  FlatList,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
} from "native-base";

export default function People({ navigation }) {
  const [data, setData] = useState([]);

  const init = async () => {
    const response = await axios.get("https://jse-api.mcbu.edu.tr/team-member");
    setData(response.data);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={style.container}>
      <Box>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PeopleDetail", item);
              }}
            >
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "gray.600",
                }}
                borderColor="coolGray.200"
                pl="4"
                pr="5"
                py="2"
              >
                <HStack space={3} justifyContent="space-between">
                  <Avatar
                    size="48px"
                    source={{
                      uri: item.TeamMemberImagePath,
                    }}
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.TeamMemberName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      {item.TeamMemberTitle}
                    </Text>
                  </VStack>
                  <Spacer />
                </HStack>
              </Box>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.TeamMemberID}
        />
      </Box>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  card: {
    height: 200,
    backgroundColor: "red",
  },
});
