import { createAction } from 'redux-actions';

const PATH = 'WELCOME_';
export const CHANGE = `${PATH}CHANGE`;
export const LOGIN = `${PATH}LOGIN`;

export const actionChange = createAction(CHANGE);
export const actionLogin = createAction(LOGIN);

const initialState = {
  edit: {
    phone: {
      dirty: false,
      name: 'phone',
      touched: true,
      value: '13512345678',
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

