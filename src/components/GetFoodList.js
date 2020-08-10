import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, ToastAndroid } from 'react-native';
import FoodDetail from './FoodDetail';
import { ScrollView } from 'react-native-gesture-handler';

const GetFoodList = ({ isItem }) => {
    const [isLoading, setLoading] = useState(true);
    const [results, setResults] = useState([]);

    const getMongo = async () => {
        await fetch("http://10.0.2.2:3000", {
            method: "get",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json()) // gives promise
            .then((json) => {

                //ToastAndroid.show("json", ToastAndroid.SHORT)
                setResults(json);
                setLoading(false);
                return json.data;
            })
    }

    useEffect(() => {
        getMongo();

        return () => {getMongo}
    }, [results]);

    return (
        <>
            <ScrollView>
                {isLoading ? <ActivityIndicator
                    size="large"
                    color="#000" />
                    : (
                        results.map(item =>
                            <FoodDetail
                                key={item._id}
                                item={item}
                                isItem={isItem}
                            />
                        )
                    )
                }
            </ScrollView>
        </>
    )
}
const styles = StyleSheet.create({})
export default GetFoodList;
