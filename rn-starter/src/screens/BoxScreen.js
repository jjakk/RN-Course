import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.boxOne}/>
            <View style={styles.boxTwo}/>
            <View style={styles.boxThree}/>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
    },
    boxOne: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        alignSelf: 'flex-start',
        position: 'absolute'
    },
    boxTwo: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        alignSelf: 'center',
        position: 'absolute',
        top: 50
    },
    boxThree: {
        width: 50,
        height: 50,
        backgroundColor: 'purple',
        alignSelf: 'flex-end',
        position: 'absolute'
    }
});

export default BoxScreen;
