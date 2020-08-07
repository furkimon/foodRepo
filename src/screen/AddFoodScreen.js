import React from 'react';
import { View, StyleSheet } from 'react-native';
import FoodForm from '../components/FoodForm';


const AddFoodScreen = ({ navigation }) => {


    return <View>
        <FoodForm 
            headerText = "Add Food to Diary"
            headerButtonText = "Create Food"
            routeName = 'Diary'
            isEdit = {false}
        />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default AddFoodScreen;