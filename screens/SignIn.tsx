import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../contexts/AuthContext';


export default function SigninScreen({navigation}:any) {
    
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const auth = React.useContext(AuthContext);

    const submit = (): void =>{
        if(email && password){
            auth.setToken("secret_token");
        }
    }

    return(
        <View style={style.container}>
            <View style={style.titleTextContainer}>
                <Text style={style.titleText}>
                    ChatCord
                </Text>
            </View>
            <Input
             placeholder="Email Address"
             leftIcon={{name:'email', type:'materialicons'}}
             leftIconContainerStyle={{marginRight:"4%"}}
             style={style.email}
             onChangeText={text=>setEmail(text)}
            />
            <Input
             placeholder="Password"
             leftIcon={{name:'lock', type:'materialicons'}}
             leftIconContainerStyle={{marginRight:"4%"}}
             style={style.Password}
             onChangeText={text=>setPassword(text)}
             secureTextEntry
            />
            <View>
                <Button title="Sign In" buttonStyle={style.btnStyle} containerStyle={style.btnContainerStyle} onPress={submit}/>
            </View>
            <View style={style.signupContainer}>
                <Text>
                    Don't have an account? 
                </Text>
                <Text style={style.signupText} onPress={()=>{navigation.navigate('signup')}}>Sign Up Here</Text>
            </View>
            <View style={style.forgotContainer}>
                <Text style={style.forgotText}>
                    Forgot Password?
                </Text>
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