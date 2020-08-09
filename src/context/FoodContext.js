import createDataContext from './createDataContext';



const foodReducer = (state, action) => {
    switch (action.type){
        case 'delete_food' :
            return state.filter((food) => food.id !== action.payload)
        case 'add_food' :
            return [...state, {
                id : Math.floor(Math.random() * 9999).toString(),
                name : action.payload.name }];
        default :
            return state;
    }
}

const addFood = (dispatch) => {
    return (item) => {
        dispatch({type : 'add_food', payload : item})
    }
}

const deleteFood = (dispatch) => {
    return (id) => {
        dispatch({type : 'delete_food', payload : id})
    }
}

export const {Context, Provider} = createDataContext(
    foodReducer, 
    {addFood, deleteFood},
    []
);