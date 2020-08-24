import {AsyncStorage} from 'react-native'
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};    
        
        case 'signup':
            return {errorMessage: '', token: action.payload};

        default: 
            return state;
    }
}


const signup = (dispatch) => {
    return async ({email, password}) => {
        try {
            const reponse = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', reponse.data.token);
            dispatch({type: 'signup', payload: reponse.data.token});
        } catch (error) {
            dispatch({type: 'add_error', payload: 'Something went wrong with signup'})
        }
    };
};


const signin = (dispatch) => {
    return ({email, password}) => {
        // Try to sign in 
        // handle success by updating state
        // Handle failure by showing error message (somehow)
    }
}


const signout = (dispatch) => {
    return () => {
        // somehow sign out
    };
}

export const {Provider, Context} = createDataContext(authReducer, {signin, signout, signup}, {token: null, errorMessage: ''});