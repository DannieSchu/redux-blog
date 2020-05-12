import { ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((_, index) => index !== action.payload);
    case UPDATE_POST: 
      return state.map((blog, index) => {
        if(index === action.payload.index) return action.payload.post;
        return blog;
      });
    default:
      return state;
  }
}
