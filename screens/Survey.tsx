import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import WebView from 'react-native-webview';

  return (
    <View style={styles.container}>
      <WebView source={{ uri: 'https://jonahwei19-investormatch-streamlit-app-lipv2u.streamlit.app/' }} />
      {/* ... your existing code ... */}
    </View>
  );
};

// ... your existing code ...
