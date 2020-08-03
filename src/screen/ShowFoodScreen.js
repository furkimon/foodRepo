import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ShowFoodScreen = ({navigation}) => {
    
    const movie = navigation.getParam('movie');
    const { title, releaseYear, id } = movie;
    
    return (
        <View>
            <Text>
                ShowFoodScreen
            </Text>
            <Text>
                {id} {title} {releaseYear}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ShowFoodScreen;