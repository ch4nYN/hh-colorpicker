import axios from 'axios';

export const GET_RANDOM_LIST = 'get_random_list';
export const GET_SPECIFIC_LIST = 'get_specific_list';

export const GET_PICKED_COLOR = 'get_picked_color';

export const getRandom = () => {
  return (dispatch) => {
    axios.get('/api/color/randomize')
      .then(res => {
        dispatch({ type: GET_RANDOM_LIST, payload: res.data.data })
      });
  }
}
export const getSpecific = (color) => {
  return (dispatch) => {
    axios.get(`/api/color/${color}`)
      .then(res => {
        dispatch({ type: GET_SPECIFIC_LIST, payload: res.data.data });
      })
  }
}