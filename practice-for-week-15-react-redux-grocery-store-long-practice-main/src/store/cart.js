const ADD_ITEM = 'cart/ADD_ITEM';
const REMOVE_ITEM = 'cart/REMOVE_ITEM';
const INCREMENT_COUNT = 'cart/INCREMENT_COUNT';
const DECREMENT_COUNT = 'cart/DECREMENT_COUNT';

export const addItemToCart = (id) => {
  return {
    type: ADD_ITEM,
    payload: id
  }
}

export const removeItemFromCart = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  }
}

export const incrementItemCount = (id) => {
  return {
    type: INCREMENT_COUNT,
    payload: id
  }
}

export const decrementItemCount = (id) => {
  return {
    type: DECREMENT_COUNT,
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
    case REMOVE_ITEM:
      const newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    case INCREMENT_COUNT:
      const newObj = {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          count: state[action.payload].count + 1
        }
      }
      return newObj;
    case DECREMENT_COUNT:
      const newObj2 = {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          count: state[action.payload].count - 1
        }
      }
      return newObj2;
    default:
      return state;
  }
}
