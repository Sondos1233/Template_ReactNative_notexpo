export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'PRODUCTS_LIST': {
      return {...state, list: action.payload};
    }
    case 'PRODUCTS_DETAILS': {
      return {...state, details: action.payload};
    }
    case 'CLEAR_DETAILS': {
      return {...state, details: {}};
    }
    default: {
      return state;
    }
  }
};
