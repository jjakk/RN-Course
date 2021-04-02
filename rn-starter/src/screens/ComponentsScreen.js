import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    let name = 'Jak';
    
    return (
        <View>
            <Text style={styles.header}>Getting started with react native!</Text>
            <Text style={styles.name}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45
    },
    name: {
        fontSize: 20
    }
});

export default ComponentsScreen;