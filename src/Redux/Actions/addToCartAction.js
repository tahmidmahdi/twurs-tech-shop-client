import axios from "axios";

export const addCartAction = (payload) => {
  return async (dispatch, getState) => {

    axios.post('https://radiant-escarpment-25711.herokuapp.com/cartData', payload)
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