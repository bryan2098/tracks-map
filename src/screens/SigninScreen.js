import React  from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';


const SigninScreen = ({navigation}) => {
    return (
        <>
            <Text style={styles.styleText}>Signin Screen</Text>
        </>
    );
};

const styles = StyleSheet.create({
    styleText: {
        fontSize: 48
    }
})

export default SigninScreen;