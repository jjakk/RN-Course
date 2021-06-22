import { State } from 'react-native-gesture-handler';
import createDataContext from './createDataContext';

const locationReducer = (sate, action) => {
    switch(action.type){
        default:
            return state;
    }
};

const startRecording = dispatch => () => {};
const stopRecording = dispatch => () => {};
const addLocation = dispatch => () => {};

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
);