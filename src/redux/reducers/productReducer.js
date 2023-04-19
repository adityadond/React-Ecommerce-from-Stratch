import { SELECTED_PRODUCT, SET_PRODUCTS ,REMOVE_SELECTED_PRODUCT,FETCH_PRODUCTS} from "./../constants/action-types";

const initialState = {
  products: [],
};

export const productReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.payload};

      case FETCH_PRODUCTS:
      return {...state, products: action.payload};
    default:
      return state;
  }
};

export const selectProductReducer = (state={}, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {...state,  ...action.payload};

      
        case REMOVE_SELECTED_PRODUCT:
          return {};
    default:
      return state;
  }
};
