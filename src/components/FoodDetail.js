import React, { useContext } from 'react';
import { Text, StyleSheet, View, Button, ToastAndroid } from 'react-native';
import Card from './Card';
import CardSection from '../components/CardSection';
import { Context } from '../context/FoodContext';

const FoodDetail = ({ movie, navigation, routeName }) => {
    const { title, releaseYear, id } = movie;
    const { addFood } = useContext(Context);

    return (
        <Card>
            <View style = {styles.cardStyle}>
                <CardSection>
                    <View style={styles.idStyle}>
                        <Text>{id}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.contentStyle}>
                        <Text>{releaseYear}</Text>
                        <Text>{title}</Text>
                    </View>
                </CardSection>
                <CardSection style = {styles.buttonStyle}>
                    <View >
                        <Button
                            title="Add this"
                            onPress={() => {
                                addFood(movie);
                                ToastAndroid.show(title + ' added', ToastAndroid.SHORT);
                                navigation.navigate(routeName)
                            }}
                        />
                    </View>
                </CardSection>
            </View>
        </Card>
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
        flex : 1,
        flexDirection : 'row',
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
    buttonStyle : {
        alignSelf : 'flex-end',
        flexDirection : 'row'
    }
})
export default FoodDetail;