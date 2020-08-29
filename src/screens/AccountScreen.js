import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from '../context/authContext';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);
    return (
        <View>
            <Text style={styles.styleText}>Account Screen</Text>
            <Button title="Sign Out" onPress={signout} />
        </View>
    );
};

AccountScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
}

const styles = StyleSheet.create({
    styleText: 49
})

export default AccountScreen;