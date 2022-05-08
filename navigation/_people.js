import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PeopleScreen from "../screens/people";
import PeopleDetailScreen from "../screens/peopleDetail";

const PeopleStack = createNativeStackNavigator();

export function PeopleStackScreen() {
  return (
    <PeopleStack.Navigator>
      <PeopleStack.Screen
        name="People"
        component={PeopleScreen}
        options={{ headerShown: false }}
      />
      <PeopleStack.Screen
        name="PeopleDetail"
        component={PeopleDetailScreen}
        options={{ headerShown: false }}
      />
    </PeopleStack.Navigator>
  );
}
