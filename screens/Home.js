import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text, Button } from '@ui-kitten/components';
import UserEmailSignIn from '../firebase/UserEmailSignIn';

export default function Home({ navigation }) {
  const [buttonText, setButtonText] = useState('Register');

  return (
    <View style={styles.container}>
            <Card
            style={styles.card}
            status='primary'
            >
                <UserEmailSignIn />
                <Text style={styles.register}
                    onPress={() => {
                    navigation.push('Register');
                    }}
                >Register
                </Text>
            </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 300
  },
  register: {
    left: 200,
    top: 10
  }
});
