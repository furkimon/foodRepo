import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';
import CardSection from '../components/CardSection';
import Card from '../components/Card';
import { Context } from '../context/FoodContext';

const DiaryScreen = ({ navigation }) => {
    const { state, deleteFood } = useContext(Context);

    return <View style={styles.allViewStyle}>
        <Card>
            <Text>
                Diary
            </Text>
        </Card>
        <Card>
            <CardSection>
                <View>
                    <Button
                        title="Add Food"
                        onPress={() => navigation.navigate('Add')}
                    />
                </View>
            </CardSection>

            <CardSection>
                <View>
                    <Button
                        title="BACK"
                        onPress={() => navigation.navigate('loginFlow')}
                    />
                </View>
            </CardSection>
        </Card>
        <Card >

            <View >
                <FlatList
                    data={state}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <CardSection style={styles.foodItemStyle}>
                                <Text>{item.id} - {item.name}</Text>
                                <Button
                                    title="Delete"
                                    onPress={() => deleteFood(item.id)}
                                />
                            </CardSection>
                        )
                    }}
                />
            </View>

        </Card>
    </View>
}

DiaryScreen.navigationOptions = () => {
    return {
        header: () => false
    };
}

const styles = StyleSheet.create({
    allViewStyle: {
        alignItems: 'flex-start'
    },
    textStyle: {
        alignItems: 'center'
    },
    foodItemStyle: {
        alignContent: 'stretch'  // tum satir olmeyo :(
    }
});

export default DiaryScreen;