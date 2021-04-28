import React from 'react';
import {Image, Text} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import StoryScreen from '../screens/StoryScreen';
import logo from '../assets/images/logo.png';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from "@react-navigation/stack";


const HomeStack = createStackNavigator();

const HomeRoutes = () => {
    return(
    <HomeStack.Navigator>
      <HomeStack.Screen
       name ="Home"
       component ={HomeScreen}
       options ={{
         title:'Instagram',
         headerLeftContainerStyle:{
            marginLeft:15,
         },
         headerRightContainerStyle:{
          marginRight:15,
       },
         headerLeft:() => (
           <Ionicons name="camera-outline" size={27} color={'#000'}/>
         ),
         headerTitle:() => (
          <Image source ={logo} resizeMode="contain" style ={{width: 135}}/>
        ),
         headerRight:() => (
          <Ionicons name="paper-plane-outline" size={25} color={"#545454"}/>
         ),

       }}
      />
  
    </HomeStack.Navigator>
    );
};

export default HomeRoutes;
