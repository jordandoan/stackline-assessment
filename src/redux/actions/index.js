import data from '../data.json';
export const ASSIGN_DATA = "ASSIGN_DATA";
export const ASSIGN_SALES = "ASSIGN_SALES";

// Sets view based on whether or not sales button was clicked
export const assignSales = (answer) => {
  return {type: ASSIGN_SALES, payload: answer}
}

// Loads data from JSON file and sends to Redux store
export const loadDefault = () => {
  const payload = data[0];
  return {type: ASSIGN_DATA, payload: payload}
}