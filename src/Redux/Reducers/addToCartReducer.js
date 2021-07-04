const initialState = {
    cart: []
}
const addCartReducer = (state = initialState,  action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {
            const newState = {
                ...state,
                // cart: [...state.cart, action.payload]
                
                cart: [...state.cart, state.cart?.length ? state.cart.find(data => data._id !== action.payload?._id)  : action.payload]
                
            }
            return newState
        }
        default: {

            return state
        }
    }
}

export default addCartReducer;