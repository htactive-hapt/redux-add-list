import * as actionTypes from '../actions/types'
import { combineReducers } from 'redux';

const initialCakeState = {
    numOfCakes: 10
}

// Cake Action Reducer
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case actionTypes.BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }

        default: return state
    }
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// Ice-Cream Action Reducer
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case actionTypes.BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }

        default: return state
    }
}

const initialUserState = {
    loading: false,
    users: [],
    error: ''
}

// User Action Reducer
const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case actionTypes.FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer,
});

export default rootReducer;