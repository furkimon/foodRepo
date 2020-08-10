import React, {useState, useContext} from 'react';
import {View, Button, ToastAndroid, KeyboardAvoidingView} from 'react-native';
import {Input} from 'react-native-elements';
import Card from './Card';
import CardSection from './CardSection';
import Header from './Header';
import {withNavigation} from 'react-navigation';
import {Context} from '../context/FoodContext';

const CreationForm = ({headerText, navigation, isEdit, item}) => {
  const [name, setName] = useState('');
  const [kcal, setKcal] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbohydrate, setCarbohydrate] = useState('');
  const [fiber, setFiber] = useState('');

  const {createFood, updateFood} = useContext(Context);


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
                updateFood({item, name, kcal, protein, fat, carbohydrate, fiber});
                ToastAndroid.show(name + ' updated', ToastAndroid.SHORT);
                navigation.navigate('Items');
              }}
            />
          ) : (
            <Button
              title="Save"
              onPress={() => {
                createFood({name, kcal, protein, fat, carbohydrate, fiber});
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
