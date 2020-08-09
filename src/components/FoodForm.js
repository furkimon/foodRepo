import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import GetFoodList from './GetFoodList';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';

const FoodForm = ({ headerButtonText, headerText, isItem}) => {
    const [term, setTerm] = useState('');

    return <View style={{flex: 1}}>

        <Header 
            headerText={headerText} 
            headerButtonText = {headerButtonText}
        />

        <SearchBar
            term = {term} 
            onTermChange = {(newTerm) => setTerm(newTerm)} 
            onTermSubmitted = { () => console.log('term submitted')}
        />

        <ScrollView >
            <GetFoodList
                isItem = {isItem}
            />
        </ScrollView>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row'
    }
});

export default FoodForm;