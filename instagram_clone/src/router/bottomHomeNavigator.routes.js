import React from 'react';

import DiscoveryScreen from '../screens/DiscoveryScreen';
import PostScreen from '../screens/PostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeStackScreen from './home.routes';

import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import ADIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


const Tab = createBottomTabNavigator();

const BottomHomeNavigator = () => {
    return(
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {

        if (route.name === 'Home') {
          return <Foundation name="home" size={size} color={color} />;  
        } 
        if (route.name === 'Discovery') {
          return <Feather name="search" size={size} color={color} />; 
        }
        if (route.name === 'Post') {
          return <Feather name="plus-square" size={size} color={color} />; 
        }
        if (route.name === 'Notifications') {
          return <ADIcon name="hearto" size={size} color={color} />; 
        }
        if (route.name === 'Profile') {
          return <Ionicons name="person-outline" size={size} color={color} />; 
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      showLabel:false
    }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Discovery" component={DiscoveryScreen} />
      <Tab.Screen name="Post" component={PostScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      
    </Tab.Navigator>
    );
};

export default BottomHomeNavigator;