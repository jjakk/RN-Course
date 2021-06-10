import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/NotesContext';
import { MaterialIcons } from '@expo/vector-icons';
import { navigate } from '../navigationRef';

const NoteScreen = ({ navigation }) => {
    const { state, createNote, deleteNote, updateNote } = useContext(Context);
    const [title, setTitle] = useState(navigation.getParam('title'));
    const [content, setContent] = useState(navigation.getParam('content'));
    const [noteId, setNoteId] = useState(navigation.getParam('id'));

    if(!noteId){
        createNote({ title, content }, (id) => {
            setNoteId(id);
        });
    }
    else{
        updateNote({id: noteId, title, content});
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.title}
                value={title}
                placeholder='Title'
                onChangeText={setTitle}
            />
            <TextInput
                multiline
                style={styles.content}
                value={content}
                placeholder='Content'
                onChangeText={setContent}
            />
        </View>
    );
};

NoteScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Home')
                }}
            >
                <MaterialIcons name="delete-outline" size={30} style={{marginRight: 15}} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        padding: 15,
        fontSize: 26
    },
    content: {
        fontSize: 18,
        margin: 15,
        textAlignVertical: 'top',
        lineHeight: 25,
        flex: 1
    }
});

export default NoteScreen;