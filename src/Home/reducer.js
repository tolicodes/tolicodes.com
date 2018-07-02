import update from 'immutability-helper';

import {
  SET_API_RESPONSE,
} from './actions';

const initialState = {
  apiResponse: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_API_RESPONSE: {
      return update(
        state,
        {
          apiResponse: {
            $set: action.data,
          }
        }
      );
    }

    default: {
      return state;
    }
  }
}
