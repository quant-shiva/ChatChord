import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';


export default function SignupScreen({navigation}:any) {
    return(
        <View style={style.container}>
            <View style={style.titleTextContainer}>
                <Text style={style.titleText}>
                    ChatCord
                </Text>
            </View>
            <Input
             placeholder="First Name"
             style={style.email}
            />
            <Input
             placeholder="Last Name"
             style={style.Password}
             secureTextEntry
            />
            <Input
             placeholder="Email Address"
             style={style.email}
            />
            <Input
             placeholder="Set Password"
             style={style.Password}
             secureTextEntry
            />
            <View>
                <Button title="Create Account" buttonStyle={style.btnStyle} containerStyle={style.btnContainerStyle}/>
            </View>
            <View style={style.signupContainer}>
                <Text>
                    Already have an account? 
                </Text>
                <Text style={style.signupText} onPress={()=>{navigation.navigate('signin')}}>Sign In Here</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        paddingTop:"30%",
        paddingHorizontal:"5%",
        backgroundColor:"#407A52",
    },
    email:{
    },
    Password:{
    },
    btnStyle:{
        backgroundColor:"#875F9A",
        borderRadius:10
    },
    btnContainerStyle:{
        paddingHorizontal:"8%",
        marginTop:"10%"
    },
   titleText: {
       fontSize:25,
       fontWeight:"bold",
       textAlign:'center'
    },
    titleTextContainer: {
        marginBottom:"15%"
     },
     signupContainer: {
         marginTop:"5%",
         flexDirection:'row',
         marginLeft:"8%"
     },
     signupText: {
         fontSize:15,
         fontWeight:'bold',
         marginLeft:'3%'
     },
     forgotContainer: {
         alignItems: 'center',
         marginTop:"18%"
     },
     forgotText: {
         fontSize:16,
         fontWeight:"bold"
     }
})