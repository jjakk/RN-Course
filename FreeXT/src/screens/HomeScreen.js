import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/NotesContext';
import NotePreview from '../components/NotePreview';
import ErrorMessage from '../components/ErrorMessage';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    const { state, createNote, getNotes } = useContext(Context);

    useEffect(() => {
        getNotes();

        const listener = navigation.addListener('didFocus', () => {
            getNotes();
        });

        return () => {
            listener.remove();
        };
    }, []);

    return (
        <>
            <FlatList
                data={state}
                renderItem={({ item }) => (
                        <NotePreview
                            title={item.title}
                            content={item.content}
                            id={item.id}
                            onClick={() => {
                                navigation.navigate('Note', { title: item.title, content: item.content, id: item.id });
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
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Note')
                }}
            >
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