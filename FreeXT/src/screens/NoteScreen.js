import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const NoteScreen = ({ navigation }) => {
    const [title, setTitle] = useState(navigation.getParam('title'));
    const [content, setContent] = useState(navigation.getParam('content'));

    useEffect(() => {
        const newNote = navigation.getParam('id') === undefined;
    }, []);

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