import { createStore } from 'redux';
import { getCurrentTime } from '../state/store/time';
const initialState = {
  weather: [],
  currentTime: getCurrentTime()
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