import { ASSIGN_DATA, ASSIGN_SALES } from '../actions';

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ASSIGN_DATA:
      return {
        ...state,
        data: action.payload
      }
    case ASSIGN_SALES:
      return {
        ...state,
        showSales: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  data: {
    "id": "",
    "title": "",
    "image": "",
    "subtitle": "",
    "brand": "",
    "reviews": [],
    "retailer": "",
    "details": [],
    "tags": [],
    "sales": [],
  },
  showSales: true,
}