import React, { useState, useContext } from 'react';
import { View, Button, ToastAndroid, KeyboardAvoidingView } from 'react-native';
import { Input } from 'react-native-elements';
import Card from './Card';
import CardSection from './CardSection';
import Header from './Header';
import { withNavigation } from 'react-navigation';
import { Context } from '../context/FoodContext';

const CreationForm = ({ headerText, navigation, isEdit, item }) => {

  const { createFood, updateFood } = useContext(Context);

  const getDetails = (type) => {
    
    if (item) {
      switch (type) {
        case 'id' :
          return item._id.toString();
        case 'name':
          return item.name.toString();
        case 'kcal':
          return item.kcal.toString();
        case 'protein':
          return item.protein.toString();
        case 'fat':
          return item.fat.toString();
        case 'carbohydrate':
          return item.carbohydrate.toString();
        case 'fiber':
          return item.fiber.toString();
      }
    }
    return ' ';
  }

  const [name, setName] = useState(getDetails('name'));
  const [kcal, setKcal] = useState(getDetails('kcal'));
  const [protein, setProtein] = useState(getDetails('protein'));
  const [fat, setFat] = useState(getDetails('fat'));
  const [carbohydrate, setCarbohydrate] = useState(getDetails('carbohydrate'));
  const [fiber, setFiber] = useState(getDetails('fiber'));

  const foodItem = { name, kcal, protein, fat, carbohydrate, fiber }

  return (
    <View>
      <Header headerText={headerText} />
      <View>
        <KeyboardAvoidingView>
          <Card>
            <CardSection>
              <Input
                placeholder="eg. oat meal"
                label="Name"
                value={name}
                onChangeText={setName}
              />
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Input
                placeholder="eg. 120 kcal"
                label="Kcal"
                value={kcal}
                onChangeText={setKcal}
              />
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Input
                placeholder="eg. 12 gr"
                label="Protein"
                value={protein}
                onChangeText={setProtein}
              />
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Input
                placeholder="eg. 7 gr"
                label="Fat"
                value={fat}
                onChangeText={setFat}
              />
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Input
                placeholder="eg. 65 gr"
                label="Carbohydrate"
                value={carbohydrate}
                onChangeText={setCarbohydrate}
              />
            </CardSection>
          </Card>
          <Card>
            <CardSection>
              <Input
                placeholder="eg. 13 gr"
                label="Fiber"
                value={fiber}
                onChangeText={setFiber}
              />
            </CardSection>
          </Card>
          {isEdit ? (
            <Button
              title="Update"
              onPress={() => {
                const id = getDetails('id').toString();
                const updateItem = {id, name, kcal, protein, fat, carbohydrate, fiber}
                updateFood( updateItem );
                ToastAndroid.show(name + ' updated', ToastAndroid.SHORT);
                navigation.navigate('Items');
              }}
            />
          ) : (
              <Button
                title="Save"
                onPress={() => {
                  createFood(foodItem);
                  ToastAndroid.show(name + ' added', ToastAndroid.SHORT);
                  navigation.navigate('Items');
                }}
              />
            )}
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default withNavigation(CreationForm);
