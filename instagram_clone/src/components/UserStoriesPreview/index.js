import React from 'react';
import {View, Text, FlatList} from 'react-native';

import Story from '../UserStoryPreview';
import styles from './styles';
import storiesData from '../../data/stories';


const Stories = (story) => {
    return (
        <>
        <FlatList
            data = {storiesData}
            renderItem={({item}) => <Story story = {item}/>}
            keyExtractor={({user: {id}}) => id}
            showsHorizontalScrollIndicator={false}
            style = {styles.container}
            horizontal
        />
        </>
       );
};

export default Stories;