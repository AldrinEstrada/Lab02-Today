import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.config';


export default function UserEmailSignIn() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign In</Text>
      <View>
        <Text style={styles.subheader}>Email</Text>
        <TextInput
          placeholder="Email..."
          value={loginEmail}
          onChangeText={(text) => setLoginEmail(text)}
        />
        <Text style={styles.subheader}>Password</Text>
        <TextInput
          placeholder="Password..."
          value={loginPassword}
          onChangeText={(text) => setLoginPassword(text)}
          secureTextEntry
        />
      </View>
      <Button style={styles.loginButton}
        title="Login"
        onPress={() => {
          login();
          setLoginEmail('');
          setLoginPassword('');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        gap: 20
    },
    subheader: {
        fontWeight: 'bold'
    },
    loginButton: {
        maxWidth: 120
    }
  });
  
