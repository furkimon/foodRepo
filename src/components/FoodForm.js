import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GetFoodList from './GetFoodList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

const FoodForm = ({ headerText, routeName, isEdit, showRoute}) => {
    const [term, setTerm] = useState('');

    return <View>

        <Header headerText={headerText} />

        <SearchBar
            term = {term} 
            onTermChange = {(newTerm) => setTerm(newTerm)} 
            onTermSubmitted = { () => console.log('term submitted')}
        />

        <GetFoodList
            routeName={routeName}
            isEdit = {isEdit}
        />

    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default FoodForm;