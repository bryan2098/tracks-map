import React, {useState, useEffect, useContext}  from 'react';
import '../_mockLocation';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';
import Map from '../components/Map';
import {Context as LocationContext} from '../context/locationContext';

const TrackCreateScreen = ({navigation}) => {

    const {addLocation} = useContext(LocationContext);
    const [err, setErr] = useState(null);

    const starWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) =>  {
                addLocation(location);
            });
        } catch (error) {
            setErr(error);
        }
    }

    useEffect(() => {
        starWatching();
    }, [])

    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={styles.styleText}>Track Create Screen</Text>
            <Map/>
            {err ? <Text>Please enable location service</Text> : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    styleText: {
        fontSize: 48
    }
})

export default TrackCreateScreen;