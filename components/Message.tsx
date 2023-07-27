import React from "react";
import { Text, View, Image } from "react-native";
import { MessageT } from "../types";
import styles from "../assets/styles";



const Message = ({ name }: MessageT) => {
  var random = new Date().getTime();
  return (
    <View style={styles.containerMessage}>
      <Image source={{
        uri: 'https://thispersondoesnotexist.com/?d=' + (random * 100).toString()
      }}
        style={styles.avatar} />
      <View>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default Message;
