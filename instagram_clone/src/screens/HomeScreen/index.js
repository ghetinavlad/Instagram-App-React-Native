import React from 'react';
import {SafeAreaView} from 'react-native';
import Post from "../../components/Post";
import Feed from "../../components/Feed";

const HomeScreen = () => {
    return (
        <SafeAreaView>
         <Feed />
        </SafeAreaView>
       );
};

export default HomeScreen;