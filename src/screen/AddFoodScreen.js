import React from 'react';
import { View, StyleSheet } from 'react-native';
import FoodForm from '../components/FoodForm';


const AddFoodScreen = () => {


    return <View style={{flex: 1}}>
        <FoodForm 
            headerText = "Add Food to Diary"
            isItem = {false}
        />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default AddFoodScreen;