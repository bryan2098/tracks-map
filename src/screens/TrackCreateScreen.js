import React  from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';


const TrackCreateScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.styleText}>Track Create Screen</Text>
           
        </View>
    );
};

const styles = StyleSheet.create({
    styleText: {
        fontSize: 48
    }
})

export default TrackCreateScreen;