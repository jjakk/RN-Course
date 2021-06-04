import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <FontAwesome name="user-o" style={styles.icon} />
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
        fontSize: 28,
        alignSelf: 'center'
    },
    input: {
        fontSize: 26,
        alignSelf: 'center',
        marginLeft: 15
    }
});

export default SearchBar;