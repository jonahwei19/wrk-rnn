import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const openai = axios.create({
  baseURL: 'https://api.openai.com/v1',
  headers: {
    'Authorization': `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`,
    'Content-Type': 'application/json'
  }
});

const Chat = () => {
  const [messages, setMessages] = useState([
    {role: 'system', content: 'You are a helpful assistant.'}
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const newMessages = [...messages, {role: 'user', content: input}];
    setMessages(newMessages);
    setInput('');

    const response = await openai.post('/engines/davinci-codex/completions', {
      model: 'text-davinci-002',
      messages: newMessages
    });

    const assistantMessage = response.data.choices[0].text.trim();
    setMessages([...newMessages, {role: 'assistant', content: assistantMessage}]);
  };

  return (
    <View style={styles.container}>
      {messages.map((message, index) => (
        <Text key={index}>{message.role}: {message.content}</Text>
      ))}
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={setInput}
        placeholder="Type a message"
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default Chat;
