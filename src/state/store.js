import { createStore } from 'redux';


const initialState = {
  weather: [],
};


const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};


const store = createStore(weatherReducer);

export default store;
