import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spacer from '../components/Spacer';
import { Ionicons } from '@expo/vector-icons';

const NoteScreen = ({ navigation }) => {
    const [title, setTitle] = useState(navigation.getParam('title'));
    const [content, setContent] = useState(navigation.getParam('content'));

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
        flex: 1
    }
});

export default NoteScreen;