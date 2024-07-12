const defaultState = {
    id: -1,
    email: "",
    name: "",
    isAuth: false
}


const SET_AUTH = 'SET_AUTH'


export const userReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case SET_AUTH:
            return {
                id: payload.id,
                isAuth: true,
            }

        default:
            return defaultState
    }
}

export const setAuthAction = (payload) => (({type: SET_AUTH, payload}));