import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/NotesContext';
import NotePreview from '../components/NotePreview';
import ErrorMessage from '../components/ErrorMessage';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state, createNote, getNote, getNotes } = useContext(Context);

    let notes = [
        {
            title: 'Physics Notes',
            content: 'The are my physics notes. f=ma. Thats all there really is to it.',
            id: '34028490'
        },
        {
            title: 'Chem Notes',
            content: 'These are my chem notes. lithium is the 3rd element.',
            id: '238490570'
        },
        {
            title: 'Groceries',
            content: '1.) Chicken nuggies 2.) salad 3.) french fries',
            id: '754387592'
        },
        {
            title: 'Things to Remember',
            content: 'These are some other things to remember. Take out the trash',
            id: '57982783479'
        }
    ];

    useEffect(() => {
        getNotes();
    }, []);

    return (
        <>
            <FlatList
                data={notes}
                renderItem={({ item }) => (
                        <NotePreview
                            title={item.title}
                            content={item.content}
                            onClick={() => {
                                navigation.navigate('Note', { title: item.title, content: item.content, id: 5 });
                            }}
                        />
                    )
                }
                keyExtractor={(item) => item.id}
            />
        </>
    );
};


HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Note')}>
                <Feather name="plus" size={30} style={{marginRight: 15}} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10
    }
});

export default HomeScreen;