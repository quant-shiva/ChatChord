import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { Text, View } from '../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChatScreen() {
  const msgArr = [
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
    "This is your message for friends and they are great.",
  ]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {
      msgArr.map((val,index)=>{ 
       
     return( <View key={index}>
      <View style={styles.yourMsgBox}>
      <Text style={styles.yourMsg}>{val}</Text>
      <Text>8:30 PM</Text>
      </View>
      <View style={styles.otherMsgBox}>
      <Text style={styles.otherMsg}>{val}</Text>
      <Text>8:30 PM</Text>
      </View>
      </View>)
      })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  yourMsg: {
    fontSize: 15,
    textAlign: "right",
    color:'#ffff',
    margin:"2%"
  },
  otherMsg: {
    fontSize: 15,
    textAlign: "left",
    color:'#ffff',
    margin:"2%"
  },
  yourMsgBox: {
    backgroundColor:'#5B3256',
    marginLeft:'30%',
    marginBottom: "3%",
    borderWidth:0.5,
    borderRadius:5,
    marginRight:"2%",
    alignItems:'center'
  },
  otherMsgBox: {
    backgroundColor:"#BE90D4",
    marginRight:'30%',
    marginBottom: "3%",
    borderWidth:0.3,
    borderRadius:5,
    marginLeft:"2%",
    alignItems:'center'
  }
});