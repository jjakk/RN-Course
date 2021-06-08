import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Ionicons } from '@expo/vector-icons';

const NoteScreen = ({ navigation }) => {
    const [title, setTitle] = useState(navigation.getParam('title'));
    const [content, setContent] = useState(navigation.getParam('content'));

    return (
        <KeyboardAwareScrollView
            style={styles.container}
        >
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
        </KeyboardAwareScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1
    },
    title: {
        padding: 15,
        fontSize: 26
    },
    content: {
        fontSize: 18,
        padding: 15,
        flex: 1
    }
});

export default NoteScreen;