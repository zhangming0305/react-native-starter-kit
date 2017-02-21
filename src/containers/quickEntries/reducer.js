import { createAction } from 'redux-actions';

const PATH = 'QUICK_ENTRY_';
export const CHECK = `${PATH}CHECK`;
export const SAVE = `${PATH}SAVE`;

export const actionCheck = createAction(CHECK);

const initialState = {
  checkedEntries: [
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CHECK:
      {
        const checkedEntries = state.checkedEntries;
        const index = checkedEntries.indexOf(action.payload);
        if (index > -1) {
          checkedEntries.splice(index, 1);
        } else {
          checkedEntries.push(action.payload);
        }
        return { ...state,
          checkedEntries,
        };
      }
    default:
      return state;
  }
}
