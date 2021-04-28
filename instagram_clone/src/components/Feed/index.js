import React from 'react';
import {FlatList, Text} from 'react-native';
import Post from '../Post';
import Stories from "../UserStoriesPreview";

const data = [
  {
    id:'1',
    user:{
        imageUri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'Lucas'
    },
    imageUri:'https://i.pinimg.com/736x/e6/91/64/e6916434f5345a25b8f50e52459b8536.jpg',
    likes:5789,
    caption:'Landscape by Theodor Pallady #art #treasure',
    postedTime:'6 minutes ago'
  },
  {
    id:'2',
    user:{
        imageUri:'https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'David'
    },
    imageUri:'https://d1bvpoagx8hqbg.cloudfront.net/originals/new-york-night-ca4bea1ac36526dcd0ea097c9424c763.jpg',
    likes:855,
    caption:'New York at night #ny #lights',
    postedTime:'2 days ago'
  },
  {
    id:'3',
    user:{
        imageUri:'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'Peter'
    },
    imageUri:'https://i.pinimg.com/736x/e6/91/64/e6916434f5345a25b8f50e52459b8536.jpg',
    likes:11304,
    caption:'Landscape by Theodor Pallday #art #treasure',
    postedTime:'6 minutes ago'
  }
]

const Feed = () => {
    return (
        <FlatList
            data = {data}
            renderItem={({item}) => <Post post = {item} />}
            keyExtractor={({id}) => id}
            ListHeaderComponent={Stories}
        />
      );
};

export default Feed;