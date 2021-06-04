import React from 'react';
import { View } from 'react-native';

const SearchBar = ({ children, spacing }) => {
    return (
        <View style={{margin: spacing}}>
            {children}
        </View>
    );
};

SearchBar.defaultProps = {
    spacing: 25
};

export default SearchBar