import React from 'react';
import { View, StyleSheet } from 'react-native';
import FoodForm from '../components/FoodForm';


const EditFoodScreen = ({ navigation }) => {
// route = {navigation.navigate('Diary')} (in foodlist)

    return <View>
        <FoodForm 
            navigation = {navigation}
            headerText = "Edit Food"
            routeName = {'Profile'}
        />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default EditFoodScreen;