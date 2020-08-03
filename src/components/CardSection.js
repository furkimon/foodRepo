import React from 'react';
import {View, StyleSheet } from 'react-native';

const CardSection = (props) => {
    return (
        <View style = {styles.cardSectionStyle} >
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    cardSectionStyle : {
        borderBottomWidth : 1,
        padding : 5,
        backgroundColor : '#fff',
        borderColor : '#ddd',
        position : 'relative',
        justifyContent : 'space-around',
        flexDirection : 'row'
        
    }
})

export default CardSection;