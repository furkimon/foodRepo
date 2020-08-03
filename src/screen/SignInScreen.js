import React from 'react';
import {View, StyleSheet} from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignInScreen = ({navigation}) => {
    return (
        <View>
            <AuthForm
                headerText = "Sign In"
                errorMessage = "Error" // authContextten gelecek error yayinlanacak 211
                //errorMessage = {state.errorMessage}
                onSubmitButtonText = "Sign In"
                onSubmit = {onPress = () => {navigation.navigate('mainFlow')}}
                //onSubmit = {({email, password}) => signup({email, password})}
            />
            <NavLink 
                routeName = "Signup"
                text = "Dont have an account? Sign up now"
            />
        </View>
    )
}

SignInScreen.navigationOptions = () => {
    return {
      header: () => false
    };
}

const styles = StyleSheet.create({});

export default SignInScreen;