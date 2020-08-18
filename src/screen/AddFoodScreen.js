import React from 'react';
import { View, StyleSheet } from 'react-native';
import FoodForm from '../components/FoodForm';


const AddFoodScreen = ({navigation}) => {
    const isDinner = navigation.getParam('isDinner')
    // console.log(meal)
    return <View style={{flex: 1}}>
        <FoodForm 
            headerText = "Add Food to Diary"
            isItem = {false}
            isDinner = {isDinner}
        />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default AddFoodScreen;