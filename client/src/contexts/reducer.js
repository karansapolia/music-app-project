import { LOGOUT, USER, IS_LOGIN, MODAL_STATE } from './constants';

import initialState from './initialState';

export default function reducer(state, action) {
  switch (action.type) {
    case USER:
      return {
        ...state,
        user: action.payload,
      };
    case IS_LOGIN:
      return {
        ...state,
        isLogin: action.payload,
      };
    case LOGOUT:
      return initialState;
    case MODAL_STATE:
      return {
        ...state,
        modalState: action.payload,
      };
    default:
      return state;
  }
}
