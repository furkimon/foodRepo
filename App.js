import React from 'react';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignUpScreen from './src/screen/SignUpScreen';
import SignInScreen from './src/screen/SignInScreen';

import DiaryScreen from './src/screen/DiaryScreen';
import ProfileScreen from './src/screen/ProfileScreen';

import AddFoodScreen from './src/screen/AddFoodScreen';
import EditFoodScreen from './src/screen/EditFoodScreen';

import InfoScreen from './src/screen/InfoScreen';
import ItemsScreen from './src/screen/ItemsScreen';
import ShowFoodScreen from './src/screen/ShowFoodScreen';

import { Provider } from './src/context/FoodContext';

const switchNavigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        Signup: SignUpScreen,
        Signin: SignInScreen
    }),
    mainFlow: createBottomTabNavigator({
        diaryFlow: createStackNavigator({
            Diary: DiaryScreen,
            Add: AddFoodScreen
        }),
        profileFlow: createStackNavigator({
            Profile: ProfileScreen,
            Info: InfoScreen,
            itemsFlow: createStackNavigator({
                Items: ItemsScreen,
                Edit: EditFoodScreen,
                Show: ShowFoodScreen
            })
        })
    })
});

const App = createAppContainer(switchNavigator);

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    )
};