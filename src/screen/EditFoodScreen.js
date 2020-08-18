import React from 'react';
import { View, StyleSheet } from 'react-native';
import CreationForm from '../components/CreationForm';
import { ScrollView } from 'react-native-gesture-handler';


const EditFoodScreen = ({navigation}) => {
 

  const item = navigation.getParam('item');
  

  return (
    
    <View>
      <ScrollView>
        <CreationForm
          headerText="Edit Food"
          item={item}
          isEdit = {true} />
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
