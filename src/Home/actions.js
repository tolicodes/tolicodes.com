export const DO_API_CALL = 'DO_API_CALL';
export const SET_API_RESPONSE = 'SET_API_RESPONSE';

export function apiCall() {
  return { type: DO_API_CALL };
}

export function setApiResponse(data) {
  return { type: SET_API_RESPONSE, data };
}
