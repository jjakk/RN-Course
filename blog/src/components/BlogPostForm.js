import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} placeholder='Enter Title' />
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} placeholder='Enter Content' />
            <TouchableOpacity onPress={() => onSubmit(title, content)}>
                <Text style={styles.submitButton}>
                    Save Blog Post
                </Text>
            </TouchableOpacity>
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        backgroundColor: '#e8e8e8',
        marginBottom: 15,
        padding: 10,
        margin: 15,
        borderRadius: 5
    },
    submitButton: {
        alignSelf: 'center',
        margin: 15,
        backgroundColor: '#5692db',
        color: 'white',
        padding: 10,
        paddingHorizontal: 15,
        fontSize: 24,
        borderRadius: 10,
        textAlign: 'center'
    }
});

export default BlogPostForm;
