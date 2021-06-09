import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import createDataContext from './createNotesContext';
import { navigate } from '../navigationRef';

const notesReducer = (state, action) => {
    switch(action.type){
        case 'create_note':
            return state;
        case 'get_note':
            return state;
        case 'get_notes':
            return action.payload;
        case 'add_error':
            return { ...state, errorMessage: action.payload.errorMessage };
        default:
            return state;
    }
};

const getNote = (dispatch) => async ({ id }) => {
    const note = await AsyncStorage.getItem(id);
    dispatch({ type: 'get_note', payload: note });
};

const getNotes = (dispatch) => async () => {
    const keys = await AsyncStorage.getAllKeys();
    let notes = [];
    keys.forEach(async (key) => {
        let note = await AsyncStorage.getItem(key);
        note = JSON.parse(note);
        notes.push(note);
    });
    console.log(notes);
    dispatch({ type: 'get_notes', payload: null });
};

const createNote = (dispatch) => async ({ title, content }) => {
    try{
        let id = uuid.v4();
        await AsyncStorage.setItem(id, JSON.stringify({title, content}));
        dispatch({ type: 'create_note', payload: id });
    }
    catch(err){
        dispatch({ type: 'add_error', payload: { errorMessage: `Error: ${err}` } });
    }
};

const updateNote = (dispatch) => async ({ id }) => {

    dispatch();
};

const deleteNote = (dispatch) => () => {
    dispatch();
};

export const { Provider, Context } = createDataContext(
    notesReducer,
    { getNote, getNotes, createNote, updateNote, deleteNote },
    { errorMessage: '' }
);

