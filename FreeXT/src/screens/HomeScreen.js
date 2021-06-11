import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
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
        <View style={styles.container}>
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
            {
            state.length === 0
                ? (
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/adaptive-icon.png')}
                            style={styles.empty}
                        />
                    </View>
                )
                : null
            }
        </View>
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
        marginTop: 10,
        flex: 1
    },
    imageContainer: {
        flex: 2
    },
    empty: {
        height: 150,
        width: 150,
        opacity: 0.5,
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#cccccc',
        borderRadius: 999999
    }
});

export default HomeScreen;