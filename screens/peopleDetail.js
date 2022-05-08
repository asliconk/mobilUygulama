import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Flex, Avatar } from "native-base";

export default function PeopleDetail({ route }) {
  const member = route.params;

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.container}>
          <Flex direction="row">
            <Avatar
              size="80px"
              source={{
                uri: member.TeamMemberImagePath,
              }}
            />
            <Flex style={style.userBox}>
              <Text style={style.userName}>{member.TeamMemberName}</Text>
              <Text style={style.userTitle}>{member.TeamMemberTitle}</Text>
            </Flex>
          </Flex>
          <View style={style.userContent}>
            <Text style={style.userContentText}>
              {member.TeamMemberCompany}
            </Text>
            <Text style={style.userContentText}>
              {member.TeamMemberDescription}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userBox: {
    paddingLeft: 16,
    justifyContent: "center",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  userTitle: {
    fontSize: 12,
    color: "gray",
  },
  userContent: {
    marginTop: 8,
  },
  userContentText: {
    marginTop: 16,
    fontSize: 16,
  },
});
