import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.config';
import { Card, Text, Divider, Button } from '@ui-kitten/components/ui';

export default function UserRegistration() {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            <Card
                style={styles.card}
                status='primary'
            >
            <View>
                <Text style={styles.header}>Register</Text>
                <View>
                    <Text style={styles.creds}>Email</Text>
                    <TextInput
                        placeholder="Email..."
                        value={registerEmail}
                        onChangeText={(text) => setRegisterEmail(text)}
                    />
                    <Text style={styles.creds}>Password</Text>
                    <TextInput
                        placeholder="Password..."
                        value={registerPassword}
                        onChangeText={(text) => setRegisterPassword(text)}
                        secureTextEntry
                    />
                </View>
                <Button
                style={styles.button}
                    title="Register User"
                    onPress={() => {
                        register();
                        setRegisterEmail('');
                        setRegisterPassword('');
                    }}
                >
                    Register User
                    </Button>
            </View>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'flex-end'
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    card: {
        margin: 2,
        minHeight: 180,
        minWidth: 330,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    creds: {
        fontWeight: 'bold',
        fontSize: 18
    },
    bcreds: {
        marginBottom: 10
    },
    button: {
        width: 150,
        
    },
    register: {
        marginTop: 10,
    },
    buttonPosition: {
        alignItems: 'flex-end',
    }
});