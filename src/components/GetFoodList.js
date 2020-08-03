import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import foodApi from '../api/foodApi';
import FoodDetail from './FoodDetail';

const GetFoodList = ({ navigation, routeName, isEdit}) => {
    const [isLoading, setLoading] = useState(true);
    const [results, setResults] = useState([]);

    const getApi = async () => {
        const response = await foodApi.get('/movies.json');
        setResults(response.data.movies);
        setLoading(false);
    }

    useEffect(() => {
        getApi();
    }, []);

    return (
        <>
            {isLoading ? <ActivityIndicator
            size = "large"
            color = "#000" />
                : (
                    results.map(movie =>
                        <FoodDetail
                            key={movie.id}
                            movie={movie}
                            routeName={routeName}
                            isEdit = {isEdit}
                        />
                    )
                )
            }
        </>
    )
}
const styles = StyleSheet.create({})
export default GetFoodList;