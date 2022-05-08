import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import DetailScreen from "../screens/detail";
import SettingsScreen from "../screens/settings";
import PeopleScreen from "../screens/people";
import { Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

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
          name="Detail"
          component={DetailScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return (
                <Icon
                  as={FontAwesome5}
                  name="location-arrow"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="People"
          component={PeopleScreen}
          options={{
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
