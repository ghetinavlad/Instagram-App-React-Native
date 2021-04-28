import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {Text,View,  SafeAreaView, TextInput, ImageBackground, ActivityIndicator, Touchable, TouchableWithoutFeedback, Dimensions} from 'react-native';
import Story from '../../components/UserStoryPreview';
import storiesData from '../../data/stories';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

const StoryScreen = () => {

    const[userStories,setUserStories] = useState(null);
    const[activeStoryIndex,setActiveStoryIndex] = useState(null);

    const route = useRoute();
    const navigation = useNavigation();
    const userId = route.params.userId;

    useEffect( () => {
        const userStories = storiesData.find(storyData => storyData.user.id === userId);
        setUserStories(userStories)
        setActiveStoryIndex(0);
    }, []);

    useEffect( () => {
        if(!userStories){
            return;
        }
        if(activeStoryIndex < 0){
            setActiveStoryIndex(0);
            return;
        }

        if(activeStoryIndex >= userStories.stories.length){
            setActiveStoryIndex(userStories.stories.length - 1);
        
        }

    }, [activeStoryIndex]);

    const navigateToNextUser = () =>{
        navigation.push("Story", {userId: (parseInt(userId) + 1).toString() });
    }

    const navigateToPreviousUser = () =>{
        navigation.push("Story", {userId: (parseInt(userId) - 1).toString() });
    }

    const handleNextStory = () => {
        if(activeStoryIndex >= userStories.stories.length -1){
            navigateToNextUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex + 1);
    }

    const handlePrevStory = () => {
        if(activeStoryIndex <= 0){
            navigateToPreviousUser();
            return;
        }
        setActiveStoryIndex(activeStoryIndex - 1);
    }

    const handlePress = (evt) => {
        const x_axis = evt.nativeEvent.locationX;
        const screenWidth = Dimensions.get('window').width;
    
        if(x_axis < screenWidth/2){
            handlePrevStory();
        }
        else{
            handleNextStory();
        }

    }

    if(!userStories){
        return (
            <SafeAreaView>
                <ActivityIndicator />
            </SafeAreaView>
        )
    }

    const activeStory = userStories.stories[activeStoryIndex];


    return(
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={handlePress}>
                <ImageBackground
                    source={{uri:activeStory.imageUri}}
                    style = {styles.image}>
                        <View style ={styles.userInfo}>
                            <ProfilePicture uri={userStories.user.imageUri} size={50} />
                            <Text style={styles.userName}>{userStories.user.name}</Text>
                            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
                        </View>
                        <View style={styles.bottomContainer}>
                            <View style={styles.cameraButton}>
                                <Feather name="camera" size={31} color={'#ffffff'} />
                            </View>
                            <View style={styles.textInputContainer}>
                            <TextInput
                             style={styles.textInput}
                             editable
                             placeholder="Send message" 
                             placeholderTextColor={'white'}
                            />
                            </View>
                            <View style={styles.messageButton}>
                                <Ionicons name="paper-plane-outline" size={31} color={'#ffffff'} />
                            </View>
                        </View>
                </ImageBackground>
                </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

export default StoryScreen;