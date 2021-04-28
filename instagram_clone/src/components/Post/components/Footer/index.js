import React ,{useState, useEffect} from 'react';
import {Text, View ,TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import FontListoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const Footer = ({likes: likesProp, caption, postedTime}) => {

    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    
    const onLikePressed = () => {
      setIsLiked(!isLiked);

      const amount = isLiked ? -1 : 1;
      setLikes(likes + amount);
    }

    useEffect(  () =>{
      setLikes(likesProp)
    },[])

    return (
      <View style = {styles.container}>

        <View style = {styles.iconsContainer}>
          <View style = {styles.leftIcons}>
            <TouchableWithoutFeedback onPress={onLikePressed}>
              {isLiked?
                  <ADIcon name="heart" size={25} color={"#E14B4B"}/>
                : <ADIcon name="hearto" size={25} color={"#545454"}/>
              }
            </TouchableWithoutFeedback>
            <FontListoIcon name="comment" size={23} color={"#545454"}/>
            <IoniconsIcon name="paper-plane-outline" size={25} color={"#545454"}/>
          </View>
          <View style = {styles.rightIcons}>
            <FAIcon name="bookmark-o" size={25}/>
          </View>
        </View>
        <Text style={styles.likes}>{likes} Likes</Text>
        <Text style = {styles.caption}>{caption}</Text>
        <Text style = {styles.postedTime}>{postedTime}</Text>
        </View>
      );
};

export default Footer;