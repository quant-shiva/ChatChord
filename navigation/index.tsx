import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, View, Text } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import TopTabNavigation from './TopTabNavigation';
import SignupScreen from '../screens/SignUp';
import SigninScreen from '../screens/SignIn';
const Stack = createStackNavigator();
import { AuthContext } from '../contexts/AuthContext';


export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  
  const auth = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="signin"
        screenOptions={{
          headerStyle: { backgroundColor: '#633689' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerShown:auth.token ? true : false,
          headerRight: rightHeader
        }}>
        {
        !auth.token ? 
        <>
        <Stack.Screen name="signin" component={SigninScreen}/>
        <Stack.Screen name="signup" component={SignupScreen}/>
        </>
        :
        <Stack.Screen name="TabStack" component={TopTabNavigation} options={{ title: 'ChatCord' }}/>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function rightHeader() {
  return(
    <View>
      <Text>
        User
      </Text>
    </View>
  )
}