import React from 'react';
import { View, StyleSheet } from 'react-native';

const SearchBar = ({ children }) => {
    return (
        <View style={styles.spacer}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    spacer: {
        margin: 25
    }
});

export default SearchBar