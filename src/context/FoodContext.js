import createDataContext from './createDataContext';


const foodReducer = (state, action) => {

    switch (action.type) {
        case 'create_food':
            return fetch("http://10.0.2.2:3000/send-data", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: action.payload.name,
                    kcal: action.payload.kcal,
                    protein: action.payload.protein,
                    fat: action.payload.fat,
                    carbohydrate: action.payload.carbohydrate,
                    fiber: action.payload.fiber
                })
            })
                .then(res => res.json())
        case 'update_food':
            return fetch('http://10.0.2.2:3000/update', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: action.payload.id,
                    name: action.payload.name,
                    kcal: action.payload.kcal,
                    protein: action.payload.protein,
                    fat: action.payload.fat,
                    carbohydrate: action.payload.carbohydrate,
                    fiber: action.payload.fiber
                }),
            }).then((res) => res.json())
                .then(data => {
                    //console.log(data)
                });
        case 'delete_food':
            return fetch('http://10.0.2.2:3000/delete', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: action.payload
                }),
            }).then((res) => res.json())
                .then(data => {

                });
        case 'remove_food':
            return state.filter((food) => food.id !== action.payload)
        case 'add_food':
            return [...state, {
                id: Math.floor(Math.random() * 9999).toString(),
                name: action.payload.name,
                kcal : action.payload.kcal,
                protein : action.payload.protein,
                fat : action.payload.fat,
                carbohydrate : action.payload.carbohydrate,
                fiber : action.payload.fiber,
                type : action.payload.isDinner
            }];
        default:
            return state;
    }
}

const addFood = (dispatch) => {
    return (item) => {
        dispatch({ type: 'add_food', payload: item })
    }
}

const deleteFood = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_food', payload: id })
    }
}

const removeFood = (dispatch) => {
    return (id) => {
        dispatch({ type: 'remove_food', payload: id })
    }
}

const createFood = (dispatch) => {
    return (item) => {
        
        dispatch({ type: 'create_food', payload: item })
    }
}

const updateFood = (dispatch) => {
    return (item) => {
        dispatch({ type: 'update_food', payload: item })
    }
}

export const { Context, Provider } = createDataContext(
    foodReducer,
    { addFood, deleteFood, removeFood, createFood, updateFood },
    []
);