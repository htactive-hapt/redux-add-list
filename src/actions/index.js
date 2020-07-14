import * as actionTypes from './types'
import axios from 'axios'
// Cake Actions
export const buyCake = (number = 1) => {
    return {
        type: actionTypes.BUY_CAKE,
        payload: number
    }
}

// Ice-Cream Actions
export const buyIceCream = () => {
    return {
        type: actionTypes.BUY_ICECREAM
    }
}


// User Actions
export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                dispatch(fetchUsersFailure(error.message))
            })
    }
}

export const fetchUsersRequest = () => {
    return {
        type: actionTypes.FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: actionTypes.FETCH_USERS_FAILURE,
        payload: error
    }
}