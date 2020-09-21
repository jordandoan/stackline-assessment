import data from '../data.json';
export const ASSIGN_DATA = "ASSIGN_DATA";
export const ASSIGN_SALES = "ASSIGN_SALES";

export const assignSales = (answer) => {
  return {type: ASSIGN_SALES, payload: answer}
}

export const loadDefault = () => {
  const payload = data[0];
  return {type: ASSIGN_DATA, payload: payload}
}