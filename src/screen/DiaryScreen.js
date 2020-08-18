import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Button, FlatList, ScrollView } from 'react-native';
import CardSection from '../components/CardSection';
import Card from '../components/Card';
import { Context } from '../context/FoodContext';

const DiaryScreen = ({ navigation }) => {
    const { state, removeFood } = useContext(Context);

    let breakfastArray = [];
    let dinnerArray = [];
    let isDinner = { isDinner: true };
    var breakfastKcalTot = 0;
    var dinnerKcalTot = 0;

    useEffect(() => {
        calculateBreakfastKcal()
    }, [breakfastArray])

    
    useEffect(() => {
        calculateDinnerKcal()
    }, [dinnerArray])

    const calculateBreakfastKcal = () => {
        breakfastKcalTot = breakfastArray.reduce((acc, item) => acc + parseFloat(item.kcal), 0)
        console.log('bf ' + breakfastKcalTot)
        return breakfastKcalTot;
    }

    const calculateDinnerKcal = () => {
        dinnerKcalTot = dinnerArray.reduce((acc, item) => acc + parseFloat(item.kcal), 0)
        console.log('dinner ' + dinnerKcalTot)
        return dinnerKcalTot;
    }

    

    const getHeader = () => {
        return (
            <View>
                <Card>
                    <Text>Diary</Text>
                </Card>
                <Card>
                    <CardSection>
                        <Text style={styles.mealNameStyle}> Breakfast</Text>
                    </CardSection>
                    <CardSection>
                        <View>
                            <Button
                                title="Add Food"
                                onPress={() => {
                                    isDinner.isDinner = false;
                                    navigation.navigate('Add', { isDinner })
                                }} />
                        </View>
                    </CardSection>
                    <CardSection>
                        <View>
                            <Text> {breakfastKcalTot}</Text>
                        </View>
                    </CardSection>
                </Card>
            </View>
        )
    }

    const getMiddle = () => {
        return (
            <View>
                <Card>
                    <CardSection>
                        <View style={styles.mealNameStyle}><Text >Dinner</Text></View>
                    </CardSection>
                    <CardSection>
                        <View>
                            <Button
                                title="Add Food"
                                onPress={() => {
                                    isDinner.isDinner = true;
                                    navigation.navigate('Add', { isDinner })
                                }}
                            />
                        </View>
                    </CardSection>
                </Card>
            </View>
        )
    }

    const getFooter = () => {
        return (
            <View>
                <Card >
                    <View >
                        <FlatList
                            data={state}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                if (item.type == true) {
                                    if(!dinnerArray.includes(item)){
                                    dinnerArray.push(item)
                                    }
                                    return (
                                        <Card>
                                            <CardSection>
                                                <View style={styles.boxStyle}>
                                                    <Text>{item.name} </Text>
                                                </View>
                                            </CardSection>
                                            <CardSection>
                                                <View style={styles.boxStyle}>
                                                    <Text>{item.kcal} </Text>
                                                </View>
                                            </CardSection>
                                            <CardSection>
                                                <View style={styles.boxStyle}>
                                                    <Text>{item.protein} </Text>
                                                </View>
                                            </CardSection>
                                            <CardSection>
                                                <View style={styles.boxStyle}>
                                                    <Text>{item.fat} </Text>
                                                </View>
                                            </CardSection>
                                            <CardSection>
                                                <View style={styles.boxStyle}>
                                                    <Text>{item.carbohydrate} </Text>
                                                </View>
                                            </CardSection>
                                            <CardSection>
                                                <View style={styles.boxStyle}>
                                                    <Text>{item.fiber} </Text>
                                                </View>
                                            </CardSection>
                                            <CardSection>
                                                <Button
                                                    title="Remove"
                                                    onPress={() => {
                                                        removeFood(item.id)
                                                        dinnerArray.forEach(element => {
                                                            if (element.id === item.id) {
                                                                dinnerArray.splice(element, 1);
                                                            }
                                                        })
                                                    }}
                                                />
                                            </CardSection>
                                        </Card>
                                    )
                                }
                            }}
                            ListHeaderComponent={getMiddle}
                        />
                    </View>
                </Card>
            </View>
        )
    }

    return <View style={styles.allViewStyle}>
        <Card >
            <View >
                <FlatList
                    data={state}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        if (item.type == false) {
                            if(!breakfastArray.includes(item)){
                                breakfastArray.push(item)
                            }
                            
                            return (
                                <Card>
                                    <CardSection>
                                        <View style={styles.boxStyle}>
                                            <Text>{item.name} </Text>
                                        </View>
                                    </CardSection>
                                    <CardSection>
                                        <View style={styles.boxStyle}>
                                            <Text>{item.kcal} </Text>
                                        </View>
                                    </CardSection>
                                    <CardSection>
                                        <View style={styles.boxStyle}>
                                            <Text>{item.protein} </Text>
                                        </View>
                                    </CardSection>
                                    <CardSection>
                                        <View style={styles.boxStyle}>
                                            <Text>{item.fat} </Text>
                                        </View>
                                    </CardSection>
                                    <CardSection>
                                        <View style={styles.boxStyle}>
                                            <Text>{item.carbohydrate} </Text>
                                        </View>
                                    </CardSection>
                                    <CardSection>
                                        <View style={styles.boxStyle}>
                                            <Text>{item.fiber} </Text>
                                        </View>
                                    </CardSection>
                                    <CardSection>
                                        <Button
                                            title="Remove"
                                            onPress={() => {
                                                removeFood(item.id)
                                                breakfastArray.forEach(element => {
                                                    if (element.id === item.id) {
                                                        breakfastArray.splice(element, 1);
                                                    }
                                                })
                                            }}
                                        />
                                    </CardSection>
                                </Card>
                            )
                        }
                    }}
                    ListHeaderComponent={getHeader}
                    ListFooterComponent={getFooter} // getMiddle is in this
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
    boxStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 50,
        width: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    mealNameStyle: {
        backgroundColor: '#b2b2b2'
    }
});

export default DiaryScreen;