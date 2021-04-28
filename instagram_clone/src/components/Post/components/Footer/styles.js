import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        margin:5
    },
    iconsContainer:{
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    leftIcons:{
        flexDirection:'row',
        width:110,
        justifyContent:'space-between'
    },
    likes:{
        fontWeight:'bold',
        margin:3
    },
    caption:{
        margin:3
    },
    postedTime:{
        color:'#8c8c8c',
        margin:3
    }
});

export default styles;