import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import SettingsScreen from "../screens/settings";
import { Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { PeopleStackScreen } from "./_people";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon as={FontAwesome5} name="home" size={size} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="PeopleScreens"
          component={PeopleStackScreen}
          options={{
            title: "JSE Team",
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  as={FontAwesome5}
                  name="user-alt"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon as={FontAwesome5} name="cog" size={size} color={color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
