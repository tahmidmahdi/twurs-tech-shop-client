import axios from "axios";

export const addCartAction = (payload) => {
    return async (dispatch, getState) => {

        axios.post('http://localhost:4000/cartData', payload)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });


          
        
        dispatch({ 
            type: 'ADD_TO_CART',
            payload
        
        })
    }
}