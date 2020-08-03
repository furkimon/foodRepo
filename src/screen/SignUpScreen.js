import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from'../components/NavLink';
//import { NavigationEvents } from 'react-navigation'; <NavigationEvents onWillFocus={clearErrorMessage} />
//import { Context as AuthContext } from '../context/AuthContext';

const SignUpScreen = ({navigation}) => {
//const {state, signup, clearErrorMessage} = useContext(AuthContext);
    return (
        <View>
            
            <AuthForm
                headerText = "Sign Up"
                errorMessage = "Error" // authContextten gelecek error yayinlanacak 211
                //errorMessage = {state.errorMessage}
                onSubmitButtonText = "Sign Up"
                onSubmit = {onPress = () => {navigation.navigate('Signin')}}
                //onSubmit = {({email, password}) => signup({email, password})}
            />
            <NavLink 
                routeName = "Signin"
                text = "Already have an account? Sign in instead"
            />
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
      header: () => false
    };
}

const styles = StyleSheet.create({
    /*container : {
        borderColor : 'red',
        borderWidth : 3,
        flex : 1,
        justifyContent : 'center',
        marginBottom:200
    }*/
});

export default SignUpScreen;