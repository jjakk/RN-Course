import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/Spacer';
import NotePreview from '../components/NotePreview';

const HomeScreen = () => {
    let notes = [
        {
            title: 'Physics Notes',
            contents: 'sjfksjflsdjflkjsldkfsjdfksldf',
            id: '34028490'
        },
        {
            title: 'Chem Notes',
            contents: 'fiowehucwiehviuwvehiu',
            id: '238490570'
        },
        {
            title: 'Groceries',
            contents: 'ghrgheriugheirug',
            id: '754387592'
        },
        {
            title: 'Things to Remember',
            contents: 'fwjeofiwhjiovwhewhioe',
            id: '57982783479'
        }
    ];

    return (
        <View style={styles.container}>
            <Spacer>
                <SearchBar />
            </Spacer>
            <FlatList
                data={notes}
                renderItem={({ item }) => (
                        <NotePreview
                            title={item.title}
                            onClick={() => {}}
                        />
                    )
                }
                keyExtractor={(item) => item.id}
            />
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