import data from '../data.json';
export const ASSIGN_DATA = "ASSIGN_DATA";

export const loadDefault = () => {
  const payload = data[0];
  return {type: ASSIGN_DATA, payload: payload}
}