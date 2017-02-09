import { createAction } from 'redux-actions';

const PATH = 'TAB_';
export const CURRENT = `${PATH}CURRENT`;

export const actionCurrent = createAction(CURRENT);

const initialState = {
  currentTab: 'index',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT:
      {
        return { ...state,
          currentTab: action.payload,
        };
      }
    default:
      return state;
  }
}

