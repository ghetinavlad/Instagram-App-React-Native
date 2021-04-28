/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, SafeAreaView, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';



const App: () => Node = () => {
  return (
   <>
   <NavigationContainer>
    <StatusBar barStyle="dark-content" />
      <Router /> 
    </NavigationContainer>
   </>
  );
};


export default App;
