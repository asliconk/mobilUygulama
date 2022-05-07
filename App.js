import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView,} from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider, Text, Box } from 'native-base';
// import home from './screens/home';
// import settings from './screens/settings';
// import detail from './screens/detail';
// import intro from './screens/intro';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      tabBarIcon: ({focused}) ={ } (
            <View>
              <Image
                source={require('./photos/home.jpg')}
                resizeMode="contain"
              />
            </View>),
    </View>
  );
}

function DetailScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Detail!</Text>
      tabBarIcon: ({focused}) ={} (
            <View>
              <Image
                source={require('./photos/detail.jpg')}
                resizeMode="contain"
              />
            </View>),
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      tabBarIcon: ({focused}) ={} (
            <View>
              <Image
                source={require('./photos/settings.png')}
                resizeMode="contain"
              />
            </View>),
    </View>
  );
}

function PeopleScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>people</Text>
      tabBarIcon: ({focused}) ={} (
            <View>
              <Image
                source={require('./photos/people.jpg')}
                resizeMode="contain"
              />
            </View>),
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Detail" component={DetailScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="People" component={PeopleScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}