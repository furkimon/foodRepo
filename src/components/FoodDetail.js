import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import Card from './Card';
import CardSection from '../components/CardSection';
import { Context } from '../context/FoodContext';
import { withNavigation } from 'react-navigation';

const FoodDetail = ({ item, isItem, navigation }) => {
    const { name, kcal, protein, fat, carbohydrate, fiber } = item;
    const { addFood } = useContext(Context);

    return (
        <TouchableOpacity 
            disabled = {!isItem} 
            onPress = {() => navigation.navigate('Edit', {item})}
        >
            <Card>
                <View style={styles.cardStyle}>
                    <CardSection>
                        <View style={styles.idStyle}>
                            <Text>{name}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.idStyle}>
                            <Text>{kcal}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.idStyle}>
                            <Text>{protein}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.idStyle}>
                            <Text>{fat}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.idStyle}>
                            <Text>{carbohydrate}</Text>
                        </View>
                    </CardSection>
                    <CardSection>
                        <View style={styles.idStyle}>
                            <Text>{fiber}</Text>
                        </View>
                    </CardSection>
                    

                    {isItem ? null :
                        <CardSection >
                            <View style={styles.buttonStyle}>
                                <Button
                                    title="Add this"
                                    onPress={() => {
                                        addFood(item);
                                        ToastAndroid.show(name + ' added', ToastAndroid.SHORT);
                                        navigation.navigate('Diary')
                                    }}
                                />
                            </View>
                        </CardSection>
                    }
                </View>
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    cardStyle: {
        borderWidth: 3,
        borderColor: 'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'

    },
    idStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 50,
        width: 50,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    buttonStyle: {
        alignSelf: 'flex-end',
        flexDirection: 'row'
    }
})
export default withNavigation(FoodDetail);