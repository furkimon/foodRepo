import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ProfileScreen = ({navigation}) => {
    return <View>
        <Text>ProfileScreen</Text>
        <Button 
            title = "My Info"
            onPress = {() => navigation.navigate('Info')}
        />
        <Button 
            title = "My Items"
            onPress = {() => navigation.navigate('Items')}
        />
    </View>
}

const styles = StyleSheet.create({});

export default ProfileScreen;