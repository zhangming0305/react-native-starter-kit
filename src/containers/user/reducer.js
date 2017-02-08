import { createAction } from 'redux-actions';

const PATH = 'USER_';
export const LIST = `${PATH}LIST`;

export const actionList = createAction(LIST);

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LIST:
      {
        return { ...state,
          data: action.payload,
        };
      }
    default:
      return state;
  }
}
