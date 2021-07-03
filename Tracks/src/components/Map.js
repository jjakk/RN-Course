import React, { useContext } from 'react';
import { Text, StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';
import Spacer from './Spacer';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size='large' color="#0000ff" style={{ marginTop: 200 }} />;
    }

    const initialLocation = {
        longitude: -122.0312186,
        latitude: 37.33233141,
    };

    return (
        <Spacer>
            <MapView
                style={styles.map}
                initialRegion={{
                    ...initialLocation,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
                <Circle
                    center={currentLocation.coords}
                    radius={30}
                    strokeColor='rgba(158, 158, 255, 1.0)'
                    fillColor='rgba(158, 158, 255, 0.3)'
                />
                <Polyline coordinates={locations.map(loc => loc.coords)} />
            </MapView>
        </Spacer>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;