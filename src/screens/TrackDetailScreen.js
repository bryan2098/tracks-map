import React  from 'react';
import {View, StyleSheet, Text} from 'react-native';


const TrackDetailScreen = () => {
    return (
        <View>
            <Text style={styles.styleText}>Track Detail Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    styleText: {
        fontSize: 48
    }
})

export default TrackDetailScreen;