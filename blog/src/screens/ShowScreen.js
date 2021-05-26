import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'; 

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return (
        <View>
            <Text style={styles.title}>{blogPost.title}</Text>
            <View style={styles.divider}/>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => {
                    navigation.navigate('Edit', { id: navigation.getParam('id') })
                }}>
                <Feather name="edit-2" size={25} style={{marginRight: 15}} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        margin: 15
    },
    content: {
        fontSize: 18,
        margin: 15
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginHorizontal: 15
    }
});

export default ShowScreen;

