import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import SearchBar from '../components/SearchBar';
import Spacer from '../components/Spacer';
import NotePreview from '../components/NotePreview';
import { NavigationEvents } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
    let notes = [
        {
            title: 'Physics Notes',
            contents: 'The are my physics notes. f=ma. Thats all there really is to it.',
            id: '34028490'
        },
        {
            title: 'Chem Notes',
            contents: 'These are my chem notes. lithium is the 3rd element.',
            id: '238490570'
        },
        {
            title: 'Groceries',
            contents: '1.) Chicken nuggies 2.) salad 3.) french fries',
            id: '754387592'
        },
        {
            title: 'Things to Remember',
            contents: 'These are some other things to remember. Take out the trash',
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
                            contents={item.contents}
                            onClick={() => {
                                navigation.navigate('Note');
                            }}
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