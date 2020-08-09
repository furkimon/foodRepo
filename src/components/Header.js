import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {withNavigation} from 'react-navigation';

const Header = ({ navigation, headerText, headerButtonText}) => {
    const {textStyle, viewStyle} = styles;
    
    return (
        <View style = {viewStyle}>
            <Text style = {textStyle}>{headerText}</Text>
            {headerButtonText ? 
                <Button 
                    title = {headerButtonText}
                    onPress = {() => navigation.navigate('Create')}
                />
            : null}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 20
    },
    viewStyle : {
        backgroundColor : '#F8F8F8',
        justifyContent: 'center',
        alignItems : 'center',
        height : 80,
        paddingTop : 15,
        shadowColor : '#000',
        shadowOffset: {
            width : 0,
            height : 2
        },
        shadowOpacity : 0.2,
        elevation : 2,
        position : 'relative'
    }
})

export default withNavigation(Header);