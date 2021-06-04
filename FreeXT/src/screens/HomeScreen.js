import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/Spacer';
import NotePreview from '../components/NotePreview';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Spacer>
                <SearchBar />
            </Spacer>
            <NotePreview name='Physics Notes' />
            <NotePreview name='Chem Notes' />
            <NotePreview name='Groceries' />
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