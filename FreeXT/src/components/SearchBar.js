import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <AntDesign name="search1" style={styles.icon} />
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