import React from 'react';
import { View, StyleSheet } from 'react-native';
import FoodForm from '../components/FoodForm';


const EditFoodScreen = ({ navigation }) => {

    return <View>
        <FoodForm 
            headerText = "Edit Food"
            routeName = 'Items'
            isEdit = {true}
        />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default EditFoodScreen;