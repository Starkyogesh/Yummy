import React, { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LogBox } from 'react-native';

import { createTables } from './screens/SqlData';

import HomePage from './screens/HomePage';
import MenuPage from './screens/MenuPage';
import VegPage from './screens/VegPage';
import NonVegPage from './screens/NonVegPage';
import VegAndNonVegPage from './screens/VegAndNonVeg';
import logPage from './screens/LoginPage';
import signPage from './screens/SigninPage';
import AboutPages from './screens/AboutScreen';
import SourcePage from './screens/SourcePage';

const homeIcon_active = require("./Icons/home.png");
const homeIcon = require("./Icons/home.png");
const menuIcon_active = require("./Icons/menu.png");
const menuIcon = require("./Icons/menu.png");

const logScreen = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function LogStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused }) => {
          let iconeName;

          if (route.name === "Home") {
            iconeName = focused ? homeIcon_active : homeIcon
          } else if (route.name === "Menu") {
            iconeName = focused ? menuIcon_active : menuIcon
          }

          return (
            <Image source={iconeName} resizeMode='certain' style={styles.footerIcon} />
          );
        },

        tabBarShowLabel: false,

        tabBarStyle: {
          padding: 10,
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          position: 'absolute',
          backgroundColor: 'silver',
        }
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Menu" component={MenuPage} />
    </Tab.Navigator>
  );
};


const App = () => {

  LogBox.ignoreAllLogs();

  createTables();

  return (
    <NavigationContainer>
      <logScreen.Navigator
        screenOptions={{ headerShown: false }}
      >
        <logScreen.Screen name='LogPage' component={logPage} />
        <logScreen.Screen name='SignPage' component={signPage} />
        <logScreen.Screen name='Home' component={LogStack} />
        <logScreen.Screen name="veg" component={VegPage} />
        <logScreen.Screen name="nonveg" component={NonVegPage} />
        <logScreen.Screen name="VegAndNonVeg" component={VegAndNonVegPage} />
        <logScreen.Screen name="AboutScreen" component={AboutPages} />
        <logScreen.Screen name="SourcePages" component={SourcePage} />
      </logScreen.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  footerIcon: {
    width: 30,
    height: 30
  },
});

export default App;