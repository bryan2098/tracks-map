import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from '../context/authContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';


const SignupScreen = () => {
  const {state, signup, clearErrorMessage} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm headerText="Sign Up for Tracker" 
                onSubmit={signup}
                errorMessage = {state.errorMessage} 
                submitButtonText="Sign Up"/>
      <NavLink text="Already have an account? Sign in instead" routeName="Signin" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
  },

});

export default SignupScreen;
