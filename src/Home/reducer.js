import update from 'immutability-helper';

import {
  SET_HOME_TEXT,
} from './actions';

const initialState = {
  homeText: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_HOME_TEXT: {
      return update(
        state,
        {
          homeText: {
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
