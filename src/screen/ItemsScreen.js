import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import FoodForm from '../components/FoodForm';

const ItemsScreen = () => {
    return <View style={{ flex: 1 }}>
        <FoodForm
            headerText="Food Library"
            headerButtonText="Create Food"
            isItem = {true}
        />
    </View>
}

const styles = StyleSheet.create({});

export default ItemsScreen;