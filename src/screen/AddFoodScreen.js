import React from 'react';
import { View, StyleSheet } from 'react-native';
import FoodForm from '../components/FoodForm';


const AddFoodScreen = ({ navigation }) => {


    return <View>
        <FoodForm 
            navigation = {navigation}
            headerText = "Add Food"
            routeName = 'Diary'
        />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default AddFoodScreen;