import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ShowFoodScreen = ({navigation}) => {
    
    const item = navigation.getParam('item');
    const { name, kcal, protein, fat, carbohydrate, fiber } = item;
    
    return (
        <View>
            <Text>
                ShowFoodScreen
            </Text>
            <Text>
            {name}, {kcal}, {protein}, {fat}, {carbohydrate}, {fiber}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ShowFoodScreen;