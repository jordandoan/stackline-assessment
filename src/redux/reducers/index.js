import { ASSIGN_DATA } from '../actions';
export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ASSIGN_DATA:
      return {
        data: action.payload
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
  }
}