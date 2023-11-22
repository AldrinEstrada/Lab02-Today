import React from 'react';
import { View, Text, Button } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from './firebase.config'; // Assuming this is your Firebase configuration file

export default function UserLogout() {
  const logoutUser = async () => {
    try {
      await signOut(auth);
      console.log("User logged out");
    } catch (error) {
      console.log("Error logging out:", error.message);
    }
  };

  return (
    <View>
      <View>
        <Text>Signing user out</Text>
      </View>
      <Button title="Logout" onPress={() => logoutUser()} />
    </View>
  );
}
