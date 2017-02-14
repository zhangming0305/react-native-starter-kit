import { createAction } from 'redux-actions';

const PATH = 'GOODS_EDIT_';
export const LOAD = `${PATH}LOAD`;
export const CHANGE = `${PATH}CHANGE`;

export const actionLoad = createAction(LOAD);
export const actionChange = createAction(CHANGE);

const initialState = {
  edit: {

  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD:
      {
        return { ...state,
          edit: action.payload,
        };
      }
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
