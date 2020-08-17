import React  from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';


const SignupScreen = ({navigation}) => {
    return (
        <>
            <Text style={styles.styleText}>Signup Screen</Text>
            <Button 
                title="Go to Signin" 
                onPress={() => navigation.navigate('Signin')}/>
        </>
    );
};

const styles = StyleSheet.create({
    styleText: {
        fontSize: 48
    }
})

export default SignupScreen;