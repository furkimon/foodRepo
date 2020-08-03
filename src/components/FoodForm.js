import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import GetFoodList from './GetFoodList';
import Header from '../components/Header';

const FoodForm = ({ navigation, headerText, routeName }) => {

    return <View>
        <Header headerText={headerText} />

        <GetFoodList
            navigation={navigation}
            routeName={routeName}
        />

    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default FoodForm;