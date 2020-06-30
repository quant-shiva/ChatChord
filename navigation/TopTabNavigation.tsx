import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ChatRoomScreen from '../screens/ChatRoom';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigation() {
    return (
        <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#F8F8F8',
          style: {
            backgroundColor: '#633689',
          },
          labelStyle: {
            textAlign: 'center',
          },
          indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
          },
        }}>
        <Tab.Screen
          name="chat"
          component={ChatRoomScreen}
          options={{
            tabBarLabel: 'Chat',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="home" color={color} size={size} />
            // ),
          }}  />
        <Tab.Screen
          name="SecondPage"
          component={ChatScreen}
          options={{
            tabBarLabel: 'Setting',
            // tabBarIcon: ({ color, size }) => (
            //   <MaterialCommunityIcons name="settings" color={color} size={size} />
            // ),
          }} />
      </Tab.Navigator>
    );
}