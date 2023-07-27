import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from '../assets/styles';

const ChatWindow = ({ messages, onBack }) => {
    let random = Math.random();

  return (
    <View style={styles.containerMessages}>
      {messages.map((message, index) => (
        <View key={index} style={styles.messageContainer}>
            <Image source={{
          uri: 'https://thispersondoesnotexist.com/?d='+(random*100).toString()}
       } style={styles.avatarSmall} />
          <Text style={styles.messageText}>
            {message.sender}: {message.text}
          </Text>
        </View>
      ))}
      <Button title="Back" onPress={onBack} />
    </View>
  );
};

export default ChatWindow;