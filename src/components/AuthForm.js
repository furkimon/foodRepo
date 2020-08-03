import React, {useState} from 'react';
import {Text, Button, Input} from 'react-native-elements';
import { StyleSheet} from 'react-native';
import Spacer from './Spacer';
import Header from './Header';


const AuthForm = ({ headerText, errorMessage, onSubmit, onSubmitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
        <Header
            headerText = {headerText}
        />       
        <Spacer>
            <Input
                label = "Email"
                value = {email} 
                onChangeText = {setEmail}
                autoCapitalize = "none"
                autoCorrect = {false}
            />
        </Spacer>
        <Spacer>
            <Input
                secureTextEntry
                label = "Password"
                value = {password} 
                onChangeText = {setPassword}
                autoCapitalize = "none"
                autoCorrect = {false} 
            />
        </Spacer>
        
        {errorMessage ? (
            <Text style = {styles.errorMessage}>{errorMessage}</Text>
        ) : null }

        <Button 
            title = {onSubmitButtonText}
            onPress = {onSubmit}
        />
        </>
    )
}

const styles = StyleSheet.create({
    errorMessage : {
        fontSize : 16,
        color : 'red',
        marginLeft : 15,
        marginTop : 15
    }
})

export default AuthForm;