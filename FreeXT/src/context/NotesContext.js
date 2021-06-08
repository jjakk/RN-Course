import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from 'react-native-uuid';
import createDataContext from './createNotesContext';
import { navigate } from '../navigationRef';

const notesReducer = (state, action) => {
    switch(action.type){
        case 'create_note':
            return state;
        default:
            return state;
    }
};

const getNote = (dispatch) => () => {
    dispatch();
};

const getNotes = (dispatch) => () => {
    dispatch();
};

const createNote = (dispatch) => async ({title, content}) => {
    try{
        let id = uuid.v4();
        console.log(JSON.stringify({title, content}));
        await AsyncStorage.setItem(id, JSON.stringify({title, content}));
        let result = await AsyncStorage.getItem(id);
        console.log(JSON.parse(result));
        dispatch({ type: 'create_note', payload: id });
    }
    catch(err){

    }
};

const updateNote = (dispatch) => () => {
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

