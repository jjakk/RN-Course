import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => console.log('navigate to sign in')}>
                <FontAwesome name="user-o" style={styles.icon} />
            </TouchableOpacity>
            <TextInput
                placeholder='Search'
                style={styles.input}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#D7D7D7',
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        padding: 15
    },
    icon: {
        fontSize: 32,
        alignSelf: 'center'
    },
    input: {
        fontSize: 26,
        alignSelf: 'center',
        marginLeft: 15
    }
});

export default SearchBar;