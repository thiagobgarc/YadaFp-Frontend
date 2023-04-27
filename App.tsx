/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Home } from './src/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Yada } from './src/components/Yada';
import { MainPage } from './src/components/MainPage';
import { FoodPantry } from './src/components/FoodPantry';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FormFood } from './src/components/FormFood';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
function App(): JSX.Element {
   const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    ...styles.screen,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={{flexGrow: 1}}
        style={backgroundStyle}>
          <NavigationContainer>
            <Tab.Navigator initialRouteName='Home'>
              <Tab.Screen name='Yada' component={Yada}/>
              <Tab.Screen name='Home' component={MainPage}/>
              <Tab.Screen name='Food Pantry' component={FoodPantry}/>
            </Tab.Navigator>
          </NavigationContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  text: {
    color: 'black',
  }
});

export default App;
