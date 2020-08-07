import React, { useState } from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';
import CreationForm from '../components/CreationForm';
import { ScrollView } from 'react-native-gesture-handler';

const CreateFood = () => {
    
    

    return <View>
        
        <ScrollView>
            <CreationForm 
                headerText = "Create Food"
            />
        </ScrollView>

    </View>
}

export default CreateFood;