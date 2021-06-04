import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Spacer from './Spacer';

const NotePreview = ({ name }) => {
    return (
        <Spacer>
            <View style={styles.container}>
                <Text style={styles.title}>{name}</Text>
            </View>
        </Spacer>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: '#D7D7D7',
        paddingBottom: 10
    },
    title: {
        fontSize: 26
    }
});

export default NotePreview;