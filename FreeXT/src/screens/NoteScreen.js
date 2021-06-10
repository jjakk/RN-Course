import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Context } from '../context/NotesContext';

const NoteScreen = ({ navigation }) => {
    const { state, createNote, updateNote } = useContext(Context);
    const [title, setTitle] = useState(navigation.getParam('title'));
    const [content, setContent] = useState(navigation.getParam('content'));
    const [noteId, setNoteId] = useState(navigation.getParam('id'));

    if(!noteId){
        createNote({ title, content }, (id) => {
            setNoteId(id);
        });
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.title}
                value={title}
                placeholder='Title'
                onChangeText={(newTitle) => {
                    setTitle(newTitle);
                    if(noteId){
                        updateNote({id: noteId, title, content});
                    }
                }}
            />
            <TextInput
                multiline
                style={styles.content}
                value={content}
                placeholder='Content'
                onChangeText={(newContent) => {
                    setContent(newContent);
                    if(noteId){
                        updateNote({id: noteId, title, content});
                    }
                }}
            />
        </View>
    );
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