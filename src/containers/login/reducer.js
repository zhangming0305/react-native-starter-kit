import { createAction } from 'redux-actions';

const PATH = 'LOGIN_';
export const CHANGE = `${PATH}CHANGE`;

export const actionChange = createAction(CHANGE);

const initialState = {
  edit: {
    username: {
      dirty: false,
      name: 'username',
      touched: true,
      value: '18809807940',
    },
    password: {
      dirty: false,
      name: 'password',
      touched: true,
      value: '123qweASD.',
    },
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHANGE:
      {
        return { ...state,
          edit: Object.assign(state.edit, action.payload),
        };
      }
    default:
      return state;
  }
}
