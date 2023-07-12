const ADD_ITEM = 'cart/ADD_ITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';

export const addItemToCart = (id) => {
  return {
    type: ADD_ITEM,
    payload: id
  }
}

export default function cartReducer(state = {}, action) {
  switch(action.type) {
    case ADD_ITEM:
      const id = action.payload;

      if (state[id]) {
        const count = state[id].count;
        return {
          ...state,
          [id]: {
            id,
            count: count + 1,
          }
        };
      }

      const newObject = {
        ...state,
        [action.payload]: {
          id: action.payload,
          count: 1,
        },
      }
      return newObject;
    default:
      return state;
  }
}
