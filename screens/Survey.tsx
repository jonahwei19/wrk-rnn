import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // You can add more styles here...
});

const Chat = () => {
  // You can put your existing state and functions here...

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <iframe src="https://jonahwei19-investormatch-streamlit-app-lipv2u.streamlit.app/" width="100%" height="500px"></iframe>
      {/* ... your existing code ... */}
    </div>
  );
};

export default Chat;
