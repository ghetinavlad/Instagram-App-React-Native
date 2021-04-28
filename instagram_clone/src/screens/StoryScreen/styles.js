import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        height:'100%'
    },

    image:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"space-between"
    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:10
    },
    userName:{
        color:'white',
        fontWeight:'700',
        fontSize:18
    },
    postedTime:{
        marginLeft:10,
        color:'#DCDCDC',
        fontWeight:'600',
        fontSize:15
    },
    bottomContainer:{
        flexDirection:'row',
        marginBottom:15,
        marginHorizontal:9
    },
    textInputContainer:{
        flex:1,
        borderWidth:2,
        borderColor:'white',
        borderRadius:50,
        height:50,
        marginHorizontal:10,
        paddingHorizontal:10,
    },
    cameraButton:{
        width:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'white',
        borderRadius:50,

    },
    messageButton:{
        width:50,
        alignItems:'center',
        justifyContent:'center'
    },
    textInput:{
        height:'100%',
        color:'white',
        fontSize:15.5
    }
})

export default styles;