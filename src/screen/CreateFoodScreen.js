import React from 'react';
import { View } from 'react-native';
import CreationForm from '../components/CreationForm';
import { ScrollView } from 'react-native-gesture-handler';
import {withNavigation} from 'react-navigation';

const CreateFood = () => {
    
    return <View>
        
        <ScrollView >
            <CreationForm 
                headerText = "Create Food"
                isEdit = {false}
            />
        </ScrollView>

    </View>
}

export default withNavigation(CreateFood);