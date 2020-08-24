import React  from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';


const TrackListScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.styleText}>Track List Screen</Text>
            <Button title="Detail" onPress={() => navigation.navigate('TrackDetail')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    styleText: {
        fontSize: 48
    }
})

export default TrackListScreen;