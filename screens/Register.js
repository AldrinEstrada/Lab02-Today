import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@ui-kitten/components/ui';
import UserRegistration from '../firebase/UserRegistration';

export default function Register({navigation}) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <UserRegistration/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
