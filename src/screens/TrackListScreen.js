import React  from 'react';
import {View, StyleSheet, Text} from 'react-native';


const TrackListScreen = () => {
    return (
        <View>
            <Text style={styles.styleText}>Track List Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    styleText: {
        fontSize: 48
    }
})

export default TrackListScreen;