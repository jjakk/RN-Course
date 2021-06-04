import React from 'react';
import { Text } from 'react-native';

const HomeScreen = () => {
    return (
        <>
            <Text>Home Screen</Text>
        </>
    );
};

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

export default HomeScreen;