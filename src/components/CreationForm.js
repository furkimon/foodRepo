import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';
import Card from './Card';
import CardSection from './CardSection';
import Header from './Header';

const CreationForm = ({headerText}) => {
  const [name, setName] = useState('');
  const [kcal, setKcal] = useState('');
  const [protein, setProtein] = useState('');
  const [fat, setFat] = useState('');
  const [carbohydrate, setCarbohydrate] = useState('');
  const [fiber, setFiber] = useState('');

  const submitData = () => {
    fetch("http://localhost:3000/send-data", {
        method: "post",
        headers: {
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
            name,
            kcal,
            protein,
            fat,
            carbohydrate,
            fiber
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}

  return (
    <View>
      <Header headerText={headerText} />
      <View style={{flex: 1}}>
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

        <Button
          title="Save"
          onPress={() => submitData(name, kcal, protein, fat, carbohydrate, fiber)}
        />
      </View>
    </View>
  );
};

export default CreationForm;
