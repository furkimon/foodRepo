import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ItemsScreen = ({navigation}) => {
    return <View>
        <Text>ItemsScreen</Text>
        <Button 
            title = "Edit Food"
            onPress = { ()=> navigation.navigate('Edit')}
        />
    </View>
}

const styles = StyleSheet.create({});

export default ItemsScreen;