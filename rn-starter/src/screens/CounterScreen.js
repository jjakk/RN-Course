import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch(action.type){
        case 'change_count':
            return {...state, count: state.count + action.payload};
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    const { count } = state;

    return (
        <View>
            <Button
                title='Increase'
                onPress={() => {
                    dispatch({type: 'change_count', payload: 1});
                }}
            />
            <Button
                title='Decrease'
                onPress={() => {
                    dispatch({type: 'change_count', payload: -1});
                }}
            />
            <Text>Currnet Count: {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
