export const DO_GET_HOME_TEXT = 'DO_GET_HOME_TEXT';
export const SET_HOME_TEXT = 'SET_HOME_TEXT';

export function doGetHomeText() {
  return { type: DO_GET_HOME_TEXT };
}

export function setHomeText(data) {
  return { type: SET_HOME_TEXT, data };
}
