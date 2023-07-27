import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CombinedContext } from '../CombinedContextType';

const LoginPage = () => {
  const context = useContext(CombinedContext);

  if (!context) {
    throw new Error('LoginPage must be used within a CombinedContextProvider');
  }

  const { user, setUser, match, myMatches, setMatch, setMyMatches } = context;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  let tempId = 0;

  const handleLogin = (e: React.FormEvent) => {
   





    fetch('https://eo1esksf2jpvc0b.m.pipedream.net/?user=' + email + '&password=' + password, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        tempId = data.index;
        fetch('https://eoqey8dvprzk3ky.m.pipedream.net/?userId='+tempId, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => response.json())
          .then(data => {
            console.log(data);
            e.preventDefault();
            setMatch(data);
            console.log(match); // Set the user data
          })
          .catch((error) => {
            console.error('Error:', error);
    
          });
        fetch('https://eopkg1zlglr8uzr.m.pipedream.net/?userId=' + tempId, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }).then(response => response.json())
          .then(data => {
            e.preventDefault();
            setMyMatches(data);
          })
          .catch((error) => {
            console.error('Error:', error);

          });
        e.preventDefault();
        setUser(data);
        console.log(user); // Set the user data
        navigation.navigate('App');
      })
      .catch((error) => {
        console.error('Error:', error);

      });
  };


  return (
    <View style={styles.container}>

      <View style={styles.inputContainer}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 48,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 24,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
  },
  button: {
    backgroundColor: '#007BFF',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPage;



