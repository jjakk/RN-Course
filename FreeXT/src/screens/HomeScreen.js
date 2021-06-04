import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/Spacer';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Spacer>
                <SearchBar />
            </Spacer>
        </View>
    );
};

HomeScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 75
    }
});

export default HomeScreen;