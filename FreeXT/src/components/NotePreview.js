import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';

const NotePreview = ({ title, onClick }) => {
    return (
        <TouchableOpacity onPress={onClick}>
            <Spacer>
                <View style={styles.container}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Spacer>
        </TouchableOpacity>
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