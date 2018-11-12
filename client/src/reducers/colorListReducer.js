import { GET_RANDOM_LIST, GET_SPECIFIC_LIST } from '../actions';

export default function(state = [], action) {
  switch(action.type) {
    case GET_RANDOM_LIST:
      return action.payload;
    case GET_SPECIFIC_LIST:
      return action.payload;
    default:
      return state;
  }
}