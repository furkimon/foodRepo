import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    
    return (
        <View style={styles.background}>
            <View style = {styles.inputStyle}>
                <Input
                    value={term}
                    onChangeText={onTermChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder='Search'
                    onEndEditing = {onTermSubmit}
                />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    inputStyle: {
        
        flex: 1
    }
})

export default SearchBar;