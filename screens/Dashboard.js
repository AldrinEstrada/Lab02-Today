import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { Avatar, Layout } from '@ui-kitten/components';
import Line from '../components/LineChart.js';
import { useState, useEffect } from 'react';


export default function Dashboard({navigation}) {
    const [data, setData] = useState();

 

    useEffect(() => {
        fetch('https://www.fruityvice.com/api/fruit/apple')
        .then(response => response.json())
        .then(data => console.log(data));
    }, []);

    return(
        <>
            <Text style={styles.header}>User logged in:</Text>
            <Avatar
                style={styles.avatar}
                size='small'
                source={require('../assets/monke.png')}
            />

            <Line />

            <Text>Make sure to eat an apple a day</Text>
            <Text>Here is the nutritional facts:</Text>
            {
                data && data.map((f, index) => {
                    return(
                    <View key={index}>
                        <Text>calories: {f.nutritions.calories}</Text>
                        <Text>sugar: {f.nutritions.sugar}</Text>
                        <Text>protein: {f.protein}</Text>
                    </View>
                    )
                })
            }

        </>
    )
}

const styles = StyleSheet.create({
    header: {

    }


  });