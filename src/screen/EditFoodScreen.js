import React from 'react';
import {View, StyleSheet} from 'react-native';
import FoodForm from '../components/FoodForm';
import CreationForm from '../components/CreationForm';
import {ScrollView} from 'react-native-gesture-handler';

/*<FoodForm 
            
            routeName = 'Items'
            isEdit = {true}
        />
        */
const EditFoodScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <CreationForm headerText="Edit Food" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
  },
});

export default EditFoodScreen;
