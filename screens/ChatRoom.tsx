import * as React from 'react';
import { StyleSheet, Image, } from 'react-native';

import { Text, View } from '../components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Avatar, ListItem, Badge } from "react-native-elements";

const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Hey! this is msg from Raj, tell how are u?'
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Hey! this is msg from Raj, tell how are u?'
    },
  ]

export default function ChatRoomScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        title={l.name}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        rightElement={rightElement()}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
  }
</View>
    </SafeAreaView>
  );
}

function rightElement() {
    return(
        <View>
            <Text style={{fontSize:11}}>
                2:38 PM
            </Text>
            <Badge value={34} status="success" badgeStyle={{marginTop:"12%"}}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userCard: {
    justifyContent:'center',
    height:"12%",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom:"2%"
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