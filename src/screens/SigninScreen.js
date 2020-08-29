import React, {useContext}  from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SigninScreen = () => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage} />
            <AuthForm 
                headerText="Sign In to Your Account" 
                onSubmit={signin}
                errorMessage = {state.errorMessage} 
                submitButtonText="Sign In"/>         
            <NavLink text="Don't have account? Sign up instead" routeName="Signup"/>  
        </View>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        header: () => false,
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
})

export default SigninScreen;